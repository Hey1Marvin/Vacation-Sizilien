// ─── Data Store — localStorage-basierte Datenschicht ───
// Jede Section hat einen eigenen Key. Default-Daten kommen aus den .js-Dateien,
// werden beim ersten Laden in localStorage geschrieben und ab dann dort verwaltet.

(function() {
  var PREFIX = 'sizilien2026_';

  var DataStore = {
    // IDs die vom User gelöscht wurden
    _deletedKey: function(section) { return PREFIX + section + '_deleted'; },
    _getDeleted: function(section) {
      try {
        var d = localStorage.getItem(this._deletedKey(section));
        return d ? JSON.parse(d) : [];
      } catch(e) { return []; }
    },
    _addDeleted: function(section, id) {
      var deleted = this._getDeleted(section);
      if (deleted.indexOf(id) === -1) deleted.push(id);
      localStorage.setItem(this._deletedKey(section), JSON.stringify(deleted));
    },

    // Daten laden: defaults (Source of Truth) + userAdded aus localStorage mergen
    // Defaults kommen IMMER frisch aus der .js-Datei — localStorage-Kopien von
    // Default-Items werden ignoriert, damit Änderungen an der Quelle (z.B.
    // Hotel aus hotels.js entfernt + Push) bei allen Nutzern sofort greifen.
    get: function(section, defaults) {
      try {
        var stored = localStorage.getItem(PREFIX + section);
        if (stored) {
          if (defaults !== undefined && Array.isArray(defaults)) {
            var storedData = JSON.parse(stored);
            var deleted = this._getDeleted(section);
            // Defaults übernehmen, aber gelöschte rausfiltern
            var merged = JSON.parse(JSON.stringify(defaults)).filter(function(d) {
              return !d.id || deleted.indexOf(d.id) === -1;
            });
            // Nur explizit userAdded Items aus localStorage übernehmen
            storedData.forEach(function(s) {
              if (s.userAdded && s.id && deleted.indexOf(s.id) === -1) merged.push(s);
            });
            this.set(section, merged);
            return merged;
          }
          return JSON.parse(stored);
        }
      } catch(e) {}
      // Beim ersten Aufruf: Defaults in localStorage schreiben
      if (defaults !== undefined) {
        this.set(section, defaults);
        return JSON.parse(JSON.stringify(defaults));
      }
      return null;
    },

    // Daten speichern
    set: function(section, data) {
      localStorage.setItem(PREFIX + section, JSON.stringify(data));
    },

    // Einzelnes Item hinzufuegen (fuer Arrays)
    // Markiert Items als userAdded damit sie in localStorage persistieren
    // und nicht mit Default-Daten verwechselt werden.
    add: function(section, item, defaults) {
      var data = this.get(section, defaults) || [];
      // Auto-ID
      if (!item.id) {
        var maxId = 0;
        data.forEach(function(d) { if (d.id > maxId) maxId = d.id; });
        item.id = maxId + 1;
      }
      item.userAdded = true;
      data.push(item);
      this.set(section, data);
      return data;
    },

    // Item aktualisieren (fuer Arrays mit id-Feld)
    update: function(section, id, updates, defaults) {
      var data = this.get(section, defaults) || [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          for (var k in updates) {
            if (updates.hasOwnProperty(k)) {
              data[i][k] = updates[k];
            }
          }
          break;
        }
      }
      this.set(section, data);
      return data;
    },

    // Item entfernen (fuer Arrays mit id-Feld) — merkt sich gelöschte Default-IDs
    remove: function(section, id, defaults) {
      this._addDeleted(section, id);
      var data = this.get(section, defaults) || [];
      data = data.filter(function(d) { return d.id !== id; });
      this.set(section, data);
      return data;
    },

    // Auf Defaults zuruecksetzen (inkl. gelöschte IDs)
    reset: function(section) {
      localStorage.removeItem(PREFIX + section);
      localStorage.removeItem(this._deletedKey(section));
    },

    // Alle Daten exportieren als JSON-String
    exportJSON: function(section, defaults) {
      var data = this.get(section, defaults);
      return JSON.stringify(data, null, 2);
    },

    // JSON importieren
    importJSON: function(section, jsonString) {
      try {
        var data = JSON.parse(jsonString);
        this.set(section, data);
        return data;
      } catch(e) {
        return null;
      }
    }
  };

  window.DataStore = DataStore;
})();
