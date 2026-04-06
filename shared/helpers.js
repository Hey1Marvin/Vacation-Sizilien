// ─── Shared Helpers fuer alle Seiten ───

// HTML-Escape
function esc(s) {
  if (s == null) return '';
  var d = document.createElement('div');
  d.textContent = String(s);
  return d.innerHTML;
}

// Datum formatieren
function fmt(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('de-DE', {
    weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric'
  });
}

// Kurzes Datum (ohne Wochentag)
function fmtShort(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('de-DE', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
}

// ─── Toast mit Close-Button ───
function toast(msg, type) {
  var t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.id = 'toast';
    document.body.appendChild(t);
  }
  var closeIcon = (typeof Icons !== 'undefined') ? Icons.x({size: 16}) : '\u00D7';
  t.className = 'toast' + (type === 'error' ? ' error' : '');
  t.innerHTML = esc(msg) + '<button class="toast-close" onclick="this.parentElement.classList.remove(\'show\')" aria-label="Schlie\u00DFen">' + closeIcon + '</button>';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.classList.remove('show'); }, 4000);
}

// ─── Confirm Modal (ersetzt window.confirm) ───
function confirmModal(title, message, onConfirm, opts) {
  opts = opts || {};
  var overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  var confirmLabel = opts.confirmLabel || 'Bestaetigen';
  var cancelLabel = opts.cancelLabel || 'Abbrechen';
  var danger = opts.danger ? ' btn-danger' : ' btn-secondary';

  overlay.innerHTML =
    '<div class="modal">' +
      '<h3>' + esc(title) + '</h3>' +
      '<p>' + esc(message) + '</p>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-ghost modal-cancel">' + esc(cancelLabel) + '</button>' +
        '<button class="btn' + danger + ' modal-confirm">' + esc(confirmLabel) + '</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);

  // Animate in
  requestAnimationFrame(function() {
    overlay.classList.add('show');
  });

  function close() {
    overlay.classList.remove('show');
    setTimeout(function() { overlay.remove(); }, 200);
  }

  overlay.querySelector('.modal-cancel').addEventListener('click', close);
  overlay.querySelector('.modal-confirm').addEventListener('click', function() {
    close();
    if (onConfirm) onConfirm();
  });
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) close();
  });
}

// ─── Form Validation ───
function validateRequired(fieldId, errorMsg) {
  var el = document.getElementById(fieldId);
  if (!el) return true;
  var group = el.closest('.form-group');
  if (!group) return true;

  var val = el.value.trim();
  var valid = val !== '' && (el.type !== 'number' || !isNaN(parseFloat(val)));

  var oldErr = group.querySelector('.error-msg');
  if (oldErr) oldErr.remove();

  if (!valid) {
    group.classList.add('error');
    var errEl = document.createElement('span');
    errEl.className = 'error-msg';
    errEl.textContent = errorMsg || 'Dieses Feld ist erforderlich';
    errEl.style.display = 'block';
    group.appendChild(errEl);
    return false;
  } else {
    group.classList.remove('error');
    return true;
  }
}

function clearValidation() {
  document.querySelectorAll('.form-group.error').forEach(function(g) {
    g.classList.remove('error');
    var err = g.querySelector('.error-msg');
    if (err) err.remove();
  });
}

// ─── Status Badge HTML erzeugen ───
function statusBadge(status) {
  var labels = { gebucht: 'Gebucht', option: 'Option', offen: 'Offen' };
  var iconFns = { gebucht: 'check', option: 'clock', offen: 'helpCircle' };
  var label = labels[status] || status;
  var icon = '';
  if (typeof Icons !== 'undefined' && Icons[iconFns[status]]) {
    icon = Icons[iconFns[status]]({size: 12});
  }
  return '<span class="status status-' + status + '">' + icon + ' ' + esc(label) + '</span>';
}

// ─── Scroll-to-Top Button ───
(function() {
  var btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.setAttribute('aria-label', 'Nach oben scrollen');
  if (typeof Icons !== 'undefined') {
    btn.innerHTML = Icons.arrowUp({size: 20});
  } else {
    btn.innerHTML = '\u2191';
  }
  btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
})();

// ─── Footer dynamisch aus Config ───
function renderFooter() {
  var footer = document.querySelector('footer');
  if (!footer) return;
  if (typeof SizilienConfig === 'undefined') return;
  var c = SizilienConfig.load();
  footer.textContent = c.tripName + ' \u00B7 ' + c.personen + ' Personen \u00B7 ' + c.zielort;
}

// Footer nach DOM-Load rendern
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFooter);
} else {
  renderFooter();
}
