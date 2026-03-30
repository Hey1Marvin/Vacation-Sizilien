# Sizilien 2026 — Reiseplanung Website

## Projektziel

Diese Website dient der **gemeinsamen Urlaubsplanung** für eine Gruppenreise nach Sizilien (Juni 2026, 5 Personen, Raum Palermo). Die Seite muss:

- **So einfach wie möglich** zu bedienen sein — keine technischen Vorkenntnisse nötig
- **Übersichtlich** alle Planungsbereiche abdecken: Unterkünfte, Flüge, Auto, Aktivitäten, Packliste, Budget
- **Mobil-freundlich** sein — die Gruppe nutzt die Seite auch unterwegs auf dem Handy
- **Sofort verständlich** — kein Onboarding, keine Erklärungen nötig, intuitive UI

## Technologie

- **Reines HTML + CSS + Vanilla JS** — kein Framework, kein Build-System
- **GitHub Pages** als Hosting (statische Seiten)
- Gemeinsame Styles/Navigation in `shared/` (styles.css, nav.js, helpers.js)

## Regeln für Agents

### 1. Design: DESIGN.md ist Pflicht

Jeder Agent **muss** sich an die `DESIGN.md` halten:

- Nur die dort definierten CSS-Variablen und Farben verwenden
- Komponenten (Cards, Tables, Forms, Toasts, Tooltips, Status-Badges) wie dort beschrieben einsetzen
- Einheitliche Schatten, Border-Radius, Typografie beibehalten
- Accessibility-Regeln (Focus-States, ARIA-Labels, Kontraste) einhalten
- Gemeinsame Styles aus `shared/styles.css` verwenden — keine Duplikate in Seiten-spezifischem CSS
- Bei neuen Komponenten die `DESIGN.md` entsprechend aktualisieren

### 2. Commit & Push: Immer!

Nach jeder abgeschlossenen Implementierung **muss** der Agent:

1. Alle geänderten/neuen Dateien mit `git add` stagen
2. Einen aussagekräftigen Commit erstellen (deutsch oder englisch)
3. Mit `git push` auf `origin main` pushen
4. **Prüfen**, dass der GitHub Actions Workflow (`Deploy to GitHub Pages`) erfolgreich durchläuft

Die Live-Seite unter `https://hey1marvin.github.io/Vacation-Sizilien/` muss nach jeder Änderung aktuell sein.

### 3. GitHub Pages beachten

- Die Seite wird über **GitHub Pages** ausgeliefert (Branch `main`, Root `/`)
- Nur statische Dateien (HTML, CSS, JS, Bilder) — kein Server, kein Backend
- Alle Pfade müssen **relativ** sein (kein `/absoluter/pfad`)
- Navigation nutzt `data-depth` Attribut für korrekte relative Pfade (siehe `shared/nav.js`)
- Externe Libraries nur per CDN (z.B. Leaflet) — keine node_modules

### 4. Projektstruktur

```
/                       ← Root (index.html = Startseite mit Navigation)
├── shared/             ← Gemeinsame CSS, JS, Helpers
│   ├── styles.css
│   ├── nav.js
│   └── helpers.js
├── unterkuenfte/       ← Unterkunfts-Vergleich (fertig)
├── fluege/             ← Flüge (zu implementieren)
├── auto/               ← Mietwagen & Transport (zu implementieren)
├── aktivitaeten/       ← Aktivitäten & Sehenswürdigkeiten (zu implementieren)
├── packliste/          ← Packliste (zu implementieren)
├── budget/             ← Budget-Übersicht (zu implementieren)
├── DESIGN.md           ← Design-Richtlinien (PFLICHTLEKTÜRE)
└── CLAUDE.md           ← Diese Datei
```

### 5. Neue Seiten erstellen

Jede neue Seite muss:

- Eine `index.html` im jeweiligen Unterordner haben
- Die shared Navigation einbinden: `<div id="site-nav" data-depth="1"></div>`
- Die shared Scripts laden: `shared/helpers.js`, `shared/nav.js`
- Den shared Stylesheet verwenden: `shared/styles.css`
- Responsive sein (Mobile-First)
- Einen sinnvollen `<title>` haben
- Dem Look & Feel der bestehenden Seiten entsprechen

### 6. UX-Prinzipien

- **Weniger ist mehr** — lieber wenige klare Optionen als überladene Seiten
- **Sofort nutzbar** — Standardwerte setzen, offensichtliche Defaults
- **Feedback geben** — Toast bei Aktionen, Hover-States, Loading-States
- **Fehler vermeiden** — Validierung vor Submit, Bestätigung bei destruktiven Aktionen
- **Für die Gruppe** — denke daran: 5 Freunde planen zusammen einen Urlaub, kein Enterprise-Tool
