// ─── Shared Navigation mit Breadcrumbs ───
(function() {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var depth = parseInt(nav.getAttribute('data-depth') || '0', 10);
  var prefix = depth === 0 ? './' : '../'.repeat(depth);
  var pageTitle = nav.getAttribute('data-title') || '';

  var pages = [
    { folder: '',              file: 'index.html',              label: 'Start',            icon: '\u{1F3E0}' },
    { folder: 'unterkuenfte',  file: 'unterkuenfte/index.html', label: 'Unterk\u00FCnfte',  icon: '\u{1F3E8}' },
    { folder: 'fluege',        file: 'fluege/index.html',       label: 'Fl\u00FCge',        icon: '\u2708\uFE0F' },
    { folder: 'auto',          file: 'auto/index.html',         label: 'Auto & Transport',  icon: '\u{1F697}' },
    { folder: 'aktivitaeten',  file: 'aktivitaeten/index.html', label: 'Aktivit\u00E4ten',  icon: '\u{1F5FA}\uFE0F' },
    { folder: 'packliste',     file: 'packliste/index.html',    label: 'Packliste',         icon: '\u2705' },
    { folder: 'budget',        file: 'budget/index.html',       label: 'Budget',            icon: '\u{1F4B0}' }
  ];

  // Detect active page
  var href = window.location.href;
  var activeFolder = '';

  pages.forEach(function(p) {
    if (p.folder && href.indexOf('/' + p.folder + '/') !== -1) {
      activeFolder = p.folder;
    }
  });

  // Build nav links
  var links = pages.map(function(p) {
    var isActive = p.folder === activeFolder;
    var linkHref = prefix + p.file;
    return '<li' + (isActive ? ' class="active"' : '') +
      '><a href="' + linkHref + '" aria-label="' + p.label + '">' +
      p.icon + ' ' + p.label + '</a></li>';
  }).join('');

  nav.innerHTML =
    '<nav class="site-nav" role="navigation" aria-label="Hauptnavigation">' +
      '<div class="nav-brand"><a href="' + prefix + 'index.html">Sizilien 2026</a></div>' +
      '<button class="nav-toggle" id="nav-toggle-btn" aria-label="Men\u00FC \u00F6ffnen" aria-expanded="false">\u2630</button>' +
      '<ul class="nav-links" id="nav-links-list">' + links + '</ul>' +
    '</nav>';

  // ─── Mobile: Hamburger toggle + auto-close on link click ───
  var toggleBtn = document.getElementById('nav-toggle-btn');
  var siteNav = nav.querySelector('.site-nav');

  if (toggleBtn && siteNav) {
    toggleBtn.addEventListener('click', function() {
      var isOpen = siteNav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isOpen ? 'Men\u00FC schlie\u00DFen' : 'Men\u00FC \u00F6ffnen');
    });

    // Close menu when a link is clicked (mobile)
    var navLinks = document.getElementById('nav-links-list');
    if (navLinks) {
      navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
          siteNav.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // ─── Breadcrumbs ───
  if (depth > 0) {
    var activePage = pages.find(function(p) { return p.folder === activeFolder; });
    var crumbHtml = '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      '<a href="' + prefix + 'index.html">Start</a>' +
      '<span class="sep">/</span>';

    if (activePage) {
      if (pageTitle) {
        // Sub-page (e.g. hinzufuegen.html)
        crumbHtml += '<a href="' + prefix + activePage.file + '">' + activePage.label + '</a>' +
          '<span class="sep">/</span>' +
          '<span>' + esc(pageTitle) + '</span>';
      } else {
        crumbHtml += '<span>' + activePage.label + '</span>';
      }
    }
    crumbHtml += '</nav>';

    // Insert breadcrumb after nav, before container
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
