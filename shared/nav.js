// ─── Shared Navigation mit Gruppen-Dropdowns, Profil-Anzeige und Breadcrumbs ───
(function() {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var depth = parseInt(nav.getAttribute('data-depth') || '0', 10);
  var prefix = depth === 0 ? './' : '../'.repeat(depth);
  var pageTitle = nav.getAttribute('data-title') || '';

  // ── Alle Seiten (flat, fuer Breadcrumbs und Active-Detection) ──
  var allPages = [
    { folder: '',              file: 'index.html',              label: 'Start',            iconFn: 'home' },
    { folder: 'unterkuenfte',  file: 'unterkuenfte/index.html', label: 'Unterk\u00FCnfte',  iconFn: 'building' },
    { folder: 'fluege',        file: 'fluege/index.html',       label: 'Fl\u00FCge',        iconFn: 'plane' },
    { folder: 'auto',          file: 'auto/index.html',         label: 'Auto & Transport',  iconFn: 'car' },
    { folder: 'aktivitaeten',  file: 'aktivitaeten/index.html', label: 'Aktivit\u00E4ten',  iconFn: 'mapPin' },
    { folder: 'abstimmungen',  file: 'abstimmungen/index.html', label: 'Abstimmungen',      iconFn: 'listChecks' },
    { folder: 'tagesplan',     file: 'tagesplan/index.html',    label: 'Tagesplan',         iconFn: 'calendar' },
    { folder: 'aufgaben',      file: 'aufgaben/index.html',     label: 'Aufgaben',          iconFn: 'listChecks' },
    { folder: 'ideenwand',     file: 'ideenwand/index.html',    label: 'Ideenwand',         iconFn: 'mapPin' },
    { folder: 'packliste',     file: 'packliste/index.html',    label: 'Packliste',         iconFn: 'listChecks' },
    { folder: 'budget',        file: 'budget/index.html',       label: 'Budget',            iconFn: 'wallet' },
    { folder: 'infos',         file: 'infos/index.html',        label: 'Infos',             iconFn: 'helpCircle' }
  ];

  // ── Gruppierte Navigation ──
  var groups = [
    {
      type: 'link',
      label: 'Start',
      iconFn: 'home',
      folder: '',
      file: 'index.html'
    },
    {
      type: 'group',
      label: 'Reise',
      iconFn: 'plane',
      items: [
        { folder: 'unterkuenfte',  file: 'unterkuenfte/index.html', label: 'Unterk\u00FCnfte',  iconFn: 'building' },
        { folder: 'fluege',        file: 'fluege/index.html',       label: 'Fl\u00FCge',        iconFn: 'plane' },
        { folder: 'auto',          file: 'auto/index.html',         label: 'Auto & Transport',  iconFn: 'car' }
      ]
    },
    {
      type: 'group',
      label: 'Planung',
      iconFn: 'calendar',
      items: [
        { folder: 'tagesplan',     file: 'tagesplan/index.html',    label: 'Tagesplan',         iconFn: 'calendar' },
        { folder: 'aktivitaeten',  file: 'aktivitaeten/index.html', label: 'Aktivit\u00E4ten',  iconFn: 'mapPin' },
        { folder: 'abstimmungen',  file: 'abstimmungen/index.html', label: 'Abstimmungen',      iconFn: 'listChecks' }
      ]
    },
    {
      type: 'group',
      label: 'Zusammen',
      iconFn: 'users',
      items: [
        { folder: 'aufgaben',      file: 'aufgaben/index.html',     label: 'Aufgaben',          iconFn: 'listChecks' },
        { folder: 'ideenwand',     file: 'ideenwand/index.html',    label: 'Ideenwand',         iconFn: 'mapPin' },
        { folder: 'packliste',     file: 'packliste/index.html',    label: 'Packliste',         iconFn: 'listChecks' }
      ]
    },
    {
      type: 'group',
      label: 'Mehr',
      iconFn: 'wallet',
      items: [
        { folder: 'budget',        file: 'budget/index.html',       label: 'Budget',            iconFn: 'wallet' },
        { folder: 'infos',         file: 'infos/index.html',        label: 'Infos',             iconFn: 'helpCircle' }
      ]
    }
  ];

  // Detect active page
  var href = window.location.href;
  var activeFolder = '';
  allPages.forEach(function(p) {
    if (p.folder && href.indexOf('/' + p.folder + '/') !== -1) {
      activeFolder = p.folder;
    }
  });
  if (!activeFolder && href.indexOf('/settings/') !== -1) {
    activeFolder = 'settings';
  }

  var hasIcons = (typeof Icons !== 'undefined');

  function icon(name, size) {
    return hasIcons && Icons[name] ? Icons[name]({size: size || 18}) : '';
  }

  // ── Build grouped nav HTML ──
  var navItems = '';
  groups.forEach(function(g, gi) {
    if (g.type === 'link') {
      // Direct link (Start)
      var isActive = g.folder === activeFolder;
      navItems += '<li class="nav-item' + (isActive ? ' active' : '') + '">' +
        '<a href="' + prefix + g.file + '">' + icon(g.iconFn) + ' <span>' + g.label + '</span></a></li>';
    } else {
      // Group with dropdown
      var groupActive = g.items.some(function(item) { return item.folder === activeFolder; });
      var dropdownItems = g.items.map(function(item) {
        var itemActive = item.folder === activeFolder;
        return '<a href="' + prefix + item.file + '" class="nav-dropdown-item' + (itemActive ? ' active' : '') + '">' +
          icon(item.iconFn, 16) + ' ' + item.label + '</a>';
      }).join('');

      navItems += '<li class="nav-item nav-group' + (groupActive ? ' active' : '') + '" data-group="' + gi + '">' +
        '<button class="nav-group-toggle" aria-expanded="false" aria-haspopup="true" onclick="toggleNavGroup(this)">' +
          icon(g.iconFn) + ' <span>' + g.label + '</span> ' +
          '<span class="nav-chevron">' + icon('chevronDown', 14) + '</span>' +
        '</button>' +
        '<div class="nav-dropdown">' + dropdownItems + '</div>' +
      '</li>';
    }
  });

  // Settings
  var settingsActive = activeFolder === 'settings' ? ' active' : '';
  navItems += '<li class="nav-item' + settingsActive + '">' +
    '<a href="' + prefix + 'settings/index.html" aria-label="Einstellungen" title="Einstellungen">' + icon('settings') + '</a></li>';

  var menuIcon = hasIcons ? Icons.menu({size: 24}) : '\u2630';
  var profilHtml = '<div class="nav-profil" id="nav-profil"></div>';

  nav.innerHTML =
    '<nav class="site-nav" role="navigation" aria-label="Hauptnavigation">' +
      '<div class="nav-brand"><a href="' + prefix + 'index.html">Sizilien 2026</a></div>' +
      '<button class="nav-toggle" id="nav-toggle-btn" aria-label="Men\u00FC \u00F6ffnen" aria-expanded="false">' + menuIcon + '</button>' +
      '<ul class="nav-links" id="nav-links-list">' + navItems + '</ul>' +
      profilHtml +
    '</nav>';

  // ── Mobile: Hamburger toggle ──
  var toggleBtn = document.getElementById('nav-toggle-btn');
  var siteNav = nav.querySelector('.site-nav');

  if (toggleBtn && siteNav) {
    toggleBtn.addEventListener('click', function() {
      var isOpen = siteNav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ── Close dropdowns on click outside ──
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-group')) {
      closeAllNavGroups();
    }
  });

  // ── Close dropdown on link click ──
  var navLinksEl = document.getElementById('nav-links-list');
  if (navLinksEl) {
    navLinksEl.addEventListener('click', function(e) {
      if (e.target.closest('.nav-dropdown-item') || (e.target.closest('a') && !e.target.closest('.nav-group-toggle'))) {
        closeAllNavGroups();
        if (siteNav) siteNav.classList.remove('open');
      }
    });
  }

  // ── Profil initialisieren ──
  if (typeof updateNavProfil === 'function') {
    updateNavProfil();
  }

  // ── Breadcrumbs ──
  if (depth > 0) {
    var activePage = allPages.find(function(p) { return p.folder === activeFolder; });
    var crumbHtml = '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      '<a href="' + prefix + 'index.html">Start</a>' +
      '<span class="sep">/</span>';

    if (activePage) {
      if (pageTitle) {
        crumbHtml += '<a href="' + prefix + activePage.file + '">' + activePage.label + '</a>' +
          '<span class="sep">/</span><span>' + pageTitle + '</span>';
      } else {
        crumbHtml += '<span>' + activePage.label + '</span>';
      }
    } else if (activeFolder === 'settings') {
      crumbHtml += '<span>Einstellungen</span>';
    }
    crumbHtml += '</nav>';

    var container = document.querySelector('.container');
    if (container) {
      var crumbDiv = document.createElement('div');
      crumbDiv.style.maxWidth = '1200px';
      crumbDiv.style.margin = '0 auto';
      crumbDiv.style.padding = '0 20px';
      crumbDiv.innerHTML = crumbHtml;
      container.parentNode.insertBefore(crumbDiv, container);
    }
  }
})();

// ── Globale Nav-Group Toggle Funktionen ──
function toggleNavGroup(btn) {
  var li = btn.closest('.nav-group');
  if (!li) return;
  var wasOpen = li.classList.contains('open');
  closeAllNavGroups();
  if (!wasOpen) {
    li.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

function closeAllNavGroups() {
  document.querySelectorAll('.nav-group.open').forEach(function(g) {
    g.classList.remove('open');
    var btn = g.querySelector('.nav-group-toggle');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
}
