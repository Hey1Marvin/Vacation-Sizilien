# Design-System & UX-Richtlinien — Sizilien 2026

> **North Star:** Dieses Tool soll sich anfuehlen wie eine professionelle Web-App (Linear, Notion, Stripe) —
> clean, schnell, informationsdicht ohne Clutter. Man oeffnet es und hat sofort Bock, damit zu planen.

---

## 1. Design-Philosophie

### Drei Kernprinzipien

1. Usability ist alles !!

2. **Informationshierarchie** — Die wichtigsten Daten springen sofort ins Auge. Details sind einen Klick entfernt. Groesse, Gewicht und Farbe steuern, wohin der Blick wandert — nicht bunte Hintergruende oder blinkende Elemente.

3. **Professionelle Zurueckhaltung** — Wenige, bewusst gesetzte Farben. Kein visuelles Rauschen. Die Seite wirkt wie ein Premium-Produkt, nicht wie eine generierte HTML-Seite.

### Inspiration

- **Linear** — Informationsdichte, klare Hierarchie, reduzierte Farbpalette
- **Notion** — Content-Organisation, progressive Disclosure, Clean Typography
- **Stripe** — Dokumentations-Klarheit, professionelle Farbgebung
- **Vercel** — Elegante Einfachheit, moderne Aesthetik

### Anti-Inspiration

- Generische Bootstrap/Tailwind-Templates mit Standard-Blau
- Emoji-ueberladene Dashboards
- Seiten mit 6+ konkurrierenden Akzentfarben
- "Offensichtlich KI-generierte" symmetrische Layouts ohne Charakter

---

## 2. Farbsystem — "Sophisticated Mediterranean"

Die Palette ist subtil von Sizilien inspiriert: Kalkstein, Terracotta, das Tyrrhenische Meer, Vulkanlandschaft. Diese Referenzen sind subliminal, nicht woertlich — es soll nach Premium-Produkt aussehen, nicht nach Reiseprospekt.

### 2.1 Primary (Warm Slate-Blue)

| Token | Hex | Verwendung |
|---|---|---|
| `--primary` | `#2B4A5C` | Nav, Ueberschriften, strukturelle Elemente, Secondary Buttons |
| `--primary-light` | `#3D7A9E` | Links, Hover-States, interaktive Akzente, Info-Farbe |
| `--primary-dark` | `#1D3340` | Nav-Gradient dunkles Ende, hoher Kontrast |

### 2.2 Accent (Terracotta)

| Token | Hex | Verwendung |
|---|---|---|
| `--accent` | `#C4653A` | Primaere CTAs, Preis-Highlights, wichtigste Metrik pro Section |
| `--accent-light` | `#D4845F` | Hover-States auf Accent, helle Badge-Hintergruende |
| `--accent-subtle` | `#FBF0EB` | Kaum sichtbarer Hauch fuer ausgewaehlte/aktive States |

### 2.3 Semantische Farben

| Zweck | Farbe | Hintergrund | Verwendung |
|---|---|---|---|
| Erfolg | `--success: #2D8659` | `--success-light: #E7F4ED` | Gebucht, bestaetigt, Vorteile, guenstige Preise |
| Warnung | `--warning: #B8860B` | `--warning-light: #FDF6E3` | Optionen, Teilstornierung, Aufmerksamkeit |
| Fehler | `--error: #B03A2E` | `--error-light: #FBEAE8` | Validation-Errors, nicht stornierbar, Nachteile |
| Info | `--info: #3D7A9E` | `--info-light: #EBF3F8` | Hinweise, Callout-Boxen, Tipps |

### 2.4 Neutrale Grau-Skala

Leicht warmer Unterton (nicht rein grau, nicht gelb-warm). Hier lebt der Grossteil des visuellen Gewichts.

| Token | Hex | Verwendung |
|---|---|---|
| `--gray-950` | `#1A1D20` | Selten: Maximum-Kontrast Headlines |
| `--gray-900` | `#252A2E` | Primaerer Body-Text (WCAG AAA auf Weiss) |
| `--gray-700` | `#4A5259` | Sekundaere Headings, betonte Labels |
| `--gray-500` | `#6B7680` | Metadaten, Timestamps, Beschreibungen |
| `--gray-400` | `#94A0AA` | Placeholder-Text, deaktivierte Labels |
| `--gray-300` | `#B8C1C8` | Subtile Icons, Trennlinien in dichten Bereichen |
| `--gray-200` | `#D5DBE0` | Borders, Horizontal Rules, Input-Raender |
| `--gray-100` | `#E9ECEF` | Tabellen-Alternierung, subtile Divider, inaktive Pills |
| `--gray-50` | `#F3F5F7` | Seiten-Hintergrund, eingelassene Bereiche |
| `--white` | `#FFFFFF` | Karten, Input-Hintergruende |

