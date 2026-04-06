// ─── GitHub OAuth Device Flow Authentication ───
// Ermöglicht Login via GitHub für geteilte Datenbearbeitung.
// Benötigt einen Cloudflare Worker als Token-Proxy.

var SizilienAuth = (function() {
  // ── Konfiguration ──
  // Diese Werte müssen angepasst werden:
  var CLIENT_ID = '';  // GitHub OAuth App Client ID
  var WORKER_URL = ''; // Cloudflare Worker URL (z.B. https://sizilien-auth.workers.dev)

  var STORAGE_KEY = 'sizilien2026_auth';
  var _user = null;
  var _token = null;
  var _pollInterval = null;

  // ── Token laden ──
  function loadToken() {
    try {
      var data = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY));
      if (data && data.token) {
        _token = data.token;
        _user = data.user;
        return true;
      }
    } catch(e) {}
    return false;
  }

  function saveToken(token, user, remember) {
    var data = JSON.stringify({ token: token, user: user });
    if (remember) {
      localStorage.setItem(STORAGE_KEY, data);
    } else {
      sessionStorage.setItem(STORAGE_KEY, data);
    }
    _token = token;
    _user = user;
  }

  function clearToken() {
    sessionStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY);
    _token = null;
    _user = null;
  }

  // ── Token validieren ──
  function validateToken(callback) {
    if (!_token) { callback(false); return; }
    fetch('https://api.github.com/user', {
      headers: { 'Authorization': 'token ' + _token }
    }).then(function(res) {
      if (res.ok) return res.json();
      throw new Error('Invalid token');
    }).then(function(user) {
      _user = { login: user.login, avatar_url: user.avatar_url, name: user.name || user.login };
      callback(true);
    }).catch(function() {
      clearToken();
      callback(false);
    });
  }

  // ── Device Flow starten ──
  function startDeviceFlow(callbacks) {
    if (!CLIENT_ID || !WORKER_URL) {
      callbacks.onError('GitHub OAuth ist noch nicht konfiguriert. Bitte CLIENT_ID und WORKER_URL in shared/auth.js setzen.');
      return;
    }

    fetch('https://github.com/login/device/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        scope: 'public_repo'
      })
    }).then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.error) {
        callbacks.onError('GitHub Fehler: ' + data.error_description);
        return;
      }

      callbacks.onCode(data.user_code, data.verification_uri);

      // Polling starten
      var interval = (data.interval || 5) * 1000;
      var expiresAt = Date.now() + data.expires_in * 1000;

      _pollInterval = setInterval(function() {
        if (Date.now() > expiresAt) {
          clearInterval(_pollInterval);
          callbacks.onError('Code abgelaufen. Bitte erneut versuchen.');
          return;
        }

        fetch(WORKER_URL + '/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            device_code: data.device_code,
            grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
          })
        }).then(function(res) { return res.json(); })
        .then(function(tokenData) {
          if (tokenData.error === 'authorization_pending') return;
          if (tokenData.error === 'slow_down') {
            interval += 5000;
            return;
          }
          if (tokenData.error) {
            clearInterval(_pollInterval);
            callbacks.onError('Fehler: ' + tokenData.error_description);
            return;
          }
          if (tokenData.access_token) {
            clearInterval(_pollInterval);
            _token = tokenData.access_token;
            // User-Info holen
            fetch('https://api.github.com/user', {
              headers: { 'Authorization': 'token ' + _token }
            }).then(function(r) { return r.json(); })
            .then(function(user) {
              _user = { login: user.login, avatar_url: user.avatar_url, name: user.name || user.login };
              saveToken(_token, _user, callbacks.remember || false);
              callbacks.onSuccess(_user);
            });
          }
        }).catch(function() { /* Netzwerkfehler, weiter pollen */ });
      }, interval);
    }).catch(function(err) {
      callbacks.onError('Netzwerkfehler: ' + err.message);
    });
  }

  function cancelFlow() {
    if (_pollInterval) {
      clearInterval(_pollInterval);
      _pollInterval = null;
    }
  }

  // ── Init: beim Laden jeder Seite aufrufen ──
  function init(callback) {
    if (loadToken()) {
      validateToken(function(valid) {
        callback(valid ? _user : null);
      });
    } else {
      callback(null);
    }
  }

  // ── Public API ──
  return {
    init: init,
    login: startDeviceFlow,
    logout: function() {
      clearToken();
      cancelFlow();
    },
    cancel: cancelFlow,
    getToken: function() { return _token; },
    getUser: function() { return _user; },
    isLoggedIn: function() { return !!_token && !!_user; },
    isConfigured: function() { return !!CLIENT_ID && !!WORKER_URL; }
  };
})();
