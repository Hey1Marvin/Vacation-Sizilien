// ─── Zentrale Konfiguration — Sizilien 2026 ───
// Alle Seiten importieren diese Datei. Aenderungen hier propagieren ueberall.
// Persistierung via localStorage — Settings-Seite schreibt hierhin.

(function() {
  var CONFIG_KEY = 'sizilien2026_config';

  var DEFAULTS = {
    tripName: 'Sizilien 2026',
    personen: 5,
    personenNamen: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
    personenDaten: [
      { name: 'Person 1', fuehrerschein: false, faehrtImAusland: false, notizen: '' },
      { name: 'Person 2', fuehrerschein: false, faehrtImAusland: false, notizen: '' },
      { name: 'Person 3', fuehrerschein: false, faehrtImAusland: false, notizen: '' },
      { name: 'Person 4', fuehrerschein: false, faehrtImAusland: false, notizen: '' },
      { name: 'Person 5', fuehrerschein: false, faehrtImAusland: false, notizen: '' }
    ],
    reisezeitraum: { von: '2026-06-01', bis: '2026-06-14' },
    zielort: 'Palermo, Sizilien',
    zielflughafen: 'Palermo Falcone-Borsellino (PMO)',
    waehrung: 'EUR',
    mapCenter: { lat: 38.145, lng: 13.30 },
    mapZoom: 12
  };

  function load() {
    try {
      var saved = localStorage.getItem(CONFIG_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        // Merge with defaults so new keys are always present
        var merged = {};
        for (var k in DEFAULTS) {
          if (DEFAULTS.hasOwnProperty(k)) {
            merged[k] = parsed.hasOwnProperty(k) ? parsed[k] : DEFAULTS[k];
          }
        }
        // Migration: Wenn personenDaten fehlt aber personenNamen existiert
        if (!parsed.personenDaten && parsed.personenNamen) {
          merged.personenDaten = parsed.personenNamen.map(function(name) {
            return { name: name, fuehrerschein: false, faehrtImAusland: false, notizen: '' };
          });
        }
        // personenNamen immer aus personenDaten ableiten
        if (merged.personenDaten) {
          merged.personenNamen = merged.personenDaten.map(function(p) { return p.name; });
          merged.personen = merged.personenDaten.length;
        }
        return merged;
      }
    } catch(e) {}
    return JSON.parse(JSON.stringify(DEFAULTS));
  }

  function save(config) {
    // personenNamen aus personenDaten synchronisieren
    if (config.personenDaten) {
      config.personenNamen = config.personenDaten.map(function(p) { return p.name; });
      config.personen = config.personenDaten.length;
    }
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }

  function reset() {
    localStorage.removeItem(CONFIG_KEY);
  }

  function getTripDays() {
    var c = load();
    var von = new Date(c.reisezeitraum.von);
    var bis = new Date(c.reisezeitraum.bis);
    return Math.max(1, Math.round((bis - von) / 86400000));
  }

  function formatDateRange() {
    var c = load();
    var opts = { day: '2-digit', month: '2-digit', year: 'numeric' };
    var von = new Date(c.reisezeitraum.von).toLocaleDateString('de-DE', opts);
    var bis = new Date(c.reisezeitraum.bis).toLocaleDateString('de-DE', opts);
    return von + ' \u2013 ' + bis;
  }

  window.SizilienConfig = {
    DEFAULTS: DEFAULTS,
    load: load,
    save: save,
    reset: reset,
    getTripDays: getTripDays,
    formatDateRange: formatDateRange,
    KEY: CONFIG_KEY
  };
})();