### 2.5 Surfaces

| Token | Wert | Verwendung |
|---|---|---|
| `--surface-page` | `var(--gray-50)` | Gesamter Seiten-Hintergrund |
| `--surface-card` | `var(--white)` | Karten, Panels, Formular-Container |
| `--surface-elevated` | `var(--white)` | Modals, Popovers — differenziert durch Schatten |
| `--surface-inset` | `var(--gray-100)` | Eingelassene Panels, Tabellen-Header-Hintergrund |
| `--surface-overlay` | `rgba(26, 29, 32, 0.5)` | Modal-Backdrop |

### 2.6 Farbphilosophie — Wie die Farben zusammenspielen

**90% des Screens sind Neutraltoene:** `--gray-50` Hintergrund, weisse Karten, `--gray-900` Text, `--gray-200` Borders. Das ist die Leinwand.

**Primary (Blau) ist die Strukturfarbe:** Navigation, Headings, Links, Tabellen-Header, aktive Filter. Es sagt: "Das gehoert zum System."

**Accent (Terracotta) ist die Aufmerksamkeitsfarbe:** Ein CTA pro Section, der wichtigste Datenpunkt pro Karte, Empfehlungs-Badges. Es sagt: "Das ist jetzt am wichtigsten." Sparsam einsetzen — wenn alles Terracotta ist, faellt nichts mehr auf.

**Semantische Farben nur in ihrem Kontext:** Gruen = gebucht/gut, Gelb = Vorsicht, Rot = Fehler/schlecht. Nie dekorativ einsetzen.

### 2.7 Konkretes Farb-Mapping

| Element | Farbe |
|---|---|
| Nav-Gradient | `linear-gradient(135deg, #1D3340 0%, #2B4A5C 100%)` |
| Hero-Gradient | `linear-gradient(135deg, #2B4A5C 0%, #3D7A9E 100%)` |
| h2 Text | `--primary` |
| h2 Border-Bottom | `2px solid var(--gray-200)` (subtiler als farbige Linie) |
| Links | `--primary-light`, Hover: `--primary` + Underline |
| CTA-Button (Hauptaktion) | `--accent` Background, Weiss Text |
| Sekundaer-Button | `--primary` Background, Weiss Text |
| Card Hover Border | `rgba(61, 122, 158, 0.3)` |
| Stat-Werte normal | `--primary` |
| Stat-Werte hervorgehoben | `--accent` (z.B. guenstigster Preis) |
| Tabellen-Header | `--primary` Background, Weiss Text |
| Filter-Pill aktiv | `--primary` Background, Weiss Text |
| Empfehlungs-Karte | `border-top: 3px solid var(--accent)` |

---

## 3. Typografie

### Font: Inter

Inter bleibt — es wurde fuer Screen-UI designed, hat hervorragende Lesbarkeit bei kleinen Groessen und passt perfekt zum "Professional Tool"-Feeling.

Google Fonts Import:
```
Inter:wght@300;400;500;600;700
```

### Type Scale

| Element | Groesse | Gewicht | Letter-Spacing | Line-Height | Farbe |
|---|---|---|---|---|---|
| Display (Hero h1) | `2.5rem` (40px) | 700 | `-0.025em` | 1.15 | `#FFFFFF` |
| h1 (Seitentitel) | `2rem` (32px) | 700 | `-0.02em` | 1.2 | `--primary` oder `#FFF` auf Header |
| h2 (Section) | `1.3rem` (20.8px) | 600 | `-0.01em` | 1.3 | `--primary` |
| h3 (Karten-Titel) | `1.05rem` (16.8px) | 600 | `0` | 1.35 | `--gray-900` |
| Body | `0.9375rem` (15px) | 400 | `0` | 1.65 | `--gray-900` |
| Body Small | `0.8125rem` (13px) | 400 | `0.005em` | 1.55 | `--gray-700` |
| Caption/Meta | `0.75rem` (12px) | 500 | `0.01em` | 1.5 | `--gray-500` |
| Badge/Tag | `0.6875rem` (11px) | 600 | `0.02em` | 1 | je nach Semantik |
| Button | `0.8125rem` (13px) | 600 | `0.01em` | 1 | Weiss oder `--gray-900` |
| Nav-Link | `0.8125rem` (13px) | 500 | `0.005em` | 1 | `rgba(255,255,255,0.92)` |
| Input-Text | `0.875rem` (14px) | 400 | `0` | 1.5 | `--gray-900` |
| Label | `0.8125rem` (13px) | 500 | `0.01em` | 1 | `--gray-500` |

