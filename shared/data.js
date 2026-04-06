// ─── Data Store — localStorage-basierte Datenschicht ───
// Jede Section hat einen eigenen Key. Default-Daten kommen aus den .js-Dateien,
// werden beim ersten Laden in localStorage geschrieben und ab dann dort verwaltet.

(function() {
  var PREFIX = 'sizilien2026_';

  var DataStore = {
    // Daten laden: localStorage hat Vorrang, sonst defaults
    get: function(section, defaults) {
      try {
        var stored = localStorage.getItem(PREFIX + section);
        if (stored) return JSON.parse(stored);
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
    add: function(section, item, defaults) {
      var data = this.get(section, defaults) || [];
      // Auto-ID
      if (!item.id) {
        var maxId = 0;
        data.forEach(function(d) { if (d.id > maxId) maxId = d.id; });
        item.id = maxId + 1;
      }
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

    // Item entfernen (fuer Arrays mit id-Feld)
    remove: function(section, id, defaults) {
      var data = this.get(section, defaults) || [];
      data = data.filter(function(d) { return d.id !== id; });
      this.set(section, data);
      return data;
    },

    // Auf Defaults zuruecksetzen
    reset: function(section) {
      localStorage.removeItem(PREFIX + section);
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
