# Design-System & UX-Richtlinien — Sizilien 2026

## Entscheidung: Custom CSS (kein Framework)

**Warum kein Framework?**
- Seite läuft über `file://` Protokoll — CDN-Frameworks wie Tailwind JIT funktionieren unzuverlässig
- Bestehende 3KB CSS vs. 70-200KB Framework-Overhead
- Volle Kontrolle über das Farbschema und die Komponenten
- Kein Build-System nötig, sofort lauffähig

**Was stattdessen verbessert wird:**
- Fehlende Komponenten hinzufügen (Tooltips, Breadcrumbs, Validation, Scroll-to-Top)
- Micro-Interactions & Feedback überall ergänzen
- Accessibility (Fokus-States, Kontraste, ARIA-Labels) systematisch fixen
- Mobile-Responsiveness konsequent durchziehen

---

## Farb-System

| Token             | Wert        | Verwendung                         |
|--------------------|------------|-------------------------------------|
| `--primary`        | `#1a5276`  | Nav, Überschriften, primäre Buttons |
| `--primary-light`  | `#2980b9`  | Links, Hover, Akzente              |
| `--accent`         | `#e67e22`  | Warnungen, sekundäre Highlights    |
| `--green`          | `#27ae60`  | Erfolg, gebucht, Vorteile, Preise  |
| `--red`            | `#c0392b`  | Fehler, nicht stornierbar, Nachteile|
| `--bg`             | `#f8f9fa`  | Seitenhintergrund                  |
| `--card-bg`        | `#ffffff`  | Karten-Hintergrund                 |
| `--text`           | `#2c3e50`  | Haupttext                          |
| `--text-light`     | `#7f8c8d`  | Sekundärtext, Labels               |
| `--border`         | `#dee2e6`  | Trennlinien, inaktive Ränder       |

**Regel:** Kein Teal (#1abc9c) oder andere Farben außerhalb des Systems.

---

## Schatten-System (einheitlich)

| Stufe    | CSS                                | Verwendung           |
|----------|------------------------------------|-----------------------|
| `--shadow-sm`  | `0 1px 3px rgba(0,0,0,.08)`   | Subtil (Tags, Badges) |
| `--shadow-md`  | `0 2px 8px rgba(0,0,0,.08)`   | Standard (Cards)      |
| `--shadow-lg`  | `0 4px 16px rgba(0,0,0,.12)`  | Hervorgehoben (Nav, Map) |
| `--shadow-hover` | `0 8px 25px rgba(0,0,0,.15)` | Hover-Effekt          |

---

## Typografie

- **Font:** Inter (Google Fonts), Fallbacks: -apple-system, BlinkMacSystemFont, sans-serif
- **h1:** 2.2em, 700
- **h2:** 1.4em, 600, mit Border-Bottom
- **h3:** 1.1em, 600 (einheitlich auf allen Seiten!)
- **Body:** 1em, 400, line-height 1.6
- **Small/Meta:** 0.82-0.85em, 500

---

## UX-Regeln

### 1. Navigation & Orientierung
- **Sticky Nav** bleibt immer sichtbar (oben fixiert)
- **Aktive Seite** wird in der Nav klar hervorgehoben (hellerer Hintergrund + fette Schrift)
- **Breadcrumbs** auf jeder Unterseite: `Start > Unterkünfte > Hinzufügen`
- **Mobile Hamburger-Menü** schließt sich automatisch nach Klick auf einen Link
- **Scroll-to-Top Button** erscheint nach 400px Scrollen

### 2. Feedback & Interaktion
- **Jeder Klick gibt Feedback:** Hover-States, Active-States, Focus-States
- **Toast-Nachrichten** bleiben 4 Sekunden sichtbar (nicht nur 2.5)
- **Formulare:** Pflichtfelder haben roten Stern, Fehler werden inline angezeigt (rote Border + Fehlermeldung unter dem Feld)
- **Empty States** enthalten immer einen klaren Call-to-Action Button
- **Destructive Actions** (Reset, Löschen) benötigen Bestätigung

### 3. Tooltips
- Erscheinen bei Hover über `[?]`-Icons oder markierte Elemente
- Dunkler Hintergrund (#2c3e50), weiße Schrift, abgerundete Ecken
- Max-Breite 250px, automatische Positionierung
- Verwendung: Formular-Hilfen, Erklärungen zu Metriken, Abkürzungen

### 4. Formulare
- 2-Spalten-Grid auf Desktop, 1 Spalte auf Mobile
- Pflichtfelder: Label endet mit rotem `*`
- Focus-State: Blauer Border + subtiler Schatten
- Error-State: Roter Border + Fehlermeldung darunter
- Success: Grüner Haken nach erfolgreicher Eingabe
- Alle Formulare haben "Abbrechen / Leeren" und "Hinzufügen" Buttons

### 5. Tabellen (Mobile)
- Horizontales Scrollen mit visueller Anzeige (Fade am Rand)
- Sticky erste Spalte auf Mobile
- Alternating Row Colors beibehalten

### 6. Karten / Cards
- Einheitlicher Schatten: `var(--shadow-md)`
- Hover: `transform: translateY(-2px)` + `var(--shadow-hover)`
- Border-Radius: 12px (konsistent)
- Padding: 20px

### 7. Status-Anzeigen
- **Gebucht:** Grüner Badge mit Checkmark
- **Option:** Oranger Badge mit Uhr-Symbol
- **Offen:** Grauer Badge mit Fragezeichen
- Alle Badges: Gleiche Größe, gleicher Radius (20px), gleiche Schriftgröße

### 8. Accessibility
- **Focus-Visible:** 2px solid var(--primary), offset 2px — auf ALLEN interaktiven Elementen
- **Kontrast:** Mindestens 4.5:1 für Text, 3:1 für große Schrift
- **Nav-Links:** Opacity .95 statt .85
- **ARIA-Labels** auf allen interaktiven Elementen ohne sichtbaren Text
- **Keyboard-Navigation:** Tab-Reihenfolge logisch, alle Funktionen erreichbar

---

## Komponentenübersicht

| Komponente        | Datei              | Beschreibung                    |
|--------------------|--------------------|---------------------------------|
| Site-Navigation    | shared/nav.js      | Sticky, responsive, Breadcrumbs |
| Toast              | shared/helpers.js  | Erfolgs-/Fehlermeldungen        |
| Tooltip            | shared/styles.css  | Hover-Erklärungen               |
| Form Validation    | shared/styles.css  | Inline-Fehler, Required-Stars   |
| Scroll-to-Top      | shared/helpers.js  | Button nach 400px Scroll        |
| Empty State        | shared/styles.css  | Icon + Text + CTA-Button        |
| Status Badge       | shared/styles.css  | gebucht/option/offen            |
| Progress Bar       | shared/styles.css  | Linear + Prozent-Text           |
| Card               | shared/styles.css  | Einheitlich mit Shadow/Hover    |
| Data Table         | shared/styles.css  | Responsive mit Scroll-Container |