**Warum 15px Body statt 16px?** Datenreiche Planning-Tools profitieren von etwas kompakterer Schrift. Linear und Notion nutzen das gleiche Prinzip.

---

## 4. Spacing-System

4px Base-Unit. Alles ist ein Vielfaches davon.

| Token | Wert | Typische Verwendung |
|---|---|---|
| `--space-1` | `4px` | Minimaler Abstand, Icon-Text-Gap |
| `--space-2` | `8px` | Inline-Elemente, Badge-Padding vertikal |
| `--space-3` | `12px` | Kleine Gaps, Tag-Padding horizontal |
| `--space-4` | `16px` | Standard-Gap in Grids |
| `--space-5` | `20px` | Card-Padding, Grid-Gaps |
| `--space-6` | `24px` | Card horizontal Padding, groessere Gaps |
| `--space-8` | `32px` | Section-Margin |
| `--space-10` | `40px` | Grosse Abstaende |
| `--space-12` | `48px` | Hero-Padding |
| `--space-16` | `64px` | Maximum-Abstand |

---

## 5. Schatten-System

Dual-Layer-Schatten fuer natuerlichere Tiefe. Ein enger Schatten fuer Definition, ein weicher fuer Tiefenwirkung.

| Token | CSS | Verwendung |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Badges, Tags, kleine Elemente |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)` | Inputs, kleine Karten |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Standard-Karten |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.05)` | Nav, ueberlappende Karten (Countdown) |
| `--shadow-hover` | `0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)` | Karten-Hover |

**Regel:** Keine ad-hoc `box-shadow`-Werte in seitenspezifischem CSS. Immer Tokens verwenden.

---

## 6. Border-Radius

| Token | Wert | Verwendung |
|---|---|---|
| `--radius-sm` | `6px` | Buttons, Inputs, kleine Elemente |
| `--radius-md` | `10px` | Karten, Container, Formular-Wrapper |
| `--radius-lg` | `20px` | Pills, Badges, Status-Indikatoren |
| `--radius-full` | `9999px` | Kreise, Avatare |

**Nicht 12px fuer Karten** — 10px wirkt praeziser und weniger "toy-like".

---

## 7. Iconography

### Regel: Null Emojis

**Im gesamten Codebase werden keine Emojis verwendet.** Keine Unicode-Emojis, keine HTML-Entities fuer Emojis, keine Emoji-Shortcodes. Emojis wirken unprofessionell und rendern inkonsistent ueber Betriebssysteme hinweg. Nutze lieber professionelle icons/symbole 

### Loesung: Lucide Icons als Inline-SVGs

**Warum Lucide?**
- Funktioniert mit `file://` Protokoll (kein CDN noetig)
- Konsistentes 24x24 Grid mit 1.5px Strokes
- MIT-Lizenz
- Professionelle, cleane Aesthetik
- Ueber 1400 Icons verfuegbar

**Implementation:** `shared/icons.js` exportiert SVG-Strings als Funktionen.

### Icon-Groessen

| Kontext | Groesse | Beispiel |
|---|---|---|
| Inline (neben Text) | `16px` | Status-Icons in Badges |
| Navigation | `20px` | Nav-Links, Breadcrumbs |
| Karten | `24px` | Card-Header-Icons, Feature-Icons |
| Empty States | `32px` | Leere-Seite-Illustration |
| Hero/Header | `48px` | Hauptseiten-Icons |

### Icon-Mapping (aktuelle Emojis -> Lucide)

**Navigation:**
| Aktuell | Lucide Icon | Name |
|---|---|---|
| `\u{1F3E0}` (Haus) | `Home` | Start |
| `\u{1F3E8}` (Hotel) | `Building2` | Unterkuenfte |
| `\u2708` (Flugzeug) | `Plane` | Fluege |
| `\u{1F697}` (Auto) | `Car` | Auto & Transport |
| `\u{1F5FA}` (Weltkarte) | `MapPin` | Aktivitaeten |
| `\u2705` (Haken) | `ListChecks` | Packliste |
| `\u{1F4B0}` (Geldsack) | `Wallet` | Budget |

**Status:**
| Kontext | Lucide Icon |
|---|---|
| Gebucht/Bestaetigt | `Check` |
| Option/Ausstehend | `Clock` |
| Offen/Unbekannt | `HelpCircle` |
| Warnung | `AlertTriangle` |

