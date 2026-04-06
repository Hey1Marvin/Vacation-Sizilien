// ─── Personen-System: Dynamisch aus Config ───
// Liest personenNamen aus SizilienConfig, generiert REISENDE dynamisch.
// Verwaltet aktives Profil (wer ist eingeloggt) und Aktivitaetslog.

(function() {
  var PROFIL_KEY = 'sizilien2026_profil';
  var LOG_KEY = 'sizilien2026_aktivitaetslog';
  var FARBEN = ['#2B4A5C', '#C4653A', '#2D8659', '#8e44ad', '#B8860B', '#B03A2E', '#3D7A9E', '#6B7680'];

  // ── Dynamische REISENDE aus Config (mit erweiterten Daten) ──
  function buildReisende() {
    var config = (typeof SizilienConfig !== 'undefined') ? SizilienConfig.load() : null;
    var daten = config && config.personenDaten ? config.personenDaten : null;
    var namen = config ? config.personenNamen : ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'];

    return namen.map(function(name, i) {
      var parts = name.trim().split(/\s+/);
      var initialen = parts.length >= 2
        ? (parts[0][0] + parts[1][0]).toUpperCase()
        : name.substring(0, 2).toUpperCase();
      var extra = daten && daten[i] ? daten[i] : {};
      return {
        id: 'person' + (i + 1),
        name: name,
        farbe: FARBEN[i % FARBEN.length],
        initialen: initialen,
        index: i,
        fuehrerschein: !!extra.fuehrerschein,
        faehrtImAusland: !!extra.faehrtImAusland,
        notizen: extra.notizen || ''
      };
    });
  }

  // Globales REISENDE — wird bei Bedarf neu gebaut
  window.REISENDE = buildReisende();

  function refreshReisende() {
    window.REISENDE = buildReisende();
  }

  // ── Lookup-Funktionen ──
  window.getReisenderById = function(id) {
    return REISENDE.find(function(r) { return r.id === id; }) || null;
  };

  window.getReisenderByName = function(name) {
    return REISENDE.find(function(r) { return r.name === name; }) || null;
  };

  // ── Initialen-Badge rendern ──
  window.renderInitiale = function(reisender, size) {
    size = size || 28;
    if (!reisender) return '';
    var escFn = (typeof esc === 'function') ? esc : function(s) { return s; };
    return '<span class="person-badge" style="background:' + reisender.farbe +
      ';width:' + size + 'px;height:' + size + 'px;line-height:' + size +
      'px;font-size:' + Math.round(size * 0.43) + 'px" title="' + escFn(reisender.name) +
      '">' + escFn(reisender.initialen) + '</span>';
  };

  // ── Person-Select Dropdown ──
  window.renderPersonSelect = function(containerId, onChange) {
    var saved = getActiveUser();
    var escFn = (typeof esc === 'function') ? esc : function(s) { return s; };
    var html = '<select class="person-select" id="' + containerId + '-select" onchange="' + onChange + '">' +
      '<option value="">Wer bist du?</option>';
    REISENDE.forEach(function(r) {
      html += '<option value="' + r.id + '"' + (saved === r.id ? ' selected' : '') + '>' + escFn(r.name) + '</option>';
    });
    html += '</select>';
    return html;
  };

  // ── Aktives Profil ──
  window.getActiveUser = function() {
    return localStorage.getItem(PROFIL_KEY) || '';
  };

  window.setActiveUser = function(id) {
    if (id) {
      localStorage.setItem(PROFIL_KEY, id);
    } else {
      localStorage.removeItem(PROFIL_KEY);
    }
  };

  window.getActiveReisender = function() {
    var id = getActiveUser();
    return id ? getReisenderById(id) : null;
  };

  window.isLoggedIn = function() {
    return !!getActiveUser();
  };

  // ── Profil-Auswahl Modal (beim ersten Besuch) ──
  window.ensureProfil = function(callback) {
    if (isLoggedIn()) {
      if (callback) callback(getActiveReisender());
      return;
    }
    showProfilModal(callback);
  };

  function showProfilModal(callback) {
    // Nicht anzeigen wenn schon ein Modal offen ist
    if (document.getElementById('profil-modal')) return;

    var overlay = document.createElement('div');
    overlay.className = 'profil-modal-overlay';
    overlay.id = 'profil-modal';

    var escFn = (typeof esc === 'function') ? esc : function(s) { return s; };
    var iconsFn = (typeof Icons !== 'undefined' && Icons.users) ? Icons.users({size: 24}) : '';

    var html = '<div class="profil-modal">' +
      '<div class="profil-modal-header">' + iconsFn + ' Willkommen!</div>' +
      '<p class="profil-modal-text">Waehle deinen Namen, damit deine Aktionen zugeordnet werden koennen.</p>' +
      '<div class="profil-modal-list">';

    REISENDE.forEach(function(r) {
      html += '<button class="profil-modal-btn" onclick="selectProfil(\'' + r.id + '\')" ' +
        'style="--person-color:' + r.farbe + '">' +
        renderInitiale(r, 36) +
        '<span class="profil-modal-name">' + escFn(r.name) + '</span>' +
      '</button>';
    });

    html += '</div>' +
      '<p class="profil-modal-hint">Du kannst dein Profil jederzeit ueber die Navigation aendern.</p>' +
    '</div>';

    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    // Speichere Callback global
    window._profilCallback = callback;
  }

  window.selectProfil = function(id) {
    setActiveUser(id);
    var modal = document.getElementById('profil-modal');
    if (modal) modal.remove();

    var r = getReisenderById(id);
    if (typeof toast === 'function' && r) {
      toast('Angemeldet als ' + r.name);
    }

    logAktion('login', 'Profil ausgewaehlt');
    updateNavProfil();

    if (window._profilCallback) {
      window._profilCallback(r);
      window._profilCallback = null;
    }

    // Seite ggf. neu rendern
    if (typeof onProfilChange === 'function') {
      onProfilChange(r);
    }
  };

  window.logoutProfil = function() {
    logAktion('logout', 'Abgemeldet');
    setActiveUser('');
    updateNavProfil();
    if (typeof toast === 'function') toast('Abgemeldet');
    if (typeof onProfilChange === 'function') onProfilChange(null);
  };

  // ── Nav-Profil-Anzeige aktualisieren ──
  window.updateNavProfil = function() {
    var container = document.getElementById('nav-profil');
    if (!container) return;

    var r = getActiveReisender();
    var escFn = (typeof esc === 'function') ? esc : function(s) { return s; };
    var iconsFn = (typeof Icons !== 'undefined');

    if (r) {
      container.innerHTML =
        '<div class="nav-profil-active">' +
          renderInitiale(r, 26) +
          '<span class="nav-profil-name">' + escFn(r.name) + '</span>' +
          '<button class="nav-profil-switch" onclick="showProfilSwitcher()" title="Profil wechseln">' +
            (iconsFn ? Icons.chevronDown({size: 14}) : '\u25BC') +
          '</button>' +
        '</div>';
    } else {
      container.innerHTML =
        '<button class="nav-profil-login" onclick="ensureProfil()">' +
          (iconsFn ? Icons.user({size: 16}) : '') +
          ' Anmelden' +
        '</button>';
    }
  };

  window.showProfilSwitcher = function() {
    // Kleines Dropdown unter dem Profil-Button
    var existing = document.getElementById('profil-dropdown');
    if (existing) { existing.remove(); return; }

    var container = document.getElementById('nav-profil');
    if (!container) return;

    var escFn = (typeof esc === 'function') ? esc : function(s) { return s; };
    var iconsFn = (typeof Icons !== 'undefined');
    var activeId = getActiveUser();

    var html = '<div class="profil-dropdown" id="profil-dropdown">';
    REISENDE.forEach(function(r) {
      var isActive = r.id === activeId;
      html += '<button class="profil-dropdown-item' + (isActive ? ' active' : '') + '" onclick="switchProfil(\'' + r.id + '\')">' +
        renderInitiale(r, 22) +
        '<span>' + escFn(r.name) + '</span>' +
        (isActive && iconsFn ? '<span style="margin-left:auto">' + Icons.check({size: 14}) + '</span>' : '') +
      '</button>';
    });
    html += '<div class="profil-dropdown-divider"></div>' +
      '<button class="profil-dropdown-item logout" onclick="logoutProfil()">' +
        (iconsFn ? Icons.logOut({size: 16}) : '') +
        '<span>Abmelden</span>' +
      '</button>';
    html += '</div>';

    container.insertAdjacentHTML('beforeend', html);

    // Schliessen bei Klick ausserhalb
    setTimeout(function() {
      document.addEventListener('click', closeProfilDropdown);
    }, 10);
  };

  function closeProfilDropdown(e) {
    var dd = document.getElementById('profil-dropdown');
    if (dd && !dd.contains(e.target) && !e.target.closest('.nav-profil-switch')) {
      dd.remove();
      document.removeEventListener('click', closeProfilDropdown);
    }
  }

  window.switchProfil = function(id) {
    var dd = document.getElementById('profil-dropdown');
    if (dd) dd.remove();
    document.removeEventListener('click', closeProfilDropdown);

    setActiveUser(id);
    var r = getReisenderById(id);
    if (typeof toast === 'function' && r) toast('Gewechselt zu ' + r.name);
    logAktion('switch', 'Profil gewechselt');
    updateNavProfil();
    if (typeof onProfilChange === 'function') onProfilChange(r);
  };

  // ── Aktivitaetslog ──
  function getLog() {
    try { return JSON.parse(localStorage.getItem(LOG_KEY)) || []; }
    catch(e) { return []; }
  }

  window.logAktion = function(typ, beschreibung, details) {
    var user = getActiveUser();
    var log = getLog();
    log.unshift({
      person: user,
      typ: typ,
      beschreibung: beschreibung,
      details: details || null,
      datum: new Date().toISOString()
    });
    // Max 100 Eintraege behalten
    if (log.length > 100) log = log.slice(0, 100);
    localStorage.setItem(LOG_KEY, JSON.stringify(log));
  };

  window.getAktivitaetslog = function(limit) {
    var log = getLog();
    return limit ? log.slice(0, limit) : log;
  };

  window.renderAktivitaetslog = function(containerId, limit) {
    var log = getAktivitaetslog(limit || 10);
    var container = document.getElementById(containerId);
    if (!container) return;

    var escFn = (typeof esc === 'function') ? esc : function(s) { return s; };

    if (log.length === 0) {
      container.innerHTML = '<div class="text-muted text-sm" style="text-align:center;padding:var(--space-4)">Noch keine Aktivitaeten.</div>';
      return;
    }

    var html = '<div class="aktivitaets-log">';
    log.forEach(function(entry) {
      var r = getReisenderById(entry.person);
      var zeit = new Date(entry.datum);
      var zeitStr = zeit.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }) +
        ' ' + zeit.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

      html += '<div class="log-entry">' +
        (r ? renderInitiale(r, 22) : '<span class="person-badge" style="background:var(--gray-300);width:22px;height:22px;line-height:22px;font-size:9px">?</span>') +
        '<div class="log-content">' +
          '<span class="log-text">' +
            (r ? '<strong>' + escFn(r.name) + '</strong> ' : '') +
            escFn(entry.beschreibung) +
          '</span>' +
          '<span class="log-zeit">' + zeitStr + '</span>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
  };

  // ── Hilfsfunktion: Aktion nur wenn eingeloggt ──
  window.requireProfil = function(callback) {
    if (!isLoggedIn()) {
      ensureProfil(function(r) {
        if (r && callback) callback(r);
      });
      return false;
    }
    return true;
  };

  // ── refreshReisende global verfuegbar ──
  window.refreshReisende = refreshReisende;

})();
