// ─── Shared Data Sync via GitHub Contents API ───
// Liest data/shared.json direkt von GitHub (public repo = kein Auth nötig).
// Schreibt über Cloudflare Worker (hält GitHub PAT serverseitig).

var SizilienData = (function() {
  // ── Konfiguration ──
  var REPO_OWNER = 'Hey1Marvin';
  var REPO_NAME = 'Vacation-Sizilien';
  var DATA_PATH = 'data/shared.json';
  var BRANCH = 'main';
  var WORKER_URL = ''; // z.B. 'https://sizilien-sync.marvin.workers.dev' — nach Deploy setzen

  var API_BASE = 'https://api.github.com';
  var _cache = null;
  var _cacheSha = null;
  var _cacheTime = 0;
  var CACHE_TTL = 30000; // 30 Sekunden

  // ── Lokaler Fallback (wenn nicht konfiguriert oder offline) ──
  var LOCAL_KEY = 'sizilien2026_shared';

  function getLocalData() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY)) || getDefaultData();
    } catch(e) { return getDefaultData(); }
  }

  function setLocalData(data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }

  function getDefaultData() {
    return {
      version: 1,
      votes: { unterkuenfte: {}, aktivitaeten: {}, polls: {}, verfuegbarkeit: {} },
      kommentare: [],
      todos: [],
      ideen: [],
      ausgaben: [],
      entscheidungen: {},
      zustaendigkeiten: {}
    };
  }

  function isConfigured() {
    return !!REPO_OWNER && !!REPO_NAME;
  }

  // ── GitHub API: Lesen (public repo = kein Token nötig) ──
  function loadFromGitHub(callback) {
    // Cache prüfen
    if (_cache && (Date.now() - _cacheTime) < CACHE_TTL) {
      callback(null, _cache);
      return;
    }

    var url = API_BASE + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + DATA_PATH + '?ref=' + BRANCH;
    var headers = { 'Accept': 'application/vnd.github.v3+json' };
    // Token optional (public repo braucht keinen)
    var token = (typeof SizilienAuth !== 'undefined') ? SizilienAuth.getToken() : null;
    if (token) headers['Authorization'] = 'token ' + token;

    fetch(url, { headers: headers })
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(file) {
      var content = JSON.parse(atob(file.content));
      _cache = content;
      _cacheSha = file.sha;
      _cacheTime = Date.now();
      // Lokale Kopie aktualisieren
      setLocalData(content);
      callback(null, content);
    })
    .catch(function(err) {
      callback(err, null);
    });
  }

  // ── Schreiben via Cloudflare Worker (kein Auth nötig, CORS-geschützt) ──
  function saveViaWorker(data, message, callback) {
    data.lastUpdated = new Date().toISOString();
    data.lastUpdatedBy = (typeof getActiveUser === 'function') ? (getActiveUser() || '') : '';

    fetch(WORKER_URL + '/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: data,
        message: message || 'Update shared data',
        sha: _cacheSha
      })
    })
    .then(function(res) {
      if (res.status === 409) throw { conflict: true };
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(result) {
      _cache = data;
      _cacheSha = result.sha;
      _cacheTime = Date.now();
      setLocalData(data);
      callback(null);
    })
    .catch(function(err) {
      if (err.conflict) {
        // Neu laden und Konflikt melden
        loadFromGitHub(function(loadErr, freshData) {
          if (loadErr) { callback(loadErr); return; }
          callback({ conflict: true, currentData: freshData });
        });
      } else {
        callback(err);
      }
    });
  }

  // ── GitHub API: Direkt schreiben (mit Token, falls vorhanden) ──
  function saveToGitHub(data, message, callback) {
    var token = (typeof SizilienAuth !== 'undefined') ? SizilienAuth.getToken() : null;

    // Kein Token? → Worker nutzen wenn verfügbar
    if (!token && WORKER_URL) {
      return saveViaWorker(data, message, callback);
    }
    if (!token) {
      // Kein Token, kein Worker → lokal speichern
      setLocalData(data);
      callback(null);
      return;
    }

    var user = (typeof SizilienAuth !== 'undefined') ? SizilienAuth.getUser() : null;
    data.lastUpdated = new Date().toISOString();
    data.lastUpdatedBy = user ? user.login : '';

    var url = API_BASE + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + DATA_PATH;
    var body = {
      message: message || 'Update shared data',
      content: btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2)))),
      sha: _cacheSha,
      branch: BRANCH
    };

    fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': 'token ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify(body)
    })
    .then(function(res) {
      if (res.status === 409) throw { conflict: true };
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(result) {
      _cache = data;
      _cacheSha = result.content.sha;
      _cacheTime = Date.now();
      setLocalData(data);
      callback(null);
    })
    .catch(function(err) {
      if (err.conflict) {
        loadFromGitHub(function(loadErr, freshData) {
          if (loadErr) { callback(loadErr); return; }
          callback({ conflict: true, currentData: freshData });
        });
      } else {
        callback(err);
      }
    });
  }

  // ── Public API ──
  return {
    // Daten laden (GitHub oder lokal)
    load: function(callback) {
      if (isConfigured()) {
        loadFromGitHub(function(err, data) {
          if (err) {
            // Fallback auf lokale Daten
            callback(null, getLocalData());
          } else {
            callback(null, data);
          }
        });
      } else {
        callback(null, getLocalData());
      }
    },

    // Daten speichern (GitHub/Worker oder lokal)
    save: function(data, message, callback) {
      callback = callback || function() {};
      var hasAuth = (typeof SizilienAuth !== 'undefined' && SizilienAuth.isLoggedIn());
      if (isConfigured() && (hasAuth || WORKER_URL)) {
        var self = this;
        saveToGitHub(data, message, function(err) {
          if (err && err.conflict) {
            // Auto-Retry: frische Daten laden, Aenderung nochmal drauflegen
            if (typeof toast === 'function') toast('Synchronisiere...');
            self.load(function(_, freshData) {
              if (freshData) {
                callback({ conflict: true, currentData: freshData });
              } else {
                setLocalData(data);
                callback(null);
              }
            });
          } else if (err) {
            // Fallback auf lokal
            setLocalData(data);
            if (typeof toast === 'function') toast('Lokal gespeichert (offline)');
            callback(null);
          } else {
            if (typeof toast === 'function') toast('Gespeichert!');
            callback(null);
          }
        });
      } else {
        // Lokal speichern
        setLocalData(data);
        callback(null);
      }
    },

    // Cache invalidieren
    invalidateCache: function() {
      _cache = null;
      _cacheTime = 0;
    },

    // Hilfsfunktionen für häufige Operationen
    vote: function(sektion, itemId, userId, value, callback) {
      var self = this;
      function doVote() {
        self.load(function(err, data) {
          if (!data.votes[sektion]) data.votes[sektion] = {};
          if (!data.votes[sektion][itemId]) data.votes[sektion][itemId] = {};
          if (value === null || value === undefined) {
            delete data.votes[sektion][itemId][userId];
          } else {
            data.votes[sektion][itemId][userId] = value;
          }
          self.save(data, userId + ' voted on ' + sektion + ' #' + itemId, function(saveErr) {
            if (saveErr && saveErr.conflict) {
              // Conflict: nochmal mit frischen Daten versuchen
              _cache = null; _cacheTime = 0;
              doVote();
            } else if (callback) {
              callback(saveErr);
            }
          });
        });
      }
      doVote();
    },

    addComment: function(sektion, itemId, userId, text, callback) {
      var self = this;
      self.load(function(err, data) {
        data.kommentare.push({
          id: 'k' + Date.now(),
          sektion: sektion,
          itemId: String(itemId),
          autor: userId,
          text: text,
          datum: new Date().toISOString()
        });
        self.save(data, userId + ' commented on ' + sektion + ' #' + itemId, callback);
      });
    },

    addTodo: function(todo, callback) {
      var self = this;
      self.load(function(err, data) {
        todo.id = 't' + Date.now();
        todo.erstelltAm = new Date().toISOString().split('T')[0];
        data.todos.push(todo);
        self.save(data, 'New todo: ' + todo.text, callback);
      });
    },

    updateTodo: function(todoId, updates, callback) {
      var self = this;
      self.load(function(err, data) {
        var todo = data.todos.find(function(t) { return t.id === todoId; });
        if (todo) {
          Object.keys(updates).forEach(function(k) { todo[k] = updates[k]; });
          self.save(data, 'Updated todo: ' + todo.text, callback);
        }
      });
    },

    addIdee: function(idee, callback) {
      var self = this;
      self.load(function(err, data) {
        idee.id = 'i' + Date.now();
        idee.datum = new Date().toISOString();
        idee.likes = {};
        data.ideen.push(idee);
        self.save(data, 'New idea: ' + idee.text, callback);
      });
    },

    addAusgabe: function(ausgabe, callback) {
      var self = this;
      self.load(function(err, data) {
        ausgabe.id = 'a' + Date.now();
        ausgabe.datum = ausgabe.datum || new Date().toISOString().split('T')[0];
        data.ausgaben.push(ausgabe);
        self.save(data, 'New expense: ' + ausgabe.beschreibung, callback);
      });
    },

    setZustaendigkeit: function(itemId, personId, callback) {
      var self = this;
      self.load(function(err, data) {
        data.zustaendigkeiten[itemId] = personId;
        self.save(data, personId + ' is responsible for ' + itemId, callback);
      });
    },

    isConfigured: isConfigured,
    getLocalData: getLocalData
  };
})();