**UI-Chrome:**
| Kontext | Lucide Icon |
|---|---|
| Ausklappen | `ChevronDown` |
| Einklappen/Weiter | `ChevronRight` |
| Schliessen | `X` |
| Hinzufuegen | `Plus` |
| Suchen | `Search` |
| Einstellungen | `Settings` |
| Externer Link | `ExternalLink` |
| Nach oben scrollen | `ArrowUp` |
| Bearbeiten | `Pencil` |
| Loeschen | `Trash2` |
| Info/Hilfe | `HelpCircle` |

**Domain-spezifisch:**
| Kontext | Lucide Icon |
|---|---|
| Personen | `Users` |
| Kalender/Datum | `Calendar` |
| Preis/Geld | `Euro` |
| Bewertung/Stern | `Star` |
| Bett/Schlafplaetze | `Bed` |
| Bad/Badezimmer | `Bath` |
| Groesse/Flaeche | `Ruler` |
| Parken | `ParkingCircle` |
| WLAN | `Wifi` |
| Strand | `Waves` |
| Restaurant | `UtensilsCrossed` |
| Sehenswuerdigkeit | `Landmark` |
| Ausflug | `Compass` |

---

## 8. UI-Prinzipien

### 8.1 Informationsdichte ohne Clutter

Whitespace **gruppiert verwandte Elemente**, es trennt nicht wahllos. Innerhalb einer Karte: enge Abstaende. Zwischen Sections: grosszuegige Abstaende. Das Auge soll natuerlich scannen koennen.

### 8.2 Visuelle Gewichtshierarchie

Drei Ebenen auf jeder Karte/Section:

1. **Primaer** — Grosse, fette Typografie. Sofort sichtbar. (Preis, Name, Status)
2. **Sekundaer** — Normale Groesse, etwas gedaempft. Beim Scannen lesbar. (Adresse, Datum, Details)
3. **Tertiaer** — Klein, `--gray-500`, oder hinter Expand versteckt. (Buchungsnummer, Timestamps, Notizen)

### 8.3 Surface-Layering

Maximal 3 Ebenen: Page-Background, Card, Elevated (Modal/Popover). Keine tiefere Verschachtelung von Karten in Karten in Karten.

### 8.4 Farb-Einsatz

- Gradienten nur fuer Nav-Bar und Hero-Section
- Farbige Hintergruende nur in Badges/Tags (und dort die `-light` Varianten)
- Text-Farbe traegt semantische Bedeutung (gruener Preis = guenstig), nicht Hintergrund-Farbe
- Eine Karte pro Vergleich darf als "Empfehlung" mit `border-top: 3px solid var(--accent)` hervorgehoben werden

### 8.5 Transitions & Animationen

| Kontext | Dauer | Easing |
|---|---|---|
| Hover-States (Farbe, Border) | `150ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Transform (translateY) | `150ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Expand/Collapse | `200ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Layout-Aenderungen | `300ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |

**Verboten:** `ease` (sieht schwammig aus), `linear` (sieht mechanisch aus), Bounce, Parallax, animierte Gradienten, Skeleton Screens.

---

## 9. UX-Prinzipien

### 9.1 Progressive Disclosure

Jede Section hat drei Informationsebenen:

| Ebene | Was sichtbar ist | Beispiel |
|---|---|---|
| **Blick** | Eine Key-Metrik pro Karte | Preis "ab 458 EUR", Status-Badge "Gebucht" |
| **Scan** | Zusammenfassung auf der Karte | Adresse, Zeitraum, Personen, Wichtigste Features |
| **Deep Dive** | Volle Details hinter Expand | Pro/Contra-Liste, Gaeste-Bewertungen, Fotos, Entfernungen |

**Regeln:**
- Sections mit mehr als 5 Items: standardmaessig eingeklappt, Count-Badge im Header
- `<details>`/`<summary>` fuer native Collapse-Funktionalitaet
- Chevron-Icon rotiert beim Auf-/Zuklappen (90deg -> 0deg)
- Jeder Collapse-Header zeigt eine Mini-Zusammenfassung (z.B. "8 Aktivitaeten, 3 Must-Dos")

### 9.2 Konfigurierbarkeit

**Nichts soll hardcoded sein, was sich aendern koennte.**

Zentrale Konfiguration in `shared/config.js`:

```javascript
// Defaults — ueberschreibbar via Settings-UI
const CONFIG = {
  personen: 5,
  personenNamen: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
  reisezeitraum: { von: '2026-06-01', bis: '2026-06-14' },
  zielort: 'Palermo, Sizilien',
  waehrung: 'EUR',
  // ... weitere konfigurierbare Werte
};
```

