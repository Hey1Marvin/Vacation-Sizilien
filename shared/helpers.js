// ─── Shared Helpers für alle Seiten ───

function esc(s) {
  var d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function fmt(d) {
  return new Date(d).toLocaleDateString('de-DE', {
    weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric'
  });
}

// ─── Toast mit Close-Button und längerem Timeout ───
function toast(msg, type) {
  var t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.className = 'toast' + (type === 'error' ? ' error' : '');
  t.innerHTML = esc(msg) + '<button class="toast-close" onclick="this.parentElement.classList.remove(\'show\')" aria-label="Schlie\u00DFen">\u00D7</button>';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.classList.remove('show'); }, 4000);
}

// ─── Form Validation ───
function validateRequired(fieldId, errorMsg) {
  var el = document.getElementById(fieldId);
  if (!el) return true;
  var group = el.closest('.form-group');
  if (!group) return true;

  var val = el.value.trim();
  var valid = val !== '' && (el.type !== 'number' || !isNaN(parseFloat(val)));

  // Remove old error msg
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

// ─── Scroll-to-Top Button ───
(function() {
  var btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.innerHTML = '\u2191';
  btn.setAttribute('aria-label', 'Nach oben scrollen');
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
