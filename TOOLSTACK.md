# TripForge — Toolstack & Technologie-Plan

> Alles was du brauchst um TripForge zu bauen: Sprache, Frameworks, APIs, Hosting, Tools.
> Optimiert auf: kostenlos starten, professionell skalieren, Web + Mobile aus einer Codebase.

---

## 1. Grundentscheidungen

### Programmiersprache: **TypeScript** (durchgängig)
- Eine Sprache für alles: Frontend, Backend, Mobile, APIs, Datenbank-Schemas
- End-to-End Type Safety: Fehler werden zur Compile-Zeit gefangen, nicht erst beim User
- Riesiges Ökosystem (npm), beste IDE-Unterstützung (VS Code)
- Kein Context-Switch zwischen Sprachen

### Architektur: **Monorepo**
- Web + Mobile + Shared Packages in einem Repository
- Tool: **Turborepo** (Build-Caching, parallelisierte Builds) + **pnpm** (schneller, disk-effizient)
- Geteilter Code: Types, Validierung, Business-Logik, API-Definitionen

```
tripforge/
├── apps/
│   ├── web/              ← Next.js Web-App
│   └── mobile/           ← Expo Mobile-App
├── packages/
│   ├── ui/               ← Shared UI-Komponenten (shadcn + Tamagui)
│   ├── db/               ← Drizzle Schemas, Migrations, Queries
│   ├── api/              ← tRPC Router, Validierung (Zod)
│   ├── types/            ← Shared TypeScript Types
│   └── utils/            ← Shared Helpers, Formatierung, Konstanten
├── supabase/             ← Supabase Migrations, Edge Functions, Seed Data
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## 2. Frontend — Web

### Framework: **Next.js 15+** (React)
- **Warum:** Der Standard für React-Apps 2025/2026. Server Components, App Router, Edge Runtime.
- SSR für SEO & Performance, Static Generation wo möglich
- API Routes für Backend-Logik (serverless)
- Middleware für Auth-Checks, Redirects
- Bestes Deployment-Target: Vercel (Zero-Config)

### UI-Komponenten: **shadcn/ui**
- **Warum:** Nicht eine Library die du installierst — du kopierst die Komponenten in dein Projekt und besitzt den Code
- Gebaut auf **Radix UI** (accessible primitives) + **Tailwind CSS**
- Voll anpassbar, kein Vendor-Lock-in
- 80+ Komponenten: Button, Dialog, Dropdown, Toast, Tabs, Calendar, Command Palette, etc.
- Perfekt für das "Linear/Notion"-Feel

### Styling: **Tailwind CSS**
- Utility-First: Schnelle Entwicklung, konsistentes Design-System
- Dark Mode eingebaut
- Responsive Breakpoints (Mobile-First)
- Perfekt für Custom Design (keine generische Material-UI-Optik)
- Kleine Bundle-Size (nur genutzte Klassen)

### State Management
| Was | Tool | Warum |
|-----|------|-------|
| Server-Daten (API, DB) | **TanStack Query** | Caching, Background-Refetch, Optimistic Updates, Offline-Support |
| Client-State (UI) | **Zustand** | Minimalistisch (1kb), kein Boilerplate, TypeScript-native |
| Formulare | **React Hook Form** + **Zod** | Performant, Validierung mit Zod-Schemas (gleiche wie Backend) |

### Karten: **react-leaflet** + OpenStreetMap (Hauptvariante)
- Komplett kostenlos, open-source
- Leaflet 2.0 (2025): Moderne ES-Module, leichtgewichtig (42kb)
- Riesiges Plugin-Ökosystem (Routing, Clustering, Heatmaps)
- Alternative für Premium-Optik: **Mapbox GL JS** (50.000 Loads/Monat kostenlos)

### Weitere Web-Libraries
| Feature | Library | Notiz |
|---------|---------|-------|
| Drag & Drop | **dnd-kit** | Modern, accessible, performant |
| Datum/Zeit | **date-fns** | Leichtgewichtig, tree-shakeable |
| Charts | **Recharts** oder **Tremor** | Tremor für Dashboard-Charts, Recharts für Custom |
| Animationen | **Framer Motion** | Smooth, deklarativ, Layout-Animations |
| Rich Text | **Tiptap** | Notion-artiger Editor, falls nötig |
| PDF-Export | **pdfmake** | Deklarativ (JSON → PDF), Client-side |
| CSV-Export | **Papa Parse** | Schnellster CSV-Parser, RFC-konform |
| QR-Codes | **qr-code-styling** | QR mit Logo/Branding |
| Markdown | **react-markdown** | Für Reise-Tagebuch, Beschreibungen |
| Virtualisierung | **TanStack Virtual** | Für lange Listen (Aktivitäten, Ausgaben) |

---

## 3. Frontend — Mobile

### Framework: **Expo** (React Native)
- **Warum:** Gleiche Sprache (TypeScript), gleiche Logik, geteilte Packages mit Web
- Expo Router: File-based Routing (wie Next.js), automatische Deep-Links
- Expo SDK: Kamera, Location, Notifications, Haptics, etc. — alles eingebaut
- EAS Build: Cloud-Builds für iOS + Android ohne Mac
- Over-the-Air Updates: Fixes ohne App-Store-Review

### Cross-Platform UI: **Tamagui**
- Shared Components die auf Web UND Mobile laufen
- Theme-System, Responsive Design, Animationen
- Copy-Paste Komponenten (wie shadcn, aber cross-platform)
- Alternative: **NativeWind** (Tailwind auf Mobile) — simpler aber weniger features

### Mobile-spezifische Libraries
| Feature | Library |
|---------|---------|
| Navigation | **Expo Router** |
| Karten | **react-native-maps** + **rnmapbox/maps** (Offline) |
| Kamera | **expo-camera** |
| Location (GPS) | **expo-location** |
| Background Location | **react-native-background-geolocation** |
| Push Notifications | **expo-notifications** |
| Barcode-Scanner | **react-native-vision-camera** |
| Offline Storage | **expo-sqlite** + **WatermelonDB** |
| Gestures | **react-native-gesture-handler** |
| Biometrics | **expo-local-authentication** (Face ID, Fingerprint) |
| Haptics | **expo-haptics** |
| Filesystem | **expo-file-system** |

### PWA als Alternative/Ergänzung
- Next.js Web-App als Progressive Web App installierbar
- Service Worker für Offline-Cache
- Für Features die keine native App brauchen
- **Capacitor** als Bridge: Web-App → Native App-Store-Wrapper (weniger Aufwand als Expo, aber weniger native)

---

## 4. Backend & Datenbank

### Backend-as-a-Service: **Supabase**
- **Warum:** Open-Source Firebase-Alternative, basiert auf PostgreSQL
- Alles integriert: Datenbank, Auth, Realtime, Storage, Edge Functions
- Perfekt für schnellen Start ohne eigene Server-Infrastruktur

**Was Supabase mitbringt:**
| Feature | Detail |
|---------|--------|
| **PostgreSQL** | Vollwertige relationale DB, SQL, Joins, Constraints, Trigger |
| **Auto-REST-API** | Jede Tabelle wird automatisch ein REST-Endpoint (PostgREST) |
| **Realtime** | WebSocket-Subscriptions auf DB-Änderungen, Broadcast, Presence |
| **Auth** | E-Mail/Passwort, Magic Link, OAuth (Google, Apple, GitHub, etc.), Phone |
| **Row Level Security** | Zugriffskontrolle auf Zeilenebene — Multi-Tenant ohne extra Backend |
| **Storage** | Datei-Upload mit Auth-Integration (Fotos, Dokumente, Belege) |
| **Edge Functions** | Serverless Functions (Deno), für Webhooks, API-Calls, Cron |
| **pg_cron** | Scheduled Jobs direkt in der DB (Erinnerungen, Cleanup) |
| **Vault** | Secrets Management (API-Keys sicher speichern) |

**Free Tier (ausreichend für Freundesgruppe):**
- 500 MB Datenbank
- 1 GB Storage
- 50.000 Monthly Active Users
- 200 gleichzeitige Realtime-Connections
- 500.000 Edge Function Calls/Monat
- Unbegrenzte API-Requests

### ORM: **Drizzle ORM**
- **Warum statt Prisma:** 7kb Bundle (vs. Prisma's schwerer Runtime), bessere Serverless-Performance
- TypeScript-native SQL-Builder (SQL-nah, kein eigener Query-Sprache-Overhead)
- Schema-Definitionen = TypeScript = geteilte Types
- Migrations, Seeding, Studio (DB-GUI)
- Perfekt mit Supabase PostgreSQL

### API-Architektur: **tRPC**
- End-to-End Type Safety: Änderung am Backend → TypeScript-Fehler im Frontend (sofort, ohne Codegen)
- Kein REST/GraphQL-Boilerplate
- Funktioniert mit Next.js API Routes + Expo
- Validierung mit **Zod** (gleiche Schemas für Frontend-Formulare UND Backend)
- Für öffentliche APIs (falls später nötig): REST-Wrapper um tRPC

### Zusätzliche Backend-Services
| Brauche ich für | Service | Kostenlos? |
|-----------------|---------|------------|
| Cron Jobs | **Supabase pg_cron** | Ja (built-in) |
| Background Tasks | **Supabase Edge Functions** | 500k Calls/Monat |
| Webhook Processing | **Supabase Edge Functions** oder **Cloudflare Workers** | Ja |
| Volltextsuche | **Supabase Full-Text Search** (PostgreSQL built-in) | Ja |
| Erweiterte Suche | **Meilisearch** (self-hosted auf Railway) | ~5$/Monat |

---

## 5. Authentifizierung & Autorisierung

### Auth-Provider: **Supabase Auth**
- Nahtlos integriert mit Datenbank (RLS Policies)
- Kein separater Auth-Service nötig

**Login-Methoden:**
| Methode | Für wen |
|---------|---------|
| E-Mail + Passwort | Standard |
| Magic Link (E-Mail) | Passwortlos, bequem |
| Google OAuth | "Mit Google anmelden" — die meisten User |
| Apple OAuth | Pflicht für iOS-Apps im App Store |
| GitHub OAuth | Für Developer-Zielgruppe (optional) |

**Zugriffssteuerung:**
- **Row Level Security (RLS):** Policies direkt auf DB-Ebene
  - "User kann nur seine eigenen Daten sehen"
  - "Admin kann alle Daten der Reise sehen"
  - "Gast kann nur lesen"
- Rollen-System über Custom Claims oder eigene `trip_members`-Tabelle mit Rolle (owner/admin/member/guest)

---

## 6. Hosting & Deployment

### Web-Hosting: **Vercel**
- Zero-Config Deployment für Next.js (vom gleichen Team)
- Globales Edge Network, automatisches SSL
- Preview-Deployments pro Git-Branch
- **Free Tier:** Hobby-Projekte (nicht-kommerziell)
- **Pro:** 20$/Monat wenn kommerziell

### Backend: **Supabase Cloud** (managed)
- Free Tier deckt Freundesgruppen-Nutzung ab
- Pro: 25$/Monat wenn mehr Kapazität nötig
- Alternative: Self-Hosted Supabase auf **Railway** (~5$/Monat)

### Statische Assets & CDN: **Cloudflare**
- **R2 Storage:** Object Storage mit 0$ Egress (Fotos, Dokumente)
- **Images:** Bild-Optimierung (WebP, AVIF), Resize on-the-fly
- **Workers:** Serverless Functions (100k Requests/Tag kostenlos)
- **Free CDN:** Automatisches Caching, DDoS-Schutz

### Kostenübersicht (Freundesgruppe / MVP)

| Service | Free Tier | Limits |
|---------|-----------|--------|
| Vercel | 0$ | Hobby, nicht-kommerziell |
| Supabase | 0$ | 500MB DB, 1GB Storage, 50k MAU |
| Cloudflare | 0$ | R2: 10GB Storage, Workers: 100k/Tag |
| Resend (E-Mail) | 0$ | 3.000 E-Mails/Monat |
| OneSignal (Push) | 0$ | 10.000 Subscriber |
| **Gesamt** | **0$/Monat** | Für ~5-20 User locker ausreichend |

### Wenn es wächst (Pro-Stufe)

| Service | Kosten | Trigger |
|---------|--------|---------|
| Vercel Pro | 20$/Monat | Kommerziell oder >100GB Bandwidth |
| Supabase Pro | 25$/Monat | >500MB DB oder >200 Realtime-Connections |
| Domain | ~12$/Jahr | Custom Domain |
| **Gesamt** | **~45$/Monat** | Für hunderte User |

---

## 7. APIs & Integrationen — Pro Feature

> Für jedes Feature die beste API/Integration. Priorisiert nach: kostenlos, zuverlässig, einfach.

### Karten & Navigation

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Karten anzeigen | **Leaflet + OpenStreetMap** | Unbegrenzt, kostenlos | Standard-Wahl, open-source |
| Premium-Karten (3D, Styling) | **Mapbox GL JS** | 50k Loads/Monat | Für Premium-Optik, falls gewünscht |
| Offline-Karten (Mobile) | **MapLibre** + Offline-Tiles | Kostenlos | Open-Source Mapbox-Fork |
| Geocoding (Adresse → Koordinaten) | **Mapbox Geocoding** | 100k Requests/Monat | Oder Nominatim (self-hosted, unbegrenzt) |
| Routen berechnen | **OSRM** (self-hosted) | Unbegrenzt | Open-Source, Auto/Rad/Fuß |
| Multi-Stop Routenoptimierung | **OSRM** + eigener Algorithmus | Unbegrenzt | TSP-Solver Library (z.B. `or-tools`) |
| Inter-City Transport vergleichen | **Rome2Rio API** | Auf Anfrage | Oder manuell: Links zu Trainline, Flixbus etc. |

### Wetter

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Wetter-Vorhersage | **Open-Meteo** | 10k Calls/Tag, kein API-Key | Bester Free-Tier, 16-Tage Forecast |
| UV-Index | **Current UV Index API** | 500 Requests/Tag, kein Key | Simpel, kostenlos |
| Historisches Wetter | **Visual Crossing** | 1000 Records/Tag | 50 Jahre Historie |

### Flüge & Transport

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Flug-Suche | **Kiwi (Tequila API)** | Kostenlos | Flexibel, Multi-City, Open-Jaw |
| Flug-Status (Live) | **AviationStack** | 500 Calls/Monat | Verspätungen, Gate-Änderungen |
| Flughafen-Infos | **OpenFlights** | Komplett kostenlos | 7.500+ Airports mit IATA, Koordinaten |
| Zug/Bus/Fähre suchen | Links zu **Trainline, Flixbus, Ferryhopper** | N/A | Deep-Links statt API |

### Unterkünfte

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Hotel-Suche | **Amadeus Hotel API** | Test-Umgebung kostenlos | 150k+ Hotels weltweit |
| Booking-Links | **Booking.com Affiliate** | Kostenlos (Affiliate) | Provision bei Buchung |
| Airbnb-Links | Direkt-Links | N/A | Kein öffentliches API verfügbar |

### Währung & Finanzen

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Wechselkurse (Live) | **Frankfurter** | Unbegrenzt, kein Key | 150+ Währungen, Zentralbank-Daten |
| Trinkgeld-Daten | Eigene DB (pro Land) | N/A | Statische Daten, kein API nötig |
| Zahlungen (falls nötig) | **Stripe** | 2.9% + 0.30$ pro Transaktion | Nur wenn Zahlungen in-App |

### Übersetzung & Sprache

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Text-Übersetzung | **Google Cloud Translation** | 500k Zeichen/Monat | Oder **DeepL** (500k Zeichen/Monat) |
| Kamera-Übersetzung (OCR) | **Google Cloud Vision** oder **Tesseract** (self-hosted) | Tesseract: unbegrenzt | Tesseract: 100+ Sprachen, offline |
| Text-to-Speech (Aussprache) | **Google Cloud TTS** | 60 Min/Monat | Für Phrasen-Aussprache |
| Reise-Phrasen | Eigene DB (pro Sprache) | N/A | Kuratierte Phrasen, kein API nötig |
| Offline-Übersetzung | **LibreTranslate** (self-hosted) | Unbegrenzt | Open-source, kein Google nötig |

### Sicherheit & Reisewarnungen

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Reisewarnungen | **U.S. State Dept API** | Kostenlos | Oder Auswärtiges Amt (scrapen) |
| Länder-Infos | **REST Countries** | Unbegrenzt, kein Key | Flaggen, Sprachen, Währungen, Zeitzonen |
| Sicherheits-Scores | **GeoSure API** | Auf Anfrage | Oder eigene Daten kuratieren |

### Orte & POI (Points of Interest)

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Restaurants, Cafés, etc. | **Overture Maps** (Bulk-Download) | Komplett kostenlos | Open Data, self-hosted |
| POI-Suche in der Nähe | **OpenRouteService** | Kostenlos | Basiert auf OpenStreetMap |
| Toiletten | **OpenStreetMap Overpass API** | Kostenlos | Query: `amenity=toilets` |
| Vegane Restaurants | **HappyCow** | Kein öffentliches API | Deep-Links oder Scraping |

### Fotos & Medien

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Foto-Upload & Storage | **Supabase Storage** | 1 GB | Auth-integriert |
| Großer Foto-Storage | **Cloudflare R2** | 10 GB, 0$ Egress | Für viele Fotos |
| Bild-Optimierung | **Cloudflare Images** | 5k Transforms/Monat | WebP/AVIF, Resize |
| Bild-Kompression | **Tinify (TinyPNG)** | 500 Compressions/Monat | 80% kleiner |

### Kommunikation

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Real-Time Chat | **Supabase Realtime** | Built-in (200 Connections) | Broadcast + Presence |
| Push Notifications | **Expo Notifications** + **OneSignal** | Expo: kostenlos, OneSignal: 10k User | Cross-Platform |
| E-Mail (Einladungen, Erinnerungen) | **Resend** | 3.000/Monat | React Email Templates |
| SMS (optional) | **Supabase Auth Phone** | Begrenzt | Oder Twilio |

### Kalender

| Brauche ich für | API/Service | Free Tier | Notiz |
|-----------------|-------------|-----------|-------|
| Google Calendar Sync | **Google Calendar API** | Komplett kostenlos | OAuth, Read/Write |
| Apple Calendar Sync | **tsdav** (CalDAV Library) | Kostenlos (Library) | iCloud-Kalender |
| ICS-Export | **ical-generator** (Library) | Kostenlos (Library) | .ics Dateien generieren |

### AI-Features

| Brauche ich für | API/Service | Free Tier | Kosten |
|-----------------|-------------|-----------|--------|
| AI-Reiseplan generieren | **Claude API** (Anthropic) | Nein | Haiku: ~1$/Monat bei leichter Nutzung |
| Receipt-Scanning (OCR) | **Tesseract** (self-hosted) | Unbegrenzt | Open-Source, offline |
| Smart Suggestions | **Claude API** oder **OpenAI** | Nein | Nach Nutzung, günstig bei Haiku/Mini |
| Screenshot → Ort erkennen | **Google Cloud Vision** | 1000 Bilder/Monat | Landmark Detection |

### Sonstige Utilities

| Feature | Library/API | Kostenlos? |
|---------|------------|------------|
| Barcode-Scanner | **react-native-vision-camera** | Ja |
| QR-Code generieren | **qr-code-styling** | Ja |
| PDF generieren | **pdfmake** | Ja |
| CSV exportieren | **Papa Parse** | Ja |
| Datum/Zeit-Zonen | **date-fns** + **date-fns-tz** | Ja |
| Validierung | **Zod** | Ja |
| Einheiten-Umrechnung | Eigene Utils | Ja |
| Markdown Rendering | **react-markdown** | Ja |
| Emoji-Picker | **emoji-mart** | Ja |

---

## 8. Realtime & Offline

### Realtime-Strategie

**Supabase Realtime** für:
- Live-Voting-Updates (jemand stimmt ab → alle sehen es sofort)
- Expense-Updates (neue Ausgabe → Budget-Ansicht aktualisiert sich)
- Chat-Nachrichten
- Presence: Wer ist gerade online in der Reise
- Cursor/Typing-Indicators im Chat

**Wie es funktioniert:**
1. Client subscribed auf Channel (z.B. `trip:123`)
2. Änderung in DB → Supabase pushed Update via WebSocket
3. TanStack Query invalidiert Cache → UI aktualisiert

### Offline-Strategie

**Grundprinzip:** Local-First, Sync im Hintergrund

| Layer | Technologie | Zweck |
|-------|-------------|-------|
| Web Offline | **Service Worker** (Next.js PWA) | Statische Assets cachen |
| Mobile Offline | **expo-sqlite** + **WatermelonDB** | Lokale DB mit Sync-Logic |
| Daten-Sync | **TanStack Query Persister** | Queries offline cachen, bei Reconnect syncen |
| Karten Offline | **MapLibre Offline Manager** | Kartenregion vorab downloaden |
| Übersetzung Offline | **LibreTranslate** Sprachpakete | Lokale Modelle |

**Konflikt-Lösung bei gleichzeitiger Offline-Bearbeitung:**
- Last-Write-Wins für einfache Felder (Name, Status)
- Merge für additive Daten (Ausgaben: beide werden übernommen)
- Conflict-UI für destruktive Änderungen (Löschen)

---

## 9. Testing & Qualität

| Was | Tool | Warum |
|-----|------|-------|
| Unit Tests | **Vitest** | Schnell, Vite-native, Jest-kompatibel |
| Component Tests | **Testing Library** (React) | User-zentrierte Tests |
| E2E Tests (Web) | **Playwright** | Cross-Browser, schnell, stabil |
| E2E Tests (Mobile) | **Maestro** | Einfachstes Mobile-Testing-Tool |
| API Tests | **Vitest** + **supertest** | Endpoint-Tests |
| Type Checking | **TypeScript strict mode** | Fehler zur Compile-Zeit |
| Linting | **ESLint** + **Biome** (Formatter) | Code-Qualität + schnelles Formatting |
| Git Hooks | **Husky** + **lint-staged** | Lint & Type-Check vor jedem Commit |

---

## 10. DevOps & CI/CD

| Was | Tool |
|-----|------|
| CI/CD | **GitHub Actions** |
| Web Deploy | **Vercel** (auto-deploy on push) |
| Mobile Build | **EAS Build** (Expo Application Services) |
| Mobile OTA Updates | **EAS Update** |
| DB Migrations | **Drizzle Kit** (`drizzle-kit push/migrate`) |
| Environment Vars | **Vercel Environment** + **Supabase Vault** |
| Monitoring | **Vercel Analytics** (Web) + **Sentry** (Error Tracking) |
| Uptime | **Better Stack** oder **Checkly** (Free Tier) |

---

## 11. Design-Tooling

| Was | Tool | Warum |
|-----|------|-------|
| UI-Design | **Figma** | Standard, kostenlos für Personal |
| Icons | **Lucide Icons** | Open-Source, konsistent, 1000+ Icons, mit shadcn kompatibel |
| Illustrations | **unDraw** | Kostenlose SVG-Illustrationen |
| Farben | **Radix Colors** | Accessible Color Palettes, Dark Mode eingebaut |
| Fonts | **Google Fonts** (Inter) | Kostenlos, performant |
| Design System | **Tailwind Config** + **CSS Variables** | Eine Source of Truth für Farben, Spacing, etc. |

---

## 12. Empfohlene Reihenfolge zum Starten

### Phase 0: Setup (Tag 1-2)
1. Monorepo aufsetzen: `pnpm create turbo@latest`
2. Next.js App in `apps/web/`
3. Supabase Projekt erstellen (supabase.com)
4. Drizzle ORM konfigurieren, erste Schemas
5. shadcn/ui installieren, Tailwind konfigurieren
6. Supabase Auth einrichten (Google + E-Mail)
7. Basis-Layout: Navigation, Auth-Flow

### Phase 1: Core (Woche 1-2)
1. **Reise-Management:** Reise erstellen, bearbeiten, Teilnehmer einladen
2. **Dashboard:** Reisen-Übersicht, Basis-Navigation
3. **Personen & Rollen:** Owner/Admin/Member, Profile
4. **Einladungssystem:** Link generieren, beitreten

### Phase 2: Planung (Woche 3-4)
1. **Abstimmungen:** Voting-System (Ranked Choice, Ja/Nein, Polls)
2. **Unterkünfte:** Vergleichstabelle, Kartenansicht, Voting
3. **Flüge:** Flugoptionen sammeln, Preisvergleich
4. **Aufgaben:** To-Do-Listen mit Zuweisung

### Phase 3: Details (Woche 5-6)
1. **Budget & Ausgaben:** Expense-Tracker, Schuldenberechnung
2. **Aktivitäten:** Sammeln, Kategorisieren, Karte
3. **Tagesplaner:** Drag & Drop, Zeitslots
4. **Packliste:** Persönlich + Gemeinsam

### Phase 4: Unterwegs (Woche 7-8)
1. **Chat:** Real-Time Gruppen-Chat
2. **Wetter:** Integration Open-Meteo
3. **Karte:** Offline-Karten, POI
4. **Einkaufsliste:** Gemeinsame Listen

### Phase 5: Mobile (Woche 9-10)
1. Expo App aufsetzen
2. Shared Packages verbinden
3. Core-Features auf Mobile portieren
4. Push Notifications

### Phase 6: Polish & Extras (laufend)
1. Sprache & Übersetzung
2. Community-Features
3. Fotos & Tagebuch
4. Settlement & Abschluss
5. AI-Features

---

## 13. Zusammenfassung: Der Stack auf einen Blick

```
┌─────────────────────────────────────────────────────────┐
│                    TRIPFORGE STACK                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FRONTEND (Web)          FRONTEND (Mobile)              │
│  ├─ Next.js 15           ├─ Expo (React Native)         │
│  ├─ React 19             ├─ Expo Router                 │
│  ├─ shadcn/ui            ├─ Tamagui                     │
│  ├─ Tailwind CSS         ├─ react-native-maps           │
│  ├─ TanStack Query       └─ expo-location               │
│  ├─ Zustand                                             │
│  ├─ react-leaflet        SHARED PACKAGES                │
│  └─ Framer Motion        ├─ tRPC (API)                  │
│                          ├─ Zod (Validierung)           │
│  BACKEND                 ├─ Drizzle (DB Schemas)        │
│  ├─ Supabase             ├─ TypeScript Types            │
│  │  ├─ PostgreSQL        └─ Utils & Helpers             │
│  │  ├─ Auth                                             │
│  │  ├─ Realtime          HOSTING                        │
│  │  ├─ Storage           ├─ Vercel (Web)                │
│  │  ├─ Edge Functions    ├─ Supabase Cloud (Backend)    │
│  │  └─ pg_cron           ├─ Cloudflare R2 (Storage)     │
│  ├─ tRPC Routers         └─ EAS (Mobile Builds)         │
│  └─ Drizzle ORM                                        │
│                          TOOLING                        │
│  APIS & SERVICES         ├─ Turborepo + pnpm            │
│  ├─ Open-Meteo (Wetter)  ├─ TypeScript (strict)         │
│  ├─ Frankfurter (Währung)├─ Vitest + Playwright         │
│  ├─ Kiwi (Flüge)        ├─ GitHub Actions               │
│  ├─ Amadeus (Hotels)     ├─ ESLint + Biome              │
│  ├─ REST Countries       └─ Sentry (Monitoring)         │
│  ├─ Resend (E-Mail)                                     │
│  ├─ OneSignal (Push)     DESIGN                         │
│  ├─ Google Calendar      ├─ Figma                       │
│  └─ Claude API (AI)      ├─ Lucide Icons                │
│                          ├─ Radix Colors                │
│                          └─ Inter (Font)                │
│                                                         │
│  KOSTEN: 0$/Monat (Free Tier) → ~45$/Monat (Pro)       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