- Alle Seiten importieren Config und verwenden diese Werte dynamisch
- Aenderungen ueber eine **Settings-Seite** (erreichbar via Zahnrad-Icon in der Nav)
- Persistierung in `localStorage` unter Key `sizilien2026_config`
- Wenn localStorage leer: Defaults aus `config.js` verwenden
- "5 Personen" darf **nirgendwo** im HTML hardcoded sein

### 9.3 Selbsterklaerende UI

**Tooltip-Strategie:**
- `HelpCircle`-Icon (16px, `--gray-400`) neben jedem nicht-offensichtlichen Label
- Hover zeigt Erklaerung in dunklem Tooltip (200ms Delay, max 300px Breite)
- Beispiele: "EUR/Person/Nacht", "Stornierungsfrist", "Inkl. Endreinigung"

**Empty States:**
- Jeder leere Bereich zeigt: SVG-Icon (32px, 0.4 Opacity) + Ueberschrift + erklaerende Beschreibung + CTA-Button
- Beispiel: MapPin-Icon + "Noch keine Aktivitaeten" + "Fuege Sehenswuerdigkeiten, Straende und Restaurants hinzu" + Button "Aktivitaet hinzufuegen"

**Placeholder-Texte:**
- Realistisch und hilfreich, nicht "Lorem ipsum"
- Input fuer Unterkunft-Name: "z.B. Casa Mediterrana, Palermo"
- Input fuer Preis: "z.B. 650"

**Labels & Beschriftungen:**
- Jedes interaktive Element hat einen sichtbaren oder ARIA-Label
- Keine Abkuerzungen ohne Erklaerung (erste Verwendung: ausgeschrieben mit Abkuerzung in Klammern)
- Einheiten immer sichtbar: "EUR", "Naechte", "/Person"

### 9.4 Feedback & Interaktion

**Toast-Nachrichten:**
- Position: fixed, unten rechts (20px Abstand)
- Erfolg: `--success` Hintergrund
- Fehler: `--error` Hintergrund
- Dauer: 4 Sekunden, manuell schliessbar (X-Button)
- Slide-Up-Animation beim Erscheinen

**Formulare:**
- Pflichtfelder: Roter Stern nach Label
- Fehler: Roter Border + Fehlermeldung unter dem Feld (nicht Alert-Box)
- Erfolg nach Absenden: Toast + Formular zuruecksetzen
- Destructive Actions (Loeschen, Zuruecksetzen): Bestaetigung via styled Modal, **nicht** `confirm()`

**Hover-States:**
- Jedes klickbare Element reagiert sichtbar auf Hover
- Cards: `translateY(-2px)` + Shadow-Erhoehung + Border-Shift
- Buttons: `translateY(-1px)` + Background-Abdunklung + Shadow
- Links: Farb-Shift + Underline erscheint
- Tabellen-Zeilen: Subtile Background-Aenderung
- Nav-Links: `rgba(255,255,255,0.1)` Hintergrund-Tint

**Focus-States (Tastatur):**
- `:focus-visible` auf allen interaktiven Elementen
- `outline: 2px solid var(--primary-light); outline-offset: 2px;`

---

## 10. Komponenten-Spezifikationen

### 10.1 Cards

```css
.card {
  background: var(--surface-card);
  border: 1px solid var(--gray-100);
  border-radius: var(--radius-md);        /* 10px */
  box-shadow: var(--shadow-md);
  padding: 20px 24px;
  transition: box-shadow 150ms var(--ease),
              transform 150ms var(--ease),
              border-color 150ms var(--ease);
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--gray-200);
}
```

**Warum 1px Border?** Shadow-only Cards sehen auf guenstigen Displays "schwebend" aus. Der kaum sichtbare Border gibt Definition ohne visuelles Gewicht.

**Empfehlungs-Karte:** `border-top: 3px solid var(--accent)` — nur eine pro Vergleich.

### 10.2 Buttons

**Primary (CTA — Terracotta):**
```css
.btn-primary {
  background: var(--accent);
  color: #FFFFFF;
  border: none;
  border-radius: var(--radius-sm);       /* 6px */
  padding: 9px 20px;
  font-size: 0.8125rem;
  font-weight: 600;
  box-shadow: var(--shadow-xs);
}
/* Hover: background #B35A33, translateY(-1px), shadow-sm */
/* Active: translateY(0), shadow none */
```

**Secondary (Strukturell — Primary-Blue):**
```css
.btn-secondary {
  background: var(--primary);
  color: #FFFFFF;
}
```
Fuer Aktionen wie "Filter anwenden", "Speichern", "Hinzufuegen".

**Ghost/Tertiary:**
```css
.btn-ghost {
  background: transparent;
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
}
/* Hover: background gray-50, border gray-300 */
```

