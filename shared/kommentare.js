// ─── Universelles Kommentar-System ───
// Kommentare können zu Hotels, Aktivitäten und anderen Items hinzugefügt werden.

var SizilienKommentare = (function() {
  var LOCAL_KEY = 'sizilien2026_kommentare';

  function getLocal() {
    try { return JSON.parse(localStorage.getItem(LOCAL_KEY)) || []; }
    catch(e) { return []; }
  }
  function saveLocal(kommentare) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(kommentare));
  }

  // Kommentar hinzufügen
  function add(sektion, itemId, text, callback) {
    var userId = getActiveUser();
    if (!userId) {
      if (typeof toast === 'function') toast('Bitte w\u00E4hle zuerst aus, wer du bist!');
      return;
    }
    if (!text.trim()) return;

    var kommentar = {
      id: 'k' + Date.now(),
      sektion: sektion,
      itemId: String(itemId),
      autor: userId,
      text: text.trim(),
      datum: new Date().toISOString()
    };

    if (typeof SizilienData !== 'undefined' && SizilienData.isConfigured()) {
      SizilienData.addComment(sektion, itemId, userId, text.trim(), callback);
    } else {
      var kommentare = getLocal();
      kommentare.push(kommentar);
      saveLocal(kommentare);
      if (callback) callback(null);
    }
  }

  // Kommentare für ein Item laden
  function getForItem(sektion, itemId, callback) {
    if (typeof SizilienData !== 'undefined' && SizilienData.isConfigured()) {
      SizilienData.load(function(err, data) {
        var filtered = (data.kommentare || []).filter(function(k) {
          return k.sektion === sektion && String(k.itemId) === String(itemId);
        });
        callback(filtered);
      });
    } else {
      var all = getLocal();
      var filtered = all.filter(function(k) {
        return k.sektion === sektion && String(k.itemId) === String(itemId);
      });
      callback(filtered);
    }
  }

  // Kommentar-Thread rendern
  function renderThread(sektion, itemId, containerId) {
    getForItem(sektion, itemId, function(kommentare) {
      var container = document.getElementById(containerId);
      if (!container) return;

      var html = '<div class="kommentar-thread">';
      html += '<div class="kommentar-header" onclick="toggleKommentare(\'' + containerId + '-items\')">' +
        '<strong>Kommentare (' + kommentare.length + ')</strong>' +
        '<span class="kommentar-toggle">\u25BC</span></div>';

      html += '<div class="kommentar-items" id="' + containerId + '-items" style="display:none">';

      if (kommentare.length === 0) {
        html += '<p class="kommentar-empty">Noch keine Kommentare.</p>';
      } else {
        kommentare.forEach(function(k) {
          var reisender = getReisenderById(k.autor);
          var zeit = new Date(k.datum).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
          html += '<div class="kommentar-item">' +
            (reisender ? renderInitiale(reisender, 24) : '<span class="person-badge" style="background:#999;width:24px;height:24px;line-height:24px;font-size:10px">?</span>') +
            '<div class="kommentar-content">' +
              '<div class="kommentar-meta">' +
                '<strong>' + esc(reisender ? reisender.name : k.autor) + '</strong>' +
                '<span class="kommentar-zeit">' + zeit + '</span>' +
              '</div>' +
              '<div class="kommentar-text">' + esc(k.text) + '</div>' +
            '</div></div>';
        });
      }

      // Eingabefeld
      html += '<div class="kommentar-eingabe">' +
        '<input type="text" id="' + containerId + '-input" placeholder="Kommentar schreiben..." ' +
          'onkeydown="if(event.key===\'Enter\')submitKommentar(\'' + sektion + '\',' + itemId + ',\'' + containerId + '\')">' +
        '<button class="btn btn-primary" style="padding:6px 14px;font-size:.82em" ' +
          'onclick="submitKommentar(\'' + sektion + '\',' + itemId + ',\'' + containerId + '\')">Senden</button>' +
      '</div>';

      html += '</div></div>';
      container.innerHTML = html;
    });
  }

  return {
    add: add,
    getForItem: getForItem,
    renderThread: renderThread
  };
})();

// Globale Helfer
function toggleKommentare(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function submitKommentar(sektion, itemId, containerId) {
  var input = document.getElementById(containerId + '-input');
  if (!input || !input.value.trim()) return;
  SizilienKommentare.add(sektion, itemId, input.value, function() {
    SizilienKommentare.renderThread(sektion, itemId, containerId);
    if (typeof toast === 'function') toast('Kommentar hinzugef\u00FCgt!');
  });
}