**Danger:**
```css
.btn-danger {
  background: var(--error);
  color: #FFFFFF;
}
```

**Groessen:**
- Standard: `padding: 9px 20px`, `font-size: 0.8125rem`
- Small: `padding: 5px 12px`, `font-size: 0.75rem`
- Alle Buttons haben optionalen Icon-Slot (Icon links vom Text, 4px Gap)

### 10.3 Navigation

```css
.nav {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  box-shadow: var(--shadow-lg);
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

- **Aktiver Link:** `background: rgba(255,255,255,0.12); border-bottom: 2px solid rgba(255,255,255,0.85);`
- **Inaktive Links:** `color: rgba(255,255,255,0.88)`
- **Hover:** `background: rgba(255,255,255,0.1)`
- **Settings-Zahnrad:** Rechts in der Nav, fuehrt zur Settings-Seite
- **Icons:** SVGs aus `shared/icons.js`, 20px, Stroke `currentColor`
- **Mobile:** Hamburger-Menu, schliesst automatisch nach Link-Klick

### 10.4 Status-Badges

| Status | Background | Text | Icon (Lucide) |
|---|---|---|---|
| Gebucht | `--success-light` | `--success` | `Check` |
| Option | `--accent-subtle` | `--accent` | `Clock` |
| Offen | `--gray-100` | `--gray-500` | `HelpCircle` |

```css
.status {
  padding: 3px 10px;
  border-radius: var(--radius-lg);       /* 20px */
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
```

### 10.5 Tabellen

```css
/* Header */
thead { background: var(--primary); color: #FFFFFF; }
th { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.02em; }

/* Zeilen */
tbody tr:nth-child(even) { background: var(--gray-50); }
tbody tr:hover { background: #EDF1F5; }
td { border-bottom: 1px solid var(--gray-100); }
```

- Mobile: Horizontales Scrollen mit Fade-Indikator am Rand
- Sticky erste Spalte auf Mobile

### 10.6 Formulare

```css
input, select, textarea {
  border: 1.5px solid var(--gray-200);
  border-radius: var(--radius-sm);       /* 6px */
  padding: 8px 12px;
  font-size: 0.875rem;
  background: var(--white);
  color: var(--gray-900);
  transition: border-color 150ms, box-shadow 150ms;
}
/* Focus: border-color: primary-light, box-shadow: 0 0 0 3px rgba(61,122,158,0.12) */
/* Error: border-color: error, box-shadow: 0 0 0 3px rgba(176,58,46,0.1) */
```

- Desktop: 2-Spalten-Grid
- Mobile: 1 Spalte
- Full-Width-Felder: `.form-group.full { grid-column: 1 / -1; }`
- Labels: `--gray-500`, 13px, 500 weight — klar untergeordnet zum Input-Text

### 10.7 Collapsible Sections

```html
<details class="collapsible">
  <summary>
    <span class="chevron-icon"><!-- Lucide ChevronRight --></span>
    <span class="section-title">Aktivitaeten</span>
    <span class="section-count">8 Eintraege, 3 Must-Dos</span>
  </summary>
  <div class="collapsible-content">
    <!-- Inhalt -->
  </div>
</details>
```

- Chevron rotiert 90 Grad beim Oeffnen
- Count-Badge im Summary zeigt Zusammenfassung
- Progress-Bar im Summary fuer Packliste (% abgehakt)
- Smooth Height-Transition beim Auf-/Zuklappen

### 10.8 Tooltips

```css
.tooltip {
  background: var(--gray-900);
  color: #FFFFFF;
  border-radius: var(--radius-sm);       /* 6px */
  padding: 8px 12px;
  font-size: 0.75rem;
  max-width: 300px;
  box-shadow: var(--shadow-lg);
}
```

- Erscheinen nach 200ms Hover-Delay
- Pfeil zeigt zum Trigger-Element
- Positionierung: automatisch (oben bevorzugt, Fallback unten/links/rechts)

### 10.9 Info-Boxen / Callouts

```css
.callout {
  background: var(--info-light);
  border-left: 3px solid var(--primary-light);
  border-radius: 0 8px 8px 0;
  padding: 14px 18px;
  font-size: 0.875rem;
}
```

Varianten: Info (blau), Warning (gelb), Error (rot), Success (gruen) — jeweils mit passender `-light` Background-Farbe und linkem Border.

### 10.10 Empty States

```css
.empty-state {
  text-align: center;
  padding: 48px 24px;
}
.empty-state .icon {
  width: 32px;
  height: 32px;
  color: var(--gray-300);
  margin-bottom: 16px;
}
.empty-state h3 {
  color: var(--gray-700);
  margin-bottom: 8px;
}
.empty-state p {
  color: var(--gray-500);
  margin-bottom: 20px;
}
```

Immer: Icon + Ueberschrift + Erklaerung + CTA-Button.

### 10.11 Progress Bars

```css
.progress-bar {
  background: var(--gray-100);
  border-radius: var(--radius-full);
  height: 6px;
  overflow: hidden;
}
.progress-fill {
  background: var(--success);
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 300ms var(--ease);
}
```

Prozent-Text neben oder ueber der Bar, `font-variant-numeric: tabular-nums` fuer stabile Breite.

---

## 11. Responsive Design

### Breakpoints

| Breakpoint | Verhalten |
|---|---|
| `>= 1200px` | Volle Desktop-Ansicht, max-width Container |
| `768px - 1199px` | Reduzierte Grid-Spalten, kleinere Paddings |
| `481px - 767px` | 2-Spalten-Grids werden 1-spaltig, Hamburger-Menu |
| `<= 480px` | Alles einspaltig, kompakte Ansicht |

### Mobile-Regeln

- Touch-Targets: minimum `44x44px` (Apple HIG)
- Kein Hover-abhaengiger Content — alles auch per Tap erreichbar
- Tabellen: Horizontales Scrollen mit visuellem Fade-Indikator
- Formulare: Immer einspaltig
- Navigation: Hamburger-Menu, schliesst nach Klick

### Print

- Navigation, Breadcrumbs, Scroll-to-Top ausblenden
- Formulare ausblenden
- Font-Size: 11px
- Schatten entfernen

---

## 12. Accessibility

### WCAG 2.1 AA Minimum

- **Kontrast:** Mindestens 4.5:1 fuer normalen Text, 3:1 fuer grossen Text (>= 18px oder >= 14px bold)
- **Focus-Visible:** `2px solid var(--primary-light)`, `offset 2px` auf ALLEN interaktiven Elementen
- **ARIA-Labels:** Alle interaktiven Elemente ohne sichtbaren Text haben `aria-label`
- **Semantisches HTML:** `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`, `<details>`, `<summary>`
- **Keyboard-Navigation:** Logische Tab-Reihenfolge, alle Funktionen per Tastatur erreichbar
- **Skip-to-Content:** Link als erstes fokussierbares Element auf jeder Seite

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Deaktiviert Card-Hover-Transforms, Countdown-Animation und Collapse-Transitions.

---

## 13. Settings & Konfigurierbarkeit

### Was ist konfigurierbar?

| Einstellung | Default | Wo verwendet |
|---|---|---|
| Anzahl Personen | `5` | Ueberall: Budget-Berechnung, Fluege, Unterkuenfte, Header, Footer |
| Personen-Namen | `['Person 1', ...]` | Fluege (Zuordnung), Fahrer-Uebersicht, Packliste |
| Reisezeitraum | `2026-06-01 bis 2026-06-14` | Countdown, Budget pro Tag, Unterkuenfte-Filter |
| Zielort | `Palermo, Sizilien` | Header, Footer, Karten-Zentrierung |
| Waehrung | `EUR` | Alle Preisanzeigen |

### Settings-UI

- Erreichbar ueber **Settings-Icon** (Zahnrad) in der Navigation
- Entweder als eigene Seite (`settings/index.html`) oder als Modal
- Formular mit allen konfigurierbaren Werten
- "Speichern" schreibt in localStorage
- "Zuruecksetzen" stellt Defaults wieder her
- Aenderungen propagieren sofort auf alle Seiten (beim naechsten Laden)

### Architektur

```
shared/config.js
  |-- liest localStorage
  |-- Fallback auf Defaults
  |-- exportiert CONFIG-Objekt
  |-- alle Seiten importieren und verwenden CONFIG
```

---

## 14. Informationsarchitektur

### Seiten-Skelett (jede Seite)

```
1. Skip-to-Content Link (unsichtbar, fokussierbar)
2. Sticky Navigation (mit Breadcrumbs auf Unterseiten)
3. Page-Header (Gradient, Titel, Untertitel)
4. Summary-Dashboard (Key-Metriken auf einen Blick)
5. Collapsible Main-Content (Details, Formulare)
6. Footer (Reise-Infos aus Config)
```

### Sortierung & Filterung

- **Default-Sortierung:** Status (gebucht > option > offen), dann Preis aufsteigend
- **Filter:** Kategorie-Buttons oben, aktiver Filter visuell hervorgehoben
- **Sortierbare Tabellen:** Klick auf Header sortiert, Pfeil zeigt Richtung

### Homepage-Spezial

- Countdown zum Abflug (dynamisch aus Config-Reisezeitraum)
- 4 Auto-berechnete Quick-Stats-Karten
- 6 Navigations-Karten zu den Sektionen (mit SVG-Icons und Count-Badges)

---

## 15. Anti-Patterns — Was wir nicht tun

| Verboten | Warum |
|---|---|
| Emojis (Unicode, HTML-Entities) | Inkonsistentes Rendering, unprofessionell |
| `alert()`, `confirm()`, `prompt()` | Nicht styled, blockiert den Thread, UX-Bruch |
| Hardcoded Personenanzahl | Muss ueber Config aenderbar sein |
| Neon/Rainbow/High-Saturation Farben | Wirkt billig und ablenkend |
| Dekorative Fonts | Reduziert Lesbarkeit, wirkt verspielt |
| Inline-Styles fuer wiederkehrende Patterns | Inkonsistent, schwer wartbar — Klassen verwenden |
| Bounce/Parallax/Slide-In-Animationen | Ablenkend, wirkt "showoff" statt professionell |
| `scale()` auf Hover | Fuehlt sich instabil an |
| Opacity-Aenderung als Hover-Effekt | Sieht aus wie "disabled" |
| Verschachtelte Karten (Card in Card in Card) | Unklare Hierarchie |
| Placeholder-Text "Lorem ipsum" | Nutzlos — realistische Beispiele verwenden |
| Verwaiste Labels (Label ohne zugehoeriges Input) | Accessibility-Problem |
| Farbige Vollflaechen-Hintergruende auf Karten | Ueberwaeltigend — Farbe nur in Badges/Tags/Borders |

---

## 16. Technische Entscheidungen

### Custom CSS (kein Framework)

- Seite laeuft ueber `file://` Protokoll — CDN-Frameworks unzuverlaessig
- Bestehende kompakte CSS vs. 70-200KB Framework-Overhead
- Volle Kontrolle ueber Farbschema und Komponenten
- Kein Build-System noetig, sofort lauffaehig

### Legacy-Aliases fuer Migration

Damit bestehende Seiten sofort funktionieren, definiert `:root` Aliases:

```css
:root {
  /* Neue Tokens (Quelle der Wahrheit) */
  --primary: #2B4A5C;
  --primary-light: #3D7A9E;
  --primary-dark: #1D3340;
  /* ... alle neuen Tokens ... */

  /* Legacy-Aliases (fuer sanfte Migration) */
  --bg: var(--surface-page);
  --card-bg: var(--surface-card);
  --text: var(--gray-900);
  --text-light: var(--gray-500);
  --border: var(--gray-200);
  --green: var(--success);
  --red: var(--error);
}
```

So koennen bestehende Seiten weiter `var(--bg)` verwenden, waehrend neue Code die praeziseren Tokens nutzt.

### CSS-Variablen — Vollstaendiger Block

Copy-paste-ready fuer `shared/styles.css`:

```css
:root {
  /* Primary */
  --primary: #2B4A5C;
  --primary-light: #3D7A9E;
  --primary-dark: #1D3340;

  /* Accent (Terracotta) */
  --accent: #C4653A;
  --accent-light: #D4845F;
  --accent-subtle: #FBF0EB;

  /* Semantic */
  --success: #2D8659;
  --success-light: #E7F4ED;
  --warning: #B8860B;
  --warning-light: #FDF6E3;
  --error: #B03A2E;
  --error-light: #FBEAE8;
  --info: #3D7A9E;
  --info-light: #EBF3F8;

  /* Neutrals */
  --gray-950: #1A1D20;
  --gray-900: #252A2E;
  --gray-700: #4A5259;
  --gray-500: #6B7680;
  --gray-400: #94A0AA;
  --gray-300: #B8C1C8;
  --gray-200: #D5DBE0;
  --gray-100: #E9ECEF;
  --gray-50: #F3F5F7;
  --white: #FFFFFF;

  /* Surfaces */
  --surface-page: var(--gray-50);
  --surface-card: var(--white);
  --surface-elevated: var(--white);
  --surface-inset: var(--gray-100);
  --surface-overlay: rgba(26, 29, 32, 0.5);

  /* Shadows (Dual-Layer) */
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.05);
  --shadow-hover: 0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04);

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Transitions */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;

  /* Legacy Aliases */
  --bg: var(--surface-page);
  --card-bg: var(--surface-card);
  --text: var(--gray-900);
  --text-light: var(--gray-500);
  --border: var(--gray-200);
  --green: var(--success);
  --red: var(--error);
}
```
