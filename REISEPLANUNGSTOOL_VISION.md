# TripForge — Die ultimative Reiseplanungs-Plattform

## Produktvision & Feature-Spezifikation

---

## 1. Vision & Elevator Pitch

### Das Problem
Eine Gruppenreise zu planen bedeutet heute: **Dutzende Apps, endlose Gruppenchats, verstreute Infos.** Doodle für Termine, Splitwise für Kosten, Google Maps für Navigation, Booking.com für Unterkünfte, Notion für Notizen, WhatsApp für Abstimmungen, TripIt für den Überblick, PackPoint für die Packliste. Jede App löst ein Teilproblem — aber niemand verbindet alles.

### Die Lösung
**TripForge** ist die All-in-One-Plattform für Reiseplanung, -durchführung und -abschluss. Von der ersten Idee ("Lass mal nach Sizilien!") über die Gruppenfindung, Buchung und Vorbereitung bis zum letzten geteilten Foto und der finalen Kostenabrechnung — alles in einer Anwendung.

### Für wen?
- **Gruppen** (2–20+ Personen): Freundesgruppen, Familien, Vereine, Firmen-Retreats
- **Einzelreisende**: Auch solo nutzbar, mit reduziertem Feature-Set
- **Reiseveranstalter**: Optionale Pro-Features für organisierte Gruppenreisen

### Plattform
- **Web-App**: Optimiert für Desktop (große Bildschirme, Multi-Panel-Layouts) UND Mobile (Touch-optimiert, native-feel)
- Nicht nur responsiv — **Desktop und Mobile sind gleichwertig optimierte Erfahrungen** mit jeweils eigenem Layout-Konzept
- Optional: Native Mobile Apps (iOS/Android) für Offline-Fähigkeit und Push-Notifications

### Anspruch
Kein halbgares Hobby-Projekt. **TripForge soll sich anfühlen wie ein Produkt von Linear, Notion oder Figma** — professionell, clean, ein Genuss zu benutzen. Jeder Pixel sitzt. Jede Interaktion fühlt sich richtig an. Man nimmt das Tool in die Hand und denkt: "Wow, damit will ich arbeiten."

---

## 2. Recherche-Grundlage

> **Alle Features in diesem Dokument basieren auf systematischer Recherche von 50+ existierenden Tools**, die entlang des gesamten Reise-Zeitstrahls eingesetzt werden — von der Inspiration bis nach der Rückkehr. Die besten Ideen aus jeder App wurden extrahiert, kombiniert und durch eigene Konzepte ergänzt, um eine lückenlose Gesamtlösung zu schaffen.

### Analysierte Tools (Auswahl)

| Kategorie | Tools |
|---|---|
| Itinerary & Planung | Wanderlog, TripIt, Sygic Travel, Wonderplan, Pilot, Planapple, Stippl |
| Gruppenplanung | Troupe, Let's Jetty, AvoSquado, SquadTrip, PlanHarmony, FlowTrip, MiTravel |
| Abstimmung & Termine | Doodle, When2Meet, Troupe (Polls) |
| Expense Splitting | Splitwise, Tricount, Settle Up, Spliit, Splitser, Cino, Tab, Venmo Groups |
| Buchung | Kayak, Skyscanner, Booking.com, Expedia, Airbnb, VRBO |
| Navigation & Transport | Google Maps, Citymapper, Rome2Rio, Moovit, Roadtrippers |
| Restaurants & Aktivitäten | TripAdvisor, Yelp, Google Maps, Viator, GetYourGuide |
| Kollaboration | Notion, Trello, Miro, Google Docs |
| Kommunikation | WhatsApp, Telegram, Slack |
| Fotos & Erinnerungen | Google Photos, iCloud Shared Albums |
| AI-Planung | Mindtrip, Layla, Trip Planner AI, FlowTrip (Screenshot AI) |
| Packlisten | PackPoint |
| Inspiration | Instagram, TikTok, Pinterest, Travel Blogs |
| Zahlungen | WeTravel, Venmo, PayPal |
| Sprache & Übersetzung | Google Translate, iTranslate, DeepL, Taalhammer, Pimsleur |
| Einkaufen & Listen | Bring!, AnyList, OurGroceries |
| Multi-City & Routen | Rome2Rio, Roadtrippers, Furkot, RouteXL, Komoot, Eurail Planner |
| Lokale Dienste | AroundMe, Flush (Toiletten), HappyCow (vegan), WiFi Map |
| Währung & Trinkgeld | XE Currency, GlobeTips, Ultimate Tip Calculator |
| Gesundheit & Sicherheit | Sitata, GeoSure, Travel Healthy, Medisafe, Life360 |
| Konnektivität | Airalo, Nomad, Saily, Holafly (eSIM), WiFi Map, Instabridge |
| Reise-Tagebuch | Polarsteps, Journi, Travel Diaries |
| Wäsche & Services | Laundryheap, Laundromat Finder |
| Fähren & Inseln | Ferryhopper, CruisePortIQ |
| Visa & Einreise | Visa Index, iVisa, VisaHQ, Visa List |
| Versicherung | Squaremouth, TravelInsurance.com, Allianz, InsureMyTrip |
| Preisvergleich & Alerts | Google Flights, Hopper, Skyscanner Alerts, Kayak Price Alerts |
| Haustier & Haus | Rover, TrustedHousesitters, PetBacker, Nomador |
| Flughafen & Lounge | iFly, LoungeKey, Priority Pass, SeatMaps.com |
| Layover-Planung | CleverLayover, Airwander, ResortPass |
| Scam-Warnungen | ScamRadar |
| Strand & Gezeiten | Nautide, Surf-Forecast, Windfinder, Surfline |
| Events & Nachtleben | Eventbrite, Fever, Discotech, HappyHopper, Meetup |
| UV & Sonnenschutz | UVLens, SunCare, Reapply, Sola |
| Jet-Lag | Timeshifter, StopJetLag, Jet Lag Rooster |
| Gepäck-Aufbewahrung | Bounce, LuggageHero, Radical Storage |
| Taxi-Schätzer | Taxi-Calculator, RideGuru, Better Taxi |
| Lost & Found | Amanat, Deliverback |
| Fotografie-Timing | The Photographer's Ephemeris (TPE) |
| Lautstärke & Ambiente | SoundPrint |
| Crowd-Vorhersage | Queue Times, Waiting Times, Google Popular Times |
| Travel Buddy & Social | Travello, GAFFL, Tourlina, Backpackr, Fairytrail, Going Solo |
| Locals & Erlebnisse | WithLocals, Showaround, EatWith, BonAppetour, Spotted by Locals |
| Solo & Frauen-Safety | NomadHer, WanderSafe, Solo Female Traveler Network |
| Digital Nomad | Nomads.com (NomadList), Nomadago |
| Hostel-Community | Hostelworld Social, Couchsurfing Hangouts |
| Ridesharing | BlaBlaCar |
| House Swap | HomeExchange |
| Volunteer | Workaway, WWOOF, Worldpackers |
| Sprach-Austausch | Tandem, HelloTalk, Idyoma |
| Pub Crawl | PubCrawl App, Your Pub Crawl, Bar-Trek |
| Itinerary Sharing | Itinsy, Travaa, Tripcast |
| AR/VR | 3DVista, AirPano, Matterport, VirtualTourEasy |
| Accessibility | AccessNow, Wheelmap, iAccessLife |
| Familie & Kinder | GoWhee |
| Haustier | BringFido |
| Nachhaltigkeit | Staze, BookDifferent, Glooby, FairTrip, myclimate |
| Foto-Spots | Locationscout, Explorest, PhotoHound, PIXEO |
| Kochkurse | Cookly, Cozymeal, Traveling Spoon |
| Wellness | Spavelous, Health Travel |
| Loyalty-Tracking | AwardWallet, Point.me, TripIt Pro |
| Allergiekarten | Equal Eats, Food Allergy App, AskAllergies |
| Miet-Dokumentation | Proofr, Record360, Inspctr |
| Gamification | Travel Bingo, Competitours, Travel List Challenge |
| Zeitkapsel | TimeLock, Memory-Capsule, TimeCapsules |

---

## 3. Reise-Management & Administration

### 3.1 Reisen als Projekte
- Neue Reise anlegen wie ein Workspace/Projekt (ähnlich Notion/Linear)
- Reise-Dashboard als Startseite nach Login
- Mehrere Reisen parallel verwalten (vergangene, aktuelle, zukünftige)
- Reisen archivieren (abgeschlossen, aber noch einsehbar)
- Reise duplizieren als Vorlage für ähnliche Trips
- Reise-Templates: Vorlagen für häufige Reisetypen (Städtetrip, Strandurlaub, Roadtrip, Backpacking)

### 3.2 Ownership & Rollen
- **Owner**: Ersteller der Reise, volle Kontrolle, kann nicht entfernt werden
- **Admin**: Vom Owner ernannt, kann fast alles bearbeiten (außer Owner entfernen/Reise löschen)
- **Mitglied**: Normaler Teilnehmer, kann eigene Daten bearbeiten, abstimmen, Ausgaben eintragen
- **Gast**: Nur-Lese-Zugriff — kann sich die Reise anschauen (z.B. jemand der noch überlegt)
- **Interessent**: Hat den Einladungslink, sieht eine Vorschau, kann sich selbst zum Mitglied machen

### 3.3 Zugriffssteuerung
- Granulare Berechtigungen pro Modul (z.B. Budget nur für Admins sichtbar)
- Bestimmte Bereiche sperren (z.B. Überraschungsaktivität vor einzelnen Teilnehmern verstecken)
- Bearbeitungssperre für abgeschlossene Entscheidungen
- Aktivitätslog: Wer hat wann was geändert (Audit Trail)

### 3.4 Einladungssystem
- Einladung per Link (teilbar via Messenger, E-Mail, Social Media)
- Einladung per E-Mail (direkte Benachrichtigung)
- Einladung per QR-Code (für persönliche Treffen)
- Einladungslink mit Ablaufdatum
- Einladungen widerrufen
- Beitrittsanfrage: Jemand kann den Link haben, muss aber vom Admin bestätigt werden

### 3.5 Reise-Settings
- Reisename, Beschreibung, Titelbild
- Zielort(e) — ein oder mehrere Destinationen (Roundtrip-fähig)
- Zeitraum (Von–Bis, flexibel oder fix)
- Teilnehmeranzahl (dynamisch, nicht hardcoded)
- Währung (Hauptwährung + Multi-Währung-Support)
- Sprache der Oberfläche
- Zeitzone(n) des Reiseziels
- Benachrichtigungs-Einstellungen (was löst Notifications aus)
- Datenschutz-Einstellungen (öffentlich, nur mit Link, privat)

### 3.6 Benutzer-Accounts & Profile
- Registrierung/Login (E-Mail, Google, Apple, GitHub)
- Persönliches Profil mit:
  - Name, Profilbild, Kontaktdaten
  - Fähigkeiten & Qualifikationen (Führerschein, Bootsschein, Sprachen, Ersthelfer, etc.)
  - Ernährungsgewohnheiten (vegan, Allergien, Unverträglichkeiten)
  - Reise-Präferenzen (Frühaufsteher/Langschläfer, Budget-Niveau, Aktivitätslevel)
  - Notfallkontakt
  - Reisepass-Infos (optional, verschlüsselt)
- Profilinfos werden reise-übergreifend gespeichert, müssen nicht jedes Mal neu eingegeben werden

---

## 4. Reise-Lifecycle — Alle Features nach Phase

---

### Phase 1: Inspiration & Ideenfindung

> *"Lass mal irgendwo hinreisen!" — Vom Tagtraum zum konkreten Vorschlag.*

#### Destination Discovery
- Weltkarte mit Reise-Inspiration (Regionen anklicken, Highlights sehen)
- Zufällige Destination vorschlagen ("Überrasch mich!")
- Filter: Budget, Klima, Reisezeit, Entfernung, Visum-frei, Sicherheitslage
- Saisonaler Empfehlungs-Algorithmus (beste Reisezeit pro Destination)
- "Trending Destinations" basierend auf Community-Daten

#### Ideensammlung
- Ideenwand/Moodboard (wie Miro/Pinterest) — Bilder, Links, Texte pinnen
- Links von Instagram, TikTok, YouTube, Blogs einfügen — automatische Vorschau
- Screenshot-Upload mit AI-Erkennung (wie FlowTrip): Foto hochladen → Tool erkennt Ort/Hotel/Restaurant
- Upvote/Downvote auf Ideen
- Kategorien: Destination, Aktivität, Restaurant, Unterkunft, Sonstiges
- Kommentare auf Ideen

#### Bucket Lists
- Persönliche & Gruppen-Bucketlists
- "Ich will unbedingt X machen" — jeder kann seine Must-Haves eintragen
- Matching-Algorithmus: Zeigt Überschneidungen der Wünsche

#### Inspiration-Feed
- Kuratierte Reise-Inhalte basierend auf gewählter Destination
- Reiseberichte anderer Nutzer (optional, Community-Feature)
- Blog-/Video-Aggregation zur Destination

---

### Phase 2: Gruppe bilden & Rahmenbedingungen klären

> *"Wer kommt mit? Wann können alle?" — Von der Idee zur konkreten Planung.*

#### Gruppenverwaltung
- Teilnehmer einladen (Link, E-Mail, QR-Code)
- Teilnehmerstatus: Zugesagt, Vielleicht, Abgesagt
- Warteliste (falls Gruppengröße begrenzt)
- Teilnehmer können sich selbst austragen
- Gruppen-Chat innerhalb der Reise

#### Verfügbarkeits-Findung
- Kalender-Heatmap: Jeder markiert seine verfügbaren Tage (wie When2Meet)
- Automatische "Bester Zeitraum"-Erkennung (maximale Überschneidung)
- Externe Kalender importieren (Google Calendar, Apple Calendar, Outlook)
- Flexible vs. fixe Teilnahme (jemand kommt nur die ersten 5 Tage)
- Teilzeitraum-Unterstützung: Nicht jeder muss den gesamten Zeitraum dabei sein

#### Abstimmungen & Entscheidungen
- **Ranked Choice / Borda Count**: Top 3 wählen (z.B. für Unterkünfte)
- **Ja/Nein-Abstimmung**: Daumen hoch/runter (z.B. "Wollen wir X machen?")
- **Multi-Choice Polls**: Mehrere Optionen, eine Stimme pro Person
- **Gewichtete Abstimmung**: Punkte verteilen (z.B. 10 Punkte auf Optionen verteilen)
- **Anonyme Abstimmung**: Optional
- **Deadline für Abstimmungen**: Automatische Erinnerung
- **Ergebnis-Visualisierung**: Balkendiagramme, Ranglisten, Medaillen
- **Entscheidungs-Log**: Abgeschlossene Abstimmungen archivieren mit Ergebnis

#### Gruppen-Profile & Anforderungen
- Übersicht aller Teilnehmer-Profile (Fähigkeiten, Einschränkungen, Präferenzen)
- Automatische Zusammenfassung: "2 Vegetarier, 3 Führerschein-Besitzer, 1 spricht Italienisch"
- Gemeinsame Reise-Präferenzen definieren (Budget-Rahmen, Aktivitätslevel, Unterkunftstyp)

---

### Phase 3: Recherche & Buchung

> *"Wo schlafen wir? Wie kommen wir hin?" — Vergleichen, abstimmen, buchen.*

#### Unterkünfte
- Unterkünfte sammeln und vergleichen (Preis, Lage, Bewertung, Features)
- Vergleichstabelle mit Sortierung & Filter
- Kartenansicht (Leaflet/Mapbox) mit allen Optionen
- Pro-/Contra-Listen pro Unterkunft
- Stornierungsbedingungen auf einen Blick
- Direkt-Links zu Buchungsportalen (Airbnb, Booking.com, VRBO)
- Abstimmung: Ranked Choice über Favoriten
- Kommentare & Diskussion pro Unterkunft
- Buchungsstatus: Offen → Option → Gebucht
- Check-in/Check-out Zeiten, Adresse, Kontaktdaten, WLAN-Passwort
- Zimmeraufteilung (wer schläft wo) — wie AvoSquado
- Fotos & Grundriss hochladen

#### Flüge & Anreise
- Flugoptionen sammeln und vergleichen
- Pro-Person oder Gruppen-Flüge
- Hin- und Rückflug separat
- Flugdetails: Airline, Flugnummer, Zeiten, Dauer, Umsteiger, Gepäck
- Preisvergleich mit Highlight des günstigsten
- Buchungsstatus pro Person
- Direkt-Links zu Skyscanner, Kayak, Google Flights
- Boarding-Pass Upload/Speicher
- Flugstatus-Tracking (Verspätung, Gate-Änderung)
- Alternative Anreise: Zug, Bus, Auto, Fähre
- Anreise-Zeitstrahl: Wer kommt wann an, wer fliegt wann ab
- Individuelle Anreise: Nicht jeder muss gleich reisen

#### Mietwagen & Transport
- Mietwagen-Vergleich (Kategorie, Versicherung, Extras, Preis)
- Fahrer-Profile: Wer hat Führerschein, wer fährt gerne
- Kosten-Splitter: Mietwagen + Sprit + Maut ÷ Personen
- ÖPNV-Info zur Destination (Trenitalia, Bus, Metro, etc.)
- Taxi/Uber-Optionen
- Flughafen-Transfer planen
- Carsharing innerhalb der Gruppe (wer fährt wann wohin)
- Parkplatz-Infos zu Unterkünften & Aktivitäten

#### Aktivitäten & Erlebnisse
- Aktivitäten sammeln mit Kategorien (Sightseeing, Strand, Restaurant, Sport, Natur, Kultur, Nachtleben)
- Prioritäten: Must-Do, Nice-to-Have, Vielleicht
- Kartenansicht aller Aktivitäten
- Öffnungszeiten, Preise, Dauer, Entfernung
- Direkt-Links zu Booking-Portalen (Viator, GetYourGuide)
- Bewertungen & Rezensionen anzeigen
- Vorschläge basierend auf Destination (AI oder kuratiert)
- Abstimmung über Aktivitäten
- Lokale Spezialitäten & Food-Guide

#### Multi-City & Rundreise-Planung

> *Optional: Nicht nur ein Ort, sondern mehrere Stops — mit unterschiedlichen Start- und Endpunkten.*

**Reiseroute definieren**
- **Linearer Trip**: A → B → C → D (z.B. Rom → Neapel → Sizilien → Malta)
- **Hub-and-Spoke**: Basis an einem Ort, Tagesausflüge sternförmig (z.B. Palermo als Basis, Ausflüge nach Cefalù, Agrigent, Ätna)
- **Rundreise**: A → B → C → A (zurück zum Start)
- **Open-Jaw**: Hinflug nach A, Rückflug von C (verschiedene Start-/Endpunkte)
- **Kombination**: Einige Teilnehmer fliegen von Berlin, andere von München — Treffpunkt in Rom
- Visuell auf Karte: Route mit farbcodierten Linien (blau = Flug, lila = Zug, orange = Auto, grün = Fahrrad, rot gestrichelt = Fuß)
- Nummerierte Stops in Reihenfolge
- Route jederzeit umordnen (Drag & Drop der Stops)

**Pro-Stop-Planung**
- Jeder Stop hat: Ort, Ankunftsdatum, Abreisedatum, Unterkunft, geplante Aktivitäten
- Tage pro Stop zuweisen (z.B. 3 Tage Rom, 2 Tage Neapel, 5 Tage Sizilien)
- Transport zwischen Stops: Flug, Zug, Bus, Fähre, Auto — mit Dauer & Kosten vergleichen
- Unterkunft pro Stop separat planen & buchen
- Gepäck-Logistik: Was muss mit, was kann in der ersten Unterkunft bleiben

**Routenoptimierung**
- Automatische Optimierung: Kürzeste/günstigste/schnellste Route durch alle Stops
- "Umwege" erkennen: Warnung wenn Route ineffizient ist
- Reisetage vs. Erlebnistage Balance (nicht nur im Bus/Zug sitzen)
- CO₂-Vergleich pro Transportmittel-Wahl
- Vorschläge für Zwischenstopps ("Auf dem Weg von X nach Y liegt Z — lohnt sich!")

**Verschiedene Start-/Endpunkte pro Person**
- Jeder Teilnehmer kann eigene An-/Abreise definieren
- Visualisierung: Wer ist wann wo (Timeline-Ansicht)
- Teilnehmer die früher/später kommen oder gehen — flexible Überlappung
- Treffpunkt definieren: Wo und wann trifft sich die Gruppe
- Individuelle vs. gemeinsame Legs: Manche Strecken zusammen, manche allein

**Inter-City Transport**
- Vergleich für jedes Leg: Flug vs. Zug vs. Bus vs. Fähre vs. Auto
- Kosten, Dauer, Komfort, CO₂ pro Option
- Links zu Buchungsportalen: Rome2Rio, Trainline, Flixbus, Ferryhopper, Skyscanner
- Fahrpläne & Verbindungen anzeigen
- Fähren für Inselhopping (z.B. Griechenland, Kroatien, Sizilien)
- Eurail/Interrail-Kompatibilität prüfen

**Inselhopping & Fähren**
- Fährverbindungen suchen (Ferryhopper-Integration)
- Insel-zu-Insel-Routen planen (z.B. Liparische Inseln, Ägadische Inseln)
- Fahrpläne, Preise, Dauer pro Verbindung
- Wetter-abhängige Fährausfälle (Wellengang-Warnung)

#### Restaurantplanung
- Restaurants sammeln und vergleichen
- Karte mit allen gespeicherten Restaurants
- Öffnungszeiten, Preisniveau, Küche, Bewertungen
- Reservierungen eintragen (Datum, Uhrzeit, Personenzahl)
- "Heute Abend essen gehen" — Schnell-Abstimmung
- Ernährungspräferenzen der Gruppe berücksichtigen (Filter: vegetarisch-freundlich, etc.)
- Empfehlungen von Locals / Reiseführern

---

### Phase 4: Vorbereitung

> *"Was müssen wir noch erledigen?" — Alles organisieren vor der Abreise.*

#### Aufgaben / To-Do
- Aufgaben erstellen mit Titel, Beschreibung, Kategorie
- Zuständige Person(en) zuweisen
- Status: Offen → In Bearbeitung → Erledigt
- Priorität: Hoch, Mittel, Niedrig
- Deadline mit automatischer Erinnerung
- Kategorien: Unterkunft, Flüge, Transport, Aktivitäten, Dokumente, Versicherung, Packen, Sonstiges
- Filter & Sortierung (meine Aufgaben, alle, nach Status, nach Deadline)
- Übersicht: Offene Aufgaben, Überfällige, Fortschrittsbalken
- Vorlagen: Automatisch generierte Standard-To-Dos für Reisetyp

#### Packliste
- **Gemeinsame Packliste**: Was muss die Gruppe zusammen mitnehmen (Erste-Hilfe, Adapter, Sonnencreme XXL)
- Verantwortlich: Wer bringt was mit
- **Persönliche Packliste**: Pro Person, in Kategorien (Kleidung, Hygiene, Elektronik, Dokumente, Strand, etc.)
- Intelligente Vorschläge basierend auf Destination, Wetter, Aktivitäten (wie PackPoint)
- Fortschrittsbalken: X% gepackt
- Items abhaken
- Packlisten-Templates (Strandurlaub, Städtetrip, Wanderurlaub, Winter, etc.)
- "Pack Light"-Modus: Minimalistische Vorschläge
- Wäsche-Feature: Weniger einpacken, wenn Waschmaschine vorhanden

#### Dokumente & Versicherung
- Checkliste: Personalausweis, Reisepass, Visum, Führerschein, Impfpass, Krankenversicherung
- Status pro Person: Vorhanden / Fehlt / Abgelaufen
- Dokumente hochladen (verschlüsselt): Reisepass-Kopie, Buchungsbestätigungen, Versicherungspolice
- Ablaufdatum-Warnungen (Reisepass läuft vor Reise ab!)
- Visum-Infos zur Destination (brauche ich eins? welches?)
- Reiseversicherungs-Vergleich & Empfehlungen
- Dokumente teilen mit der Gruppe (Buchungsbestätigungen, Voucher)

#### Reise-Infos & Länder-Guide
- Automatisch generierte Infos zur Destination:
  - Währung & aktueller Wechselkurs
  - Steckdosentyp & Adapter-Bedarf
  - Trinkgeld-Kultur
  - Wichtige Telefonnummern (Notruf, Botschaft)
  - Zeitzone & Zeitverschiebung
  - Sprache & wichtige Phrasen
  - Kulturelle Besonderheiten & Etikette
  - Klima & Durchschnittstemperaturen zur Reisezeit
  - Einreisebestimmungen
  - Leitungswasser trinkbar?
  - SIM-Karte / Roaming-Infos
  - Feiertage während des Aufenthalts

#### Budget-Vorplanung & Kostenschätzung

> *"Was wird die Reise insgesamt kosten?" — Bevor man bucht, den Überblick haben.*

- **Gesamtkosten-Schätzung** vor jeder Buchung: Flüge + Unterkunft + Transport + Essen + Aktivitäten + Versicherung + Visa + Impfungen
- Kosten pro Person vs. Gesamtkosten
- Vergleich: Budget-Variante vs. Komfort-Variante vs. Luxus-Variante
- Tagesbudget berechnen (Gesamtbudget ÷ Reisetage)
- **Preisalerts**: Benachrichtigung wenn Flug-/Hotel-Preise sinken
- Preis-Tracking über Zeit (Graph: War der Flug letzte Woche günstiger?)
- "Jetzt buchen oder warten?"-Empfehlung basierend auf historischen Preisdaten
- Alle Buchungskosten zentral tracken (was ist schon bezahlt, was noch offen)

#### Visa-Tracking & Einreise

> *"Brauche ich ein Visum? Ist mein Pass noch gültig?"*

- Automatischer Visa-Check basierend auf Nationalität + Zielland
- Visum-Antragsschritte mit Timeline (wann beantragen, wie lange dauert es)
- Status-Tracking: Beantragt → In Bearbeitung → Genehmigt
- Erinnerung wenn Visum-Beantragung fällig wird (basierend auf Reisedatum)
- Reisepass-Gültigkeit prüfen (viele Länder: mind. 6 Monate Restgültigkeit!)
- Internationaler Führerschein: Brauche ich einen? Wo beantragen?
- Minderjährigen-Reiseerlaubnis: Einverständniserklärung bei Kindern ohne beide Eltern

#### Stornierungsfristen-Tracker

> *"Bis wann kann ich kostenlos stornieren?"*

- **Alle Buchungen mit Stornierungsfrist** auf einen Blick
- Timeline: Wann laufen welche Fristen ab
- Push-Notification X Tage vor Ablauf
- Unterscheidung: Kostenlose Stornierung, Teilerstattung, Keine Erstattung
- Was ist von der Reiseversicherung abgedeckt vs. nicht
- Alle Buchungsbestätigungen mit Storno-Bedingungen zentral gespeichert

#### Zuhause-Vorbereitung

> *"Alles erledigt bevor es losgeht?"*

- **Checkliste**: Was muss zuhause organisiert werden vor der Abreise
  - Haustier-Betreuung organisieren (Tiersitter, Tierpension)
  - Pflanzen gießen lassen (Nachbar, Timer-System)
  - Post anhalten / Briefkasten leeren lassen
  - Müll rausbringen
  - Kühlschrank leeren (Verderbliches)
  - Fenster schließen, Heizung/Klimaanlage anpassen
  - Alarmanlage aktivieren
  - Zeitschaltuhren für Licht (Einbruchschutz)
  - Wertsachen sichern
  - Wasserhähne zudrehen (bei längerer Abwesenheit)
  - Nachbarn informieren
- Zuständigkeit zuweisen (wer kümmert sich um was)
- Status-Tracking: Erledigt / Noch offen
- Kontaktdaten hinterlegen (Tiersitter-Nummer, Nachbar)

#### Arbeit & Übergabe

> *"Out of Office ist eingerichtet?"*

- **Abwesenheits-Checkliste**: Was muss beruflich erledigt werden
  - Out-of-Office einrichten (E-Mail, Teams/Slack)
  - Vertretung briefen
  - Übergabe-Dokument erstellen
  - Laufende Projekte übergeben
  - Kunden/Partner informieren
  - Wichtige Termine verschieben
- Erinnerungen: X Tage vor Abreise
- Template für Übergabe-Notizen

#### Flughafen-Vorbereitung

> *"Wann müssen wir los? Gibt's ne Lounge?"*

- **Flughafen-Anfahrt planen**: Wann losfahren (Fahrzeit + Puffer + Check-in-Zeit)
- Parkplatz am Flughafen reservieren (Preisvergleich: Flughafen-Parking vs. Off-Airport)
- Terminal & Gate vorab checken
- Terminal-Map: Wo ist Check-in, Security, Gate, Lounges
- **Lounge-Zugang**: Welche Lounges verfügbar (Priority Pass, Kreditkarte, Airline-Status)
- Gruppen-Sitzplatz-Koordination: Zusammen sitzen im Flugzeug (Seat-Map, gemeinsam buchen)
- Gepäck-Regeln der Airline (Gewicht, Maße, Handgepäck)
- Was darf nicht ins Handgepäck (Flüssigkeiten, Powerbanks, etc.)

#### Layover-Planung

> *"4 Stunden Aufenthalt in Istanbul — was machen?"*

- Automatische Erkennung von Layovers aus Flugdaten
- Layover-Dauer → Vorschläge:
  - < 2h: Am Gate bleiben, Lounge suchen
  - 2-4h: Flughafen erkunden, Shopping, Essen
  - 4-8h: Eventuell Flughafen verlassen? (Visa-Check!)
  - 8h+: City-Tour, Gepäck-Aufbewahrung, Sehenswürdigkeiten
- Visa-frei Transit-Regeln pro Land
- Gepäck-Aufbewahrung am Flughafen
- Transport vom Flughafen in die Stadt und zurück
- "Lohnt es sich den Flughafen zu verlassen?"-Empfehlung

#### Gruppen-Regeln & Erwartungen

> *"Worauf einigen wir uns vorab?"*

- **Reise-Vereinbarung**: Digitaler "Vertrag" über Gruppen-Erwartungen
  - Budget-Rahmen (pro Tag, gesamt)
  - Aktivitätslevel (chillig vs. aktiv)
  - Schlafenszeiten-Kultur (Frühaufsteher vs. Langschläfer)
  - Alkohol/Party-Level
  - Allein-Zeit vs. Gruppen-Zeit
  - Wie werden Entscheidungen getroffen (Mehrheit, Konsens, Rotation)
  - Kosten-Split-Regeln (gleich, nach Konsum, nach Einkommen)
- Alle Mitglieder bestätigen die Vereinbarung
- Kompatibilitäts-Check: Wo passen die Erwartungen, wo gibt es Differenzen
- Konfliktvermeidung: Potenzielle Spannungspunkte identifizieren

#### Reise-Countdown

> *"Noch 47 Tage!"*

- Visueller Countdown bis zur Abreise
- Automatisch generierte Meilensteine ("Noch 30 Tage — Zeit Packliste zu starten!")
- Fortschrittsbalken: Wie viel % der Vorbereitung erledigt
- Motivations-Element: Countdown-Widget auf dem Dashboard
- Erinnerungen basierend auf Countdown (60 Tage: Visa, 30 Tage: Packen, 7 Tage: Check-in, 1 Tag: Zuhause-Check)

#### Mitbringsel & Souvenir-Planung

> *"Was bringe ich Oma mit?"*

- Geschenke-Liste: Für wen mitbringen, Budget pro Person
- Lokale Souvenir-Empfehlungen pro Destination (typische Mitbringsel)
- Zollfreigrenzen: Was darf ich mitbringen? (EU: 430€, Alkohol-Limits, Tabak-Limits)
- Verbotene Einfuhr: Was darf NICHT mitgebracht werden (Lebensmittel, Pflanzen, Fälschungen)
- Duty-Free-Info: Was lohnt sich am Flughafen
- Fotos von gesehenen Items speichern ("Das hier für Papa?")

#### Fitness & Vorbereitung

> *"Schaffe ich die 8-Stunden-Wanderung zum Ätna?"*

- Geplante Aktivitäten analysieren → Fitness-Empfehlung
- Trainingsplan vorschlagen (z.B. 4 Wochen Wandertraining vor der Reise)
- Höhenakklimatisierung bei Bergtouren
- Hinweis bei anspruchsvollen Aktivitäten ("Diese Wanderung ist als schwer eingestuft")

---

### Phase 5: Während der Reise

> *"Was machen wir heute?" — Tagesplanung, Navigation, Kosten, Kommunikation.*

#### Morgen-Routine & Tagesstart

> *Der perfekte Start in jeden Reisetag.*

- **Morgen-Dashboard**: Wetter, Tagesprogramm, offene Aufgaben — alles auf einen Blick
- "Was ziehe ich an?"-Empfehlung basierend auf Wetter + geplante Aktivitäten
- **Tagesrucksack-Checkliste**: Was muss heute mit? (Abhängig von Aktivitäten)
  - Strand: Sonnencreme, Handtuch, Badehose, Snacks, Wasser
  - Wanderung: Feste Schuhe, Wasser, Snacks, Regenjacke, Powerbank
  - City-Tour: Kamera, bequeme Schuhe, Stadtplan offline, Regenschirm
  - Restaurant: Passende Kleidung, Reservierungsbestätigung
- Sonnenaufgang/Sonnenuntergang-Zeiten (für Fotografie & Planung)
- Zeitzone-Anzeige (Heimat vs. Reiseziel — besonders bei Jetlag)

#### Tagesplaner
- Tag-für-Tag-Übersicht des gesamten Reisezeitraums
- Zeitslots pro Tag: Morgens, Mittags, Nachmittags, Abends
- Mahlzeiten planen: Frühstück, Mittagessen, Abendessen
- Aktivitäten per Drag & Drop in Slots ziehen
- Automatische Distanz- & Zeitberechnung zwischen Aktivitäten
- Wetter-Vorschau pro Tag
- Mini-Kalender zur schnellen Navigation
- Tagesplan teilen / exportieren
- Flexible Tage vs. durchgeplante Tage
- "Heute"-Ansicht mit aktuellem Tagesprogramm prominent
- **Crowd-Vorhersage**: Beste Besuchszeiten für Attraktionen (wann wenig los)
- **Öffnungszeiten-Check**: Warnung wenn Attraktion heute geschlossen (Feiertag, Ruhetag, Renovierung)
- Puffer-Zeit automatisch einplanen zwischen Aktivitäten
- "Alternativ-Plan" bei schlechtem Wetter (Indoor-Optionen)

#### Navigation & Routen
- Karte mit allen relevanten Punkten (Unterkunft, Aktivitäten, Restaurants)
- Route berechnen: Auto, ÖPNV, Fuß, Fahrrad
- Fahrzeit & Entfernung zwischen Punkten
- Multi-Stop-Routenplanung (Tagesroute optimieren)
- ÖPNV-Fahrpläne & Ticketpreise
- Offline-Karten für Gebiete ohne Netz
- Integration mit externen Karten-Apps (Google Maps, Apple Maps, Waze)
- Parkplatz-Finder
- "Wie komme ich vom Flughafen zur Unterkunft?" — automatischer Vorschlag

#### Kosten & Ausgaben
- **Ausgaben erfassen**: Wer hat was bezahlt, für wen
- Kategorien: Restaurant, Supermarkt, Transport, Eintritt, Unterkunft, Sonstiges
- Kamera/Foto: Beleg fotografieren
- **Automatische Schuldenberechnung**: Wer schuldet wem wie viel
- **Minimale Transaktionen**: Algorithmus berechnet optimale Ausgleichszahlungen
- **Gruppen- vs. Einzel-Ausgaben**: Gemeinsame Kosten fair aufteilen
- **Ungleiche Splits**: Nicht jeder muss gleich viel zahlen (z.B. Kind zahlt weniger)
- **Multi-Währung**: Ausgabe in Fremdwährung, automatische Umrechnung
- Echtzeit-Wechselkurse
- Ausgaben-Diagramme: Donut-Chart (Kategorien), Balkendiagramm (pro Tag), Verlauf
- Budget-Limit mit Warnung bei Überschreitung
- "Wer zahlt?"-Zufallsgenerator mit Fairness-Counter
- Export als CSV/PDF
- Trinkgeld-Rechner mit lokalen Empfehlungen
- Vorgeschossene Kosten markieren (z.B. Unterkunft schon vor der Reise bezahlt)
- Settlement am Ende: Übersichtliche Abrechnung

#### Kommunikation
- Gruppen-Chat innerhalb der Reise
- Themen-Channels (z.B. #essen, #aktivitäten, #organisatorisches)
- @Mentions für einzelne Personen
- Schnell-Abstimmungen im Chat ("Pizza oder Pasta heute?")
- Push-Notifications für wichtige Updates
- Standort teilen (Live Location) — optional, Datenschutz-bewusst
- "Ich bin in 10 Min da" — Quick-Status-Messages
- Sprachnachrichten

#### Strand- & Meer-Bedingungen

> *"Guter Strandtag heute?"*

- **Gezeiten-Info**: Ebbe/Flut-Zeiten am nächsten Strand
- Wellenhöhe & Wellenrichtung
- Wind-Stärke & Richtung
- Wassertemperatur (aktuell)
- Strömungswarnungen
- Quallen-/Seeigel-Warnungen (saisonbedingt)
- Strandqualität-Bewertungen (Sauberkeit, Infrastruktur)
- Nächster bewachter Strand

#### Events & Nachtleben

> *"Was geht heute Abend?"*

- **Lokale Events heute**: Konzerte, Festivals, Märkte, Ausstellungen, Sport
- Happy-Hour-Finder: Welche Bars/Restaurants haben gerade Angebote
- **Nachtleben-Guide**: Clubs, Bars, Live-Musik in der Umgebung
- Dress-Code-Info pro Location
- Eintrittspreise & Reservierungen
- Sichere Gebiete für Nachtleben (Sicherheits-Bewertung)
- Taxi/Uber nach Hause planen (Verfügbarkeit, geschätzte Kosten)
- "Was ist typisch hier?" — Lokale Abend-Empfehlungen (Aperitivo in Italien, Tapas in Spanien, etc.)

#### Scam-Warnungen & lokale Tipps

> *"Aufpassen bei..."*

- **Bekannte Betrugsmaschen** in der Region (Taschendiebstahl-Hotspots, Taxi-Abzocke, Restaurant-Tricks)
- Farbcodierte Scam-Heatmap auf der Karte
- "Dos and Don'ts" pro Destination
- Handeln & Verhandeln: Wo ist es üblich, wo nicht
- Touristenfallen: Wo zahlt man zu viel, bessere Alternativen
- Community-Meldungen: Andere Reisende warnen vor aktuellen Vorfällen

#### Wetter
- Wetter-Vorschau für Zielort(e) — 14-Tage und aktuell
- Stündliche Vorhersage für den aktuellen Tag
- Wetter-Widgets auf dem Dashboard & im Tagesplaner
- UV-Index, Regen-Wahrscheinlichkeit, Wind, Wassertemperatur
- "Heute besser Indoor-Aktivität?" — Automatische Empfehlungen bei schlechtem Wetter
- Wetter-basierte Packlisten-Anpassung ("Regenjacke einpacken!")
- **Sonnenschutz-Timer**: Erinnerung zum Nachcremen basierend auf UV-Index & Hauttyp
- **Hydrations-Reminder**: Bei Hitze (>30°C) automatische Trink-Erinnerung

#### Einkaufszettel & Gruppen-Shopping

> *"Wir brauchen noch Wasser, Sonnencreme und Snacks für morgen."*

- **Gemeinsame Einkaufsliste**: Real-time sync — jeder sieht sofort neue Items
- Automatische Kategorisierung: Lebensmittel, Getränke, Hygiene, Strand, Haushalt
- Items per Foto hinzufügen (Barcode scannen oder Produktfoto)
- Zuständigkeit zuweisen: Wer kauft ein?
- Erledigte Items abhaken (sichtbar für alle)
- Mehrere Listen parallel: "Täglicher Einkauf", "Großeinkauf Tag 1", "Strandtag-Bedarf"
- Preise eintragen (fließt direkt in Ausgaben-Tracking)
- Geofencing: Erinnerung wenn man am Supermarkt vorbeikommt ("Du bist beim Lidl — Einkaufsliste hat 5 offene Items!")
- Wiederkehrende Items: Wasser, Brot, Obst — automatisch auf neue Liste setzen
- Vorschläge basierend auf Mahlzeitenplanung & Gruppengröße

#### Gruppen-Mahlzeitenplanung

> *"Wer kocht heute? Was essen wir?"*

- Frühstück/Mittag/Abendessen pro Tag planen
- Optionen: Selbst kochen, Restaurant, Imbiss, Picknick, Auswärts
- Wer kocht: Zuweisung oder Rotation
- Rezeptvorschläge für die Gruppe (basierend auf Allergien/Präferenzen)
- Zutaten automatisch auf Einkaufsliste setzen
- "Heute Abend essen gehen?" — Schnell-Abstimmung mit Restaurant-Vorschlägen
- Budget pro Mahlzeit tracken

#### Sprache & Übersetzung

> *"Come si dice...?" — Nie sprachlos im Ausland.*

**Wörterbuch & Phrasen**
- Wichtigste Reise-Phrasen für Zielland (automatisch zur Destination)
- Kategorien: Begrüßung, Restaurant, Einkaufen, Notfall, Transport, Smalltalk, Zahlen
- Audio-Aussprache von Muttersprachlern
- Favoriten markieren & eigene Phrasen hinzufügen
- Offline verfügbar (alles lokal gespeichert)
- Lernmodus: Phrasen vor der Reise üben (Spaced Repetition)

**Live-Übersetzung**
- Kamera-Übersetzung: Speisekarte, Schilder, Tickets fotografieren → sofortige Übersetzung
- Text-Übersetzung: Tippen oder Einfügen → übersetzen
- Konversations-Modus: Zwei-Wege-Live-Übersetzung (Gerät zwischen sich und Gegenüber halten)
- Offline-Übersetzung: Sprachpakete herunterladen für Gebiete ohne Internet
- Verlauf: Letzte Übersetzungen speichern (häufig gebrauchte Sätze wiederfinden)

**Lokales Vokabular**
- Regionale Besonderheiten (Dialekte, lokale Ausdrücke)
- Speisekarten-Decoder: Typische Gerichte der Region erklärt
- Kulturelle Phrasen: Höflichkeitsformen, Trinkgeld-Formulierung, Taxi-Verhandlung
- "Ich bin allergisch gegen..." in der Landessprache (fertige Karte zum Vorzeigen)

#### Lokale Dienste & Amenities finden

> *Das Alltägliche im Ausland — Toiletten, Waschsalons, Apotheken, Geldautomaten.*

- **Toiletten-Finder**: Nächste öffentliche Toilette (Gebühr, Barrierefreiheit, Bewertung)
- **Geldautomat/ATM**: Nächster ATM, Gebühren-Info, Akzeptierte Karten
- **Apotheke**: Nächste Apotheke, Öffnungszeiten, Notdienst
- **Krankenhaus/Arzt**: Nächste medizinische Versorgung, Sprachen die gesprochen werden
- **Waschsalon/Wäscheservice**: Nächster Laundromat, Pickup-Services, Preise
- **Supermarkt**: Nächste Einkaufsmöglichkeit, Öffnungszeiten (Sonntags?)
- **WiFi-Hotspots**: Nächstes kostenfreies WLAN (Café, öffentlich, Hotel)
- **Tankstelle**: Nächste Tankstelle, Spritpreise
- **Post**: Nächstes Postamt (Postkarten versenden!)
- **Botschaft/Konsulat**: Nächste diplomatische Vertretung des Heimatlandes
- **Polizeistation**: Nächste Polizeidienststelle
- Alles auf Karte mit Entfernung und Weg dahin
- Offline-Daten für Kernservices (Krankenhaus, Polizei, Botschaft)

#### Konnektivität & eSIM

> *Online bleiben — auch im Ausland.*

- **eSIM-Empfehlungen**: Beste eSIM-Anbieter für Zielland (Airalo, Nomad, Saily, Holafly)
- Preisvergleich: Datenvolumen, Laufzeit, Geschwindigkeit
- Setup-Anleitung pro Anbieter
- **WiFi-Karte**: Kostenlose & öffentliche Hotspots in der Umgebung
- **Roaming-Infos**: EU-Roaming-Regeln, Kosten außerhalb EU
- **VPN-Empfehlung**: Für sicheres Surfen in öffentlichen Netzen
- **Offline-Modus Vorbereitung**: Checkliste was vorher herunterladen (Karten, Sprachpakete, Tagesplan)

#### Währungsrechner & Trinkgeld

> *"Wie viel ist das in Euro? Und wie viel Trinkgeld?"*

- **Live-Währungsrechner**: Echtzeit-Kurse, schnelle Umrechnung
- Favorisierte Währungspaare (z.B. EUR ↔ lokale Währung)
- Historischer Kursverlauf (bester Zeitpunkt zum Tauschen)
- **Trinkgeld-Rechner**: Landesspezifische Empfehlung (% + Betrag)
- Rechnungssplitter: Rechnung + Trinkgeld ÷ Personen
- Barcode/QR: Lokale Zahlungsmethoden erkennen
- "Wie bezahlt man hier?": Bargeld vs. Karte vs. Mobile Payment — Empfehlung pro Land

#### Gesundheit & Medikamente

> *Gesund bleiben während der Reise.*

- **Medikamenten-Erinnerung**: Tägliche Reminder (Malaria-Prophylaxe, Blutdrucktabletten, etc.)
- **Impf-Tracker**: Welche Impfungen habe ich, welche fehlen für die Destination
- **Reiseapotheke-Checkliste**: Empfohlene Medikamente für Zielland
- **Symptom-Tracker**: Wie geht's mir heute? (bei Magen-Darm-Problemen, Sonnenstich, etc.)
- **Allergiepass**: In Landessprache — zum Vorzeigen im Restaurant
- **Telemedicine**: Arzt-Kontakt aus der Ferne (via Sitata o.ä.)
- **Nächstes Krankenhaus**: Ein-Tap-Zugriff auf nächste medizinische Versorgung
- **Sonnenbrand-Timer**: UV-Index-basierte Empfehlung, wann nachcremen
- **Hydrations-Reminder**: Bei Hitze regelmäßig trinken erinnern

#### Reise-Tagebuch & Auto-Tracking

> *Die Reise festhalten — automatisch und manuell.*

- **Automatisches GPS-Tracking**: Route wird im Hintergrund aufgezeichnet (wie Polarsteps)
- Visualisierung: Animierte Route auf der Karte (wo waren wir überall)
- **Tägliche Journal-Einträge**: Text, Fotos, Videos zu jedem Tag
- Geotagging: Automatischer Ort zu jedem Eintrag
- Wetter-Daten automatisch hinzufügen
- **Highlight-Marker**: "Das war ein besonderer Moment" — auf der Karte markieren
- Gemeinsames Gruppen-Tagebuch: Jeder kann beitragen
- Am Ende der Reise: Zusammenfassung als Fotobuch/PDF exportieren
- Reise-Statistiken: Gesamtstrecke, besuchte Orte, Höhenmeter, Schritte
- Privacy-Control: Tracking jederzeit an/aus, Daten nicht öffentlich

#### Gepäck-Aufbewahrung

> *"Wir haben ausgecheckt, aber der Flieger geht erst um 20 Uhr."*

- Nächste Gepäck-Aufbewahrung finden (Schließfächer, Services wie Bounce/LuggageHero)
- Preise, Öffnungszeiten, Bewertungen
- Am Flughafen, am Bahnhof, in der City
- Reservierung möglich
- Versicherungsschutz der Anbieter

#### Taxi & Ride-Schätzer

> *"Was kostet das Taxi vom Flughafen?"*

- Taxi-Preis-Kalkulator für Zielland (Festpreise, Taxameter-Kultur)
- Uber/Bolt/Lyft Preisschätzung (wo verfügbar)
- Vergleich: Taxi vs. Rideshare vs. ÖPNV für die Strecke
- Trinkgeld-Empfehlung für Taxi
- "Ist Taxameter Standard?" — Warnung wenn Verhandlung nötig
- Flughafen-Festpreise (viele Städte haben fixe Airport-Taxi-Tarife)

#### Jet-Lag-Management

> *"Warum bin ich um 3 Uhr wach?"*

- **Jet-Lag-Rechner**: Basierend auf Zeitverschiebung & Flugrichtung
- Personalisierter Anpassungsplan:
  - Wann Licht suchen / meiden
  - Optimale Schlafens-/Aufstehzeiten
  - Koffein-Timing
  - Melatonin-Empfehlung
- Countdown bis Anpassung ("Noch ~2 Tage bis du akklimatisiert bist")
- Tipp: Ost-Flug härter als West-Flug
- Bei Kurztrips (<3 Tage): "Nicht anpassen, Heimat-Rhythmus beibehalten"

#### Schritt-Zähler & Tages-Statistik

> *"Wir sind heute 18km gelaufen!"*

- Automatischer Schritt-Zähler pro Tag
- Distanz in km
- Kalorien geschätzt
- Vergleich zwischen Reisetagen
- Gruppen-Vergleich (wer am meisten gelaufen — spielerisch)
- Walking-Tour-Tracker: Route auf Karte anzeigen
- Integration mit Apple Health / Google Fit

#### Sicherheits-Check-in

> *"Bin gut angekommen!" — Automatisch oder manuell.*

- **Scheduled Check-ins**: Regelmäßig Familie/Freunde zu Hause informieren
- Automatisch: "Alles ok"-Nachricht zu festgelegten Zeiten
- Manuell: "Bin angekommen" Button nach Ankunft am Ziel
- **SOS-Alarm**: Panik-Button sendet Position + Notfall-Nachricht an hinterlegte Kontakte
- **Inaktivitäts-Alert**: Wenn X Stunden keine Aktivität → automatische Benachrichtigung an Notfallkontakt
- **Standort teilen mit Familie**: Separater Link für Angehörige (nicht die Reisegruppe)

#### Tagesabschluss-Routine

> *"Bevor wir schlafen gehen..."*

- **Ausgaben des Tages loggen**: Erinnerung alle offenen Belege einzutragen
- **Fotos sichern**: Cloud-Backup Erinnerung (WiFi gefunden → jetzt hochladen)
- **Morgen planen**: Kurzer Check was morgen ansteht, Wecker stellen
- **Geräte laden**: Reminder Handy + Powerbank anschließen
- **Tagebuch-Eintrag**: Optional — "Was war heute das Highlight?"
- **Gruppen-Check**: Sind alle zurück? (bei großen Gruppen)
- **Quick-Voting**: "Was machen wir morgen?" — Schnellabstimmung vor dem Schlafen

#### Lost & Found

> *"Ich hab mein Handy im Restaurant liegen lassen!"*

- Letzte bekannte Position eines verlorenen Items (über Bluetooth-Tracker wie AirTag)
- Anlaufstellen für Fundsachen: Polizei, Hotel-Rezeption, Restaurant
- Versicherungs-Info: Was ist abgedeckt bei Verlust/Diebstahl
- Sperr-Nummern: Kreditkarte sperren, SIM sperren (Nummern vorher hinterlegt!)
- Checkliste: Was tun wenn [Handy/Wallet/Pass] verloren

#### Live-Features
- Gruppen-Standort auf Karte (opt-in, Datenschutz-bewusst)
- "Treffpunkt setzen" — Pin auf Karte mit Uhrzeit
- Countdown zu nächster Aktivität
- "Sammelpunkt"-Feature für große Gruppen
- "Ich bin zurück im Hotel" — Status-Update
- Entfernungs-Anzeige zwischen Gruppenmitgliedern
- Geofence-Alerts: Benachrichtigung wenn jemand den definierten Bereich verlässt (optional, z.B. für Kinder)

---

### Phase 6: Abschluss & Nachbereitung

> *"Das war genial!" — Kosten abrechnen, Fotos teilen, Erinnerungen bewahren.*

#### Kostenabrechnung (Settlement)
- Finale Schuldenübersicht: Wer schuldet wem wie viel
- Minimierte Transaktionen (Algorithmus: möglichst wenige Überweisungen)
- Zahlungen markieren als "erledigt"
- Zahlungsmethoden: IBAN, PayPal, Venmo, Bargeld
- Automatische Erinnerung bei offenen Schulden
- Export der kompletten Abrechnung als PDF

#### Fotos & Erinnerungen
- Gemeinsames Fotoalbum (Cloud-basiert)
- Alle Teilnehmer können Fotos hochladen
- Automatische Sortierung nach Datum & Ort
- Highlight-Reel: Beste Fotos der Reise
- Fotos zu Tagesplan/Aktivitäten verknüpfen
- Externe Album-Integration (Google Photos, iCloud Link teilen)
- Erinnerungsvideo automatisch generieren (Slideshow aus Highlights)
- Foto-Kommentare & Reactions

#### Bewertungen & Feedback
- Bewertung von Unterkunft, Restaurants, Aktivitäten (intern, für zukünftige Reisen)
- "Was war das Highlight?" — Gruppen-Poll
- Feedback zur Reise-Organisation ("Was lief gut, was könnte besser sein?")
- Reise als "Template" speichern für andere Gruppen
- Öffentliches Reise-Tagebuch (optional): Zusammenfassung teilen

#### Reise abschließen
- Status: Aktiv → Abgeschlossen → Archiviert
- Zusammenfassungs-Dashboard: Gesamtkosten, km gereist, Aktivitäten gemacht
- Statistiken: Teuerster Tag, beliebteste Aktivität, meiste Ausgaben in Kategorie X
- Erinnerungs-Benachrichtigung ("Vor einem Jahr wart ihr in Sizilien!")

---

### Phase 7: Übergreifende Features

> *Features die phasenübergreifend relevant sind.*

#### Dashboard
- Startseite nach Login: Alle aktiven Reisen
- Pro Reise: Status-Überblick (offene Aufgaben, nächste Abstimmung, Budget-Status)
- Quick-Actions: Ausgabe eintragen, Abstimmung starten, Foto hochladen
- Nächste anstehende Reise prominent
- Vergangene Reisen als Galerie

#### Notifications & Erinnerungen
- Push-Notifications (Mobile) und E-Mail
- Konfigurierbar: Welche Events lösen Benachrichtigungen aus
- Typen:
  - Neue Abstimmung / Abstimmung endet bald
  - Aufgabe zugewiesen / Deadline naht
  - Neue Ausgabe eingetragen
  - Jemand hat eine Idee gepostet
  - Wetter-Warnung
  - Reise-Alert (Sicherheit)
  - Schulden-Erinnerung
  - Flugstatus-Änderung
- Stille Zeiten (z.B. nachts keine Notifications)
- Zusammenfassung: Tägliche/wöchentliche Übersicht per E-Mail

#### Offline-Modus
- Kernfeatures ohne Internet nutzbar: Tagesplan, Karte, Packliste, Ausgaben
- Automatische Synchronisierung wenn wieder online
- Konflikt-Erkennung bei gleichzeitiger Offline-Bearbeitung
- Offline-Karten downloaden

#### Multi-Sprache
- Mehrsprachige Oberfläche (Deutsch, Englisch, weitere)
- Automatische Übersetzung von Notizen/Kommentaren (optional)
- Lokale Phrasen & Übersetzungshilfe für Zielland

#### Suche & Filter
- Globale Suche über alle Reise-Inhalte
- Filterbar nach Kategorie, Person, Datum, Status
- Schnellzugriff auf häufig genutzte Bereiche

#### Import & Export
- Daten importieren aus: TripIt, Google Trips, Splitwise, CSV
- Booking-Bestätigungen per E-Mail-Weiterleitung importieren (wie TripIt)
- Export als: PDF (Reiseplan), CSV (Ausgaben), JSON (Backup)
- Druckbare Version des Tagesplans

#### Integrationen
- Google Calendar / Apple Calendar: Reisetermine synchronisieren
- Google Maps: Orte direkt öffnen
- Booking-Plattformen: Links zu Airbnb, Booking.com, etc.
- Zahlungsdienste: PayPal, Venmo
- Cloud-Speicher: Google Drive, Dropbox (für Dokumente)
- Wetter-API (OpenWeatherMap, etc.)
- Flugstatus-API (FlightAware, etc.)
- Reisewarnungen-API (Auswärtiges Amt, etc.)

---

## 5. Sicherheit, Warnungen & Reise-Alerts

> *Immer informiert über Risiken und Sicherheitslage am Reiseziel.*

### 5.1 Reisewarnungen
- Automatische Abfrage von Reisewarnungen des Auswärtigen Amtes / Außenministeriums
- Farbcodiertes Sicherheits-Level: Grün (sicher), Gelb (Vorsicht), Orange (erhöhtes Risiko), Rot (Reisewarnung)
- Detaillierte Beschreibung der aktuellen Sicherheitslage
- Historische Entwicklung der Sicherheitslage
- Regionale Unterschiede innerhalb des Landes (z.B. Norden sicher, Süden problematisch)

### 5.2 Wetter-Alerts
- Unwetterwarnungen für die Zielregion
- Hitzewellen, Stürme, Starkregen, Überschwemmungen
- Naturkatastrophen-Warnungen (Erdbeben, Vulkanausbrüche, Tsunamis)
- Waldbrände / Luftqualität
- Push-Notification bei neuen Wetterwarnungen

### 5.3 Politische & Sicherheitslage
- Aktuelle Konflikte, Kriege, Bürgerkriege
- Demonstrationen & Protestbewegungen
- Terrorwarnungen
- Kriminalitäts-Level (Taschendiebstahl, Betrug, etc.)
- Regionen meiden / sichere Zonen

### 5.4 Gesundheitswarnungen
- Aktuelle Epidemien/Pandemien in der Region
- Impfempfehlungen & Pflichtimpfungen
- Malaria-/Dengue-Risiko
- Leitungswasser-Qualität
- Nächstes Krankenhaus / Apotheke am Aufenthaltsort
- Medizinische Versorgungslage

### 5.5 Lokale Alerts
- Streiks (Flughafen, ÖPNV, öffentlicher Dienst)
- Straßensperrungen & Baustellen
- Großveranstaltungen die Verkehr/Preise beeinflussen
- Feiertage an denen Geschäfte geschlossen sind
- Kulturelle Events (Festivals, religiöse Feiertage)

### 5.6 Alert-Dashboard
- Übersichtliches Sicherheits-Dashboard pro Reise
- Ampelsystem: Gesamtbewertung auf einen Blick
- Timeline: Wann gab es welche Warnung
- Automatische Empfehlungen (z.B. "Reiseversicherung dringend empfohlen")
- Notfall-Kontakte: Botschaft, Konsulat, Polizei, Rettung — automatisch zur Region
- SOS-Button: Wichtigste Notfallnummern sofort erreichbar
- Persönliche Notfall-Kontakte der Gruppe (wer informieren bei Notfall)

---

## 6. Vollständige Feature-Liste (Kompakt)

> *Jedes Feature auf einen Blick — sortiert nach Bereich.*

### Reise-Management
- [ ] Reisen als Projekte anlegen, bearbeiten, archivieren, duplizieren
- [ ] Owner/Admin/Mitglied/Gast/Interessent-Rollen
- [ ] Granulare Zugriffsrechte pro Modul
- [ ] Einladungen per Link, E-Mail, QR-Code
- [ ] Beitrittsanfragen mit Admin-Bestätigung
- [ ] Multi-Reisen-Dashboard
- [ ] Reise-Templates & Vorlagen
- [ ] Aktivitätslog (Audit Trail)

### Benutzer & Profile
- [ ] Account-System (E-Mail, Google, Apple, GitHub Login)
- [ ] Persönliches Profil mit Fähigkeiten, Präferenzen, Einschränkungen
- [ ] Ernährungspräferenzen & Allergien
- [ ] Führerschein, Sprachen, Qualifikationen
- [ ] Notfallkontakt
- [ ] Reisepass-Infos (verschlüsselt)
- [ ] Profilbild & Farbcode/Initialen

### Inspiration & Ideenfindung
- [ ] Weltkarte mit Destination Discovery
- [ ] "Überrasch mich"-Zufallsgenerator
- [ ] Ideenwand / Moodboard
- [ ] Links von Social Media mit Vorschau
- [ ] Screenshot-Upload mit AI-Ort-Erkennung
- [ ] Upvote/Downvote auf Ideen
- [ ] Persönliche & Gruppen-Bucketlists
- [ ] Matching der Gruppen-Wünsche
- [ ] Inspiration-Feed zur Destination

### Terminfindung & Abstimmungen
- [ ] Verfügbarkeits-Kalender (Heatmap)
- [ ] Externe Kalender importieren
- [ ] Automatische "Bester Zeitraum"-Erkennung
- [ ] Teilzeitraum-Unterstützung
- [ ] Ranked Choice / Borda Count Voting
- [ ] Ja/Nein-Abstimmungen
- [ ] Multi-Choice Polls
- [ ] Gewichtete Abstimmung (Punkte verteilen)
- [ ] Anonyme Abstimmung (optional)
- [ ] Abstimmungs-Deadlines & Erinnerungen
- [ ] Ergebnis-Visualisierung (Charts, Ranglisten)
- [ ] Entscheidungs-Log

### Unterkünfte
- [ ] Optionen sammeln & vergleichen (Tabelle)
- [ ] Kartenansicht aller Optionen
- [ ] Pro-/Contra-Listen
- [ ] Stornierungsbedingungen
- [ ] Direkt-Links zu Buchungsportalen
- [ ] Ranked Choice Abstimmung
- [ ] Kommentare & Diskussion
- [ ] Buchungsstatus-Tracking
- [ ] Check-in/Check-out, Adresse, WLAN, Kontakt
- [ ] Zimmeraufteilung
- [ ] Fotos & Grundriss

### Flüge & Anreise
- [ ] Flugoptionen vergleichen
- [ ] Pro-Person oder Gruppenflüge
- [ ] Hin-/Rückflug separat
- [ ] Flugdetails (Airline, Zeiten, Umsteiger, Gepäck)
- [ ] Preisvergleich (günstigster hervorgehoben)
- [ ] Buchungsstatus pro Person
- [ ] Links zu Skyscanner, Kayak, etc.
- [ ] Boarding-Pass Upload
- [ ] Flugstatus-Tracking (Live)
- [ ] Alternative Anreise (Zug, Bus, Auto, Fähre)
- [ ] Anreise-Zeitstrahl (wer kommt wann)
- [ ] Individuelle Anreise pro Person

### Transport & Mietwagen
- [ ] Mietwagen-Vergleich
- [ ] Fahrer-Profile (Führerschein, Fahrerfahrung)
- [ ] Kosten-Splitter (Miete + Sprit + Maut)
- [ ] ÖPNV-Infos zur Destination
- [ ] Taxi/Uber-Optionen
- [ ] Flughafen-Transfer planen
- [ ] Carsharing innerhalb der Gruppe
- [ ] Parkplatz-Infos

### Aktivitäten & Erlebnisse
- [ ] Aktivitäten sammeln (Kategorien, Prioritäten)
- [ ] Kartenansicht
- [ ] Öffnungszeiten, Preise, Dauer
- [ ] Links zu Booking-Portalen (Viator, GetYourGuide)
- [ ] Bewertungen anzeigen
- [ ] AI-Vorschläge basierend auf Destination
- [ ] Abstimmung über Aktivitäten
- [ ] Lokale Spezialitäten & Food-Guide
- [ ] "Geheimtipps" von Locals

### Restaurants
- [ ] Restaurants sammeln & vergleichen
- [ ] Kartenansicht
- [ ] Öffnungszeiten, Preisniveau, Küche, Bewertungen
- [ ] Reservierungen eintragen
- [ ] Schnell-Abstimmung ("Wo essen wir heute?")
- [ ] Ernährungspräferenzen-Filter
- [ ] Empfehlungen von Locals

### Aufgaben / To-Do
- [ ] Aufgaben erstellen mit Details
- [ ] Zuständige zuweisen
- [ ] Status-Workflow (Offen → In Bearbeitung → Erledigt)
- [ ] Prioritäten (Hoch, Mittel, Niedrig)
- [ ] Deadlines mit Erinnerung
- [ ] Kategorien & Filter
- [ ] Fortschrittsübersicht
- [ ] Auto-generierte Standard-Aufgaben

### Packliste
- [ ] Gemeinsame Packliste (Gruppe)
- [ ] Persönliche Packliste (pro Person)
- [ ] Verantwortlicher für gemeinsame Items
- [ ] Intelligente Vorschläge (Wetter, Aktivitäten)
- [ ] Fortschrittsbalken
- [ ] Kategorien (Kleidung, Hygiene, Elektronik, etc.)
- [ ] Packlisten-Templates
- [ ] Pack-Light-Modus
- [ ] Wäsche-Feature

### Dokumente & Versicherung
- [ ] Dokumente-Checkliste pro Person
- [ ] Ablaufdatum-Warnungen
- [ ] Dokumente hochladen (verschlüsselt)
- [ ] Visum-Infos
- [ ] Versicherungs-Empfehlungen
- [ ] Dokumente mit Gruppe teilen

### Tagesplaner
- [ ] Tag-für-Tag-Übersicht
- [ ] Zeitslots (Morgen, Mittag, Nachmittag, Abend)
- [ ] Mahlzeiten planen
- [ ] Drag & Drop von Aktivitäten
- [ ] Distanz-/Zeitberechnung zwischen Aktivitäten
- [ ] Wetter-Vorschau pro Tag
- [ ] "Heute"-Ansicht
- [ ] Flexible vs. durchgeplante Tage
- [ ] Tagesplan exportieren/drucken

### Navigation & Karten
- [ ] Karte mit allen relevanten Punkten
- [ ] Routen berechnen (Auto, ÖPNV, Fuß)
- [ ] Multi-Stop-Routenoptimierung
- [ ] ÖPNV-Fahrpläne
- [ ] Offline-Karten
- [ ] Integration mit Google Maps / Apple Maps
- [ ] Parkplatz-Finder
- [ ] Flughafen → Unterkunft Route

### Kosten & Ausgaben
- [ ] Ausgaben erfassen (wer, was, für wen)
- [ ] Kategorien
- [ ] Beleg-Foto
- [ ] Automatische Schuldenberechnung
- [ ] Minimale Transaktionen (Settlement-Algorithmus)
- [ ] Ungleiche Splits
- [ ] Multi-Währung mit Echtzeit-Kursen
- [ ] Budget-Limit & Warnung
- [ ] Ausgaben-Diagramme
- [ ] "Wer zahlt?"-Zufallsgenerator
- [ ] Export (CSV, PDF)
- [ ] Trinkgeld-Rechner
- [ ] Vorgeschossene Kosten
- [ ] Finale Abrechnung

### Kommunikation
- [ ] Gruppen-Chat
- [ ] Themen-Channels
- [ ] @Mentions
- [ ] Schnell-Abstimmungen im Chat
- [ ] Push-Notifications
- [ ] Standort teilen (opt-in)
- [ ] Quick-Status-Messages
- [ ] Sprachnachrichten

### Wetter
- [ ] 14-Tage-Vorschau
- [ ] Stündliche Vorhersage
- [ ] UV-Index, Regen, Wind, Wassertemperatur
- [ ] Wetter-Widgets im Dashboard & Tagesplaner
- [ ] Indoor-Empfehlungen bei Schlechtwetter
- [ ] Wetter-basierte Packlisten-Anpassung

### Sicherheit & Alerts
- [ ] Reisewarnungen (Auswärtiges Amt)
- [ ] Wetter-Alerts
- [ ] Politische/Sicherheitslage
- [ ] Gesundheitswarnungen & Impf-Infos
- [ ] Lokale Alerts (Streiks, Events)
- [ ] Sicherheits-Dashboard (Ampelsystem)
- [ ] Notfall-Kontakte & Botschafts-Infos
- [ ] SOS-Button
- [ ] Reiseversicherungs-Hinweise

### Fotos & Erinnerungen
- [ ] Gemeinsames Fotoalbum
- [ ] Fotos zu Aktivitäten/Tagen verknüpfen
- [ ] Sortierung nach Datum & Ort
- [ ] Highlight-Reel
- [ ] Externe Album-Integration (Google Photos, iCloud)
- [ ] Foto-Kommentare & Reactions
- [ ] Erinnerungsvideo (Slideshow)

### Abschluss & Statistiken
- [ ] Finale Schuldenübersicht
- [ ] Minimierte Settlement-Transaktionen
- [ ] Zahlungen als erledigt markieren
- [ ] Automatische Schulden-Erinnerung
- [ ] Reise-Zusammenfassung (Kosten, km, Aktivitäten)
- [ ] Statistiken (Teuerster Tag, beliebteste Aktivität)
- [ ] Jahrestag-Erinnerung
- [ ] Reise als Template speichern

### Übergreifend
- [ ] Multi-Reisen-Dashboard
- [ ] Konfigurierbare Notifications
- [ ] Offline-Modus mit Auto-Sync
- [ ] Multi-Sprache
- [ ] Globale Suche
- [ ] Import (TripIt, Google Trips, Splitwise, CSV, E-Mail)
- [ ] Export (PDF, CSV, JSON)
- [ ] Kalender-Integration (Google, Apple, Outlook)
- [ ] API-Integrationen (Wetter, Flugstatus, Reisewarnungen, Maps)

### Multi-City & Rundreise
- [ ] Linearer Trip, Rundreise, Hub-and-Spoke, Open-Jaw
- [ ] Verschiedene Start-/Endpunkte pro Person
- [ ] Route auf Karte visualisieren (farbcodiert nach Transportmittel)
- [ ] Stops umordnen (Drag & Drop)
- [ ] Pro-Stop-Planung (Unterkunft, Aktivitäten, Tage)
- [ ] Transport zwischen Stops vergleichen (Flug vs. Zug vs. Bus vs. Fähre vs. Auto)
- [ ] Routenoptimierung (kürzeste/günstigste/schnellste)
- [ ] CO₂-Vergleich pro Transportmittel
- [ ] Zwischenstopp-Vorschläge
- [ ] Inselhopping & Fährverbindungen
- [ ] Eurail/Interrail-Kompatibilität
- [ ] Individuelle vs. gemeinsame Strecken
- [ ] Timeline: Wer ist wann wo

### Einkaufszettel & Gruppen-Shopping
- [ ] Gemeinsame Einkaufsliste (Real-time sync)
- [ ] Automatische Kategorisierung
- [ ] Barcode-Scanner & Foto-Items
- [ ] Zuständigkeit zuweisen
- [ ] Mehrere Listen parallel
- [ ] Preise eintragen → Ausgaben-Tracking
- [ ] Geofencing-Erinnerung beim Supermarkt
- [ ] Wiederkehrende Items
- [ ] Vorschläge aus Mahlzeitenplanung

### Mahlzeitenplanung
- [ ] Frühstück/Mittag/Abendessen pro Tag
- [ ] Selbst kochen vs. Restaurant vs. Imbiss
- [ ] Koch-Rotation (wer kocht heute)
- [ ] Rezeptvorschläge (Allergien/Präferenzen beachten)
- [ ] Zutaten → Einkaufsliste
- [ ] Schnell-Abstimmung fürs Abendessen
- [ ] Budget pro Mahlzeit

### Sprache & Übersetzung
- [ ] Wichtigste Reise-Phrasen (auto nach Destination)
- [ ] Kategorien (Restaurant, Notfall, Transport, etc.)
- [ ] Audio-Aussprache (Muttersprachler)
- [ ] Favoriten & eigene Phrasen
- [ ] Offline verfügbar
- [ ] Lernmodus (Spaced Repetition)
- [ ] Kamera-Übersetzung (Speisekarte, Schilder)
- [ ] Konversations-Modus (Zwei-Wege-Live)
- [ ] Offline-Sprachpakete
- [ ] Speisekarten-Decoder
- [ ] Allergie-Karte in Landessprache

### Lokale Dienste finden
- [ ] Toiletten-Finder
- [ ] Geldautomat/ATM mit Gebühren-Info
- [ ] Apotheke (+ Notdienst)
- [ ] Krankenhaus/Arzt
- [ ] Waschsalon/Wäscheservice
- [ ] Supermarkt (+ Öffnungszeiten)
- [ ] WiFi-Hotspots
- [ ] Tankstelle
- [ ] Post
- [ ] Botschaft/Konsulat
- [ ] Polizeistation
- [ ] Alles auf Karte mit Entfernung

### Konnektivität & eSIM
- [ ] eSIM-Anbieter Preisvergleich
- [ ] Setup-Anleitung
- [ ] WiFi-Karte (öffentliche Hotspots)
- [ ] Roaming-Infos (EU/nicht-EU)
- [ ] VPN-Empfehlung
- [ ] Offline-Download-Checkliste

### Währungsrechner & Trinkgeld
- [ ] Live-Währungsrechner
- [ ] Historischer Kursverlauf
- [ ] Trinkgeld-Rechner (landesspezifisch)
- [ ] Rechnungssplitter
- [ ] "Wie bezahlt man hier?" Info

### Gesundheit & Medikamente
- [ ] Medikamenten-Erinnerung
- [ ] Impf-Tracker
- [ ] Reiseapotheke-Checkliste
- [ ] Allergiepass in Landessprache
- [ ] Telemedicine-Kontakt
- [ ] Nächstes Krankenhaus (Ein-Tap)
- [ ] UV/Sonnenbrand-Timer
- [ ] Hydrations-Reminder

### Reise-Tagebuch
- [ ] Automatisches GPS-Tracking (Route)
- [ ] Animierte Reise-Visualisierung
- [ ] Tägliche Journal-Einträge (Text, Fotos, Videos)
- [ ] Geotagging & Wetter-Daten
- [ ] Highlight-Marker auf Karte
- [ ] Gruppen-Tagebuch
- [ ] Export als Fotobuch/PDF
- [ ] Reise-Statistiken (Strecke, Orte, Höhenmeter)

### Sicherheits-Check-in
- [ ] Scheduled Check-ins (Familie informieren)
- [ ] "Bin angekommen" Button
- [ ] SOS-Panik-Button
- [ ] Inaktivitäts-Alert
- [ ] Standort teilen mit Angehörigen (separater Link)

### Budget-Vorplanung
- [ ] Gesamtkosten-Schätzung vor Buchung
- [ ] Kosten pro Person berechnen
- [ ] Budget-/Komfort-/Luxus-Vergleich
- [ ] Tagesbudget berechnen
- [ ] Preisalerts (Flüge, Hotels)
- [ ] Preis-Tracking über Zeit (Graphen)
- [ ] "Jetzt buchen oder warten?"-Empfehlung
- [ ] Offene vs. bezahlte Buchungen tracken

### Visa & Einreise
- [ ] Automatischer Visa-Check (Nationalität + Zielland)
- [ ] Visum-Antragsstatus-Tracking
- [ ] Reisepass-Gültigkeitsprüfung (6-Monate-Regel)
- [ ] Internationaler Führerschein
- [ ] Minderjährigen-Reiseerlaubnis

### Stornierungsfristen
- [ ] Alle Buchungen mit Stornierungsfrist
- [ ] Timeline: Wann laufen Fristen ab
- [ ] Push-Notification vor Ablauf
- [ ] Versicherungs-Abdeckung prüfen

### Zuhause-Vorbereitung
- [ ] Haustier-Betreuung organisieren
- [ ] Pflanzen gießen lassen
- [ ] Post anhalten
- [ ] Kühlschrank/Müll/Fenster/Heizung
- [ ] Alarmanlage & Zeitschaltuhren
- [ ] Nachbarn informieren
- [ ] Zuständigkeit & Status-Tracking

### Arbeit & Übergabe
- [ ] Out-of-Office einrichten
- [ ] Vertretung briefen
- [ ] Übergabe-Dokument erstellen
- [ ] Kunden informieren
- [ ] Erinnerungen (X Tage vor Abreise)

### Flughafen-Vorbereitung
- [ ] Anfahrt planen (Fahrzeit + Puffer)
- [ ] Parkplatz reservieren
- [ ] Terminal-Map & Gate
- [ ] Lounge-Zugang prüfen
- [ ] Gruppen-Sitzplatz-Koordination
- [ ] Gepäck-Regeln (Gewicht, Handgepäck)

### Layover-Planung
- [ ] Layover-Erkennung aus Flugdaten
- [ ] Vorschläge nach Dauer
- [ ] Visa-frei-Transit-Check
- [ ] Gepäck-Aufbewahrung
- [ ] City-Tour bei langem Layover

### Gruppen-Regeln
- [ ] Digitale Reise-Vereinbarung
- [ ] Budget-Rahmen festlegen
- [ ] Entscheidungs-Modus definieren
- [ ] Kompatibilitäts-Check
- [ ] Konflikt-Prävention

### Reise-Countdown
- [ ] Visueller Countdown
- [ ] Automatische Meilensteine
- [ ] Vorbereitungs-Fortschrittsbalken
- [ ] Countdown-Widget

### Mitbringsel & Souvenirs
- [ ] Geschenke-Liste (für wen, Budget)
- [ ] Lokale Souvenir-Empfehlungen
- [ ] Zollfreigrenzen & Einfuhrverbote
- [ ] Duty-Free-Info
- [ ] Fotos von Items speichern

### Morgen-Routine & Tagesstart
- [ ] Morgen-Dashboard (Wetter, Programm, Aufgaben)
- [ ] Outfit-Empfehlung (Wetter + Aktivität)
- [ ] Tagesrucksack-Checkliste
- [ ] Sonnenaufgang/Sonnenuntergang
- [ ] Zeitzone-Anzeige (Heimat vs. Reiseziel)

### Strand & Meer
- [ ] Gezeiten (Ebbe/Flut)
- [ ] Wellenhöhe & Wind
- [ ] Wassertemperatur
- [ ] Strömungs-/Quallen-Warnungen
- [ ] Strandqualität-Bewertungen

### Events & Nachtleben
- [ ] Lokale Events heute
- [ ] Happy-Hour-Finder
- [ ] Nachtleben-Guide (Clubs, Bars, Live-Musik)
- [ ] Dress-Code-Info
- [ ] Sichere Gebiete für Nachtleben
- [ ] Taxi nach Hause planen

### Scam-Warnungen
- [ ] Bekannte Betrugsmaschen pro Region
- [ ] Scam-Heatmap
- [ ] Touristenfallen-Warnung
- [ ] Community-Meldungen

### Gepäck-Aufbewahrung
- [ ] Nächste Schließfächer/Storage-Services
- [ ] Preise & Öffnungszeiten
- [ ] Reservierung

### Taxi & Rides
- [ ] Taxi-Preis-Kalkulator
- [ ] Uber/Bolt/Lyft Schätzung
- [ ] Vergleich Taxi vs. Rideshare vs. ÖPNV
- [ ] Flughafen-Festpreise

### Jet-Lag-Management
- [ ] Jet-Lag-Rechner
- [ ] Personalisierter Anpassungsplan
- [ ] Licht-/Koffein-/Schlaf-Empfehlungen

### Schritt-Zähler & Tages-Stats
- [ ] Automatischer Schritt-Zähler
- [ ] Distanz & Kalorien
- [ ] Gruppen-Vergleich
- [ ] Walking-Tour auf Karte

### Tagesabschluss-Routine
- [ ] Ausgaben-Log Erinnerung
- [ ] Foto-Backup Erinnerung
- [ ] Morgen-Check (was steht an)
- [ ] Geräte-Laden Reminder
- [ ] Tagebuch-Eintrag
- [ ] "Was machen wir morgen?"-Quick-Vote

### Lost & Found
- [ ] Letzte Position verlorener Items
- [ ] Anlaufstellen (Polizei, Hotel)
- [ ] Sperr-Nummern (Kreditkarte, SIM)
- [ ] Checkliste bei Verlust

### Community: Reisende treffen
- [ ] Echtzeit-Matching am Reiseziel (wer ist auch hier)
- [ ] Travel Buddy Matching (Persönlichkeit, Stil, Budget)
- [ ] Kompatibilitäts-Score
- [ ] Spontane Gruppen-Aktivitäten erstellen
- [ ] Pub Crawls & Nachtleben mit anderen
- [ ] Sport-Aktivitäten (Beach-Volleyball, Schnorcheln, etc.)
- [ ] Tagesausflüge mit Cost-Sharing
- [ ] Verifizierte Profile (ID-Check)
- [ ] Bewertungen von anderen Reisenden

### Community: Locals treffen
- [ ] Lokale Guides Marketplace
- [ ] Kochen mit Locals
- [ ] Sprach-Austausch (Tandem)
- [ ] Skill-Swap
- [ ] Insider-Tipps von verifizierten Locals
- [ ] Kultur-Workshops (Handwerk, Tanz, Kochen)
- [ ] "Stammtisch" — regelmäßige Traveler/Local Meetups

### Community: Reisen teilen
- [ ] Reise als Story/Blog veröffentlichen
- [ ] Privacy-Stufen (Privat/Freunde/Community/Öffentlich)
- [ ] Itinerary-Bibliothek (öffentliche Sammlung)
- [ ] One-Click-Import anderer Routen
- [ ] Social Feed (Freunde & Community)
- [ ] Stories (Kurzformat-Updates von unterwegs)
- [ ] Reise-Rückblick (automatisches Highlight-Reel)

### Community: Sicherheitsnetzwerke
- [ ] Frauen-/Solo-Reisende Community
- [ ] Walking Buddy Feature
- [ ] Community-Warnungen (Diebstahl, Betrug)
- [ ] Notfall-Netzwerk (TripForge-User in der Nähe)
- [ ] Verifizierte Safe Spaces auf Karte

### Community: Cost-Sharing
- [ ] Ride-Sharing zwischen Städten
- [ ] Unterkunft-Sharing mit anderen Reisenden
- [ ] Gruppen-Rabatte durch Zusammenschluss
- [ ] Mietwagen-Sharing für Tagesausflüge

### Community: Nomad & Volunteer
- [ ] Coworking-Spaces finden & bewerten
- [ ] Internet-Speed Community-Reports
- [ ] Nomad-Meetups
- [ ] Coliving-Spaces
- [ ] Remote-Work-Visa Infos
- [ ] Volunteer-Möglichkeiten (Workaway, WWOOF)
- [ ] Beach Cleanup & Umwelt-Projekte

### AR & Virtual Reality
- [ ] 360°-Rundgang (Hotel, Sehenswürdigkeiten)
- [ ] AR Navigation (Pfeile auf der Straße)
- [ ] AR Speisekarte (Gerichte-Bilder einblenden)
- [ ] AR Sehenswürdigkeiten (Infos einblenden)

### Barrierefreies Reisen
- [ ] Rollstuhl-gerechte Orte Filter
- [ ] Barrierefreiheits-Score pro Ort
- [ ] Hör-/Sehgeschädigten-Features
- [ ] Reizarme Orte (Neurodivergent)

### Familien-Features
- [ ] Kinderfreundliche Orte Filter
- [ ] Wickelraum-Finder
- [ ] Kinderwagen-Zugang
- [ ] Altersgerechte Aktivitäten
- [ ] Babysitter-Service finden

### Reisen mit Haustier
- [ ] Pet-Friendly Filter (Hotel, Strand, Park)
- [ ] Airline-Regeln pro Tier
- [ ] Tierarzt am Reiseziel
- [ ] EU-Heimtierausweis & Einreise-Regeln

### Nachhaltigkeit & CO₂
- [ ] CO₂-Fußabdruck pro Reise
- [ ] CO₂-Vergleich (Flug vs. Zug vs. Auto)
- [ ] Offset-Möglichkeiten
- [ ] Nachhaltige Alternativen (Eco-Hotels, Bio-Restaurants)
- [ ] "Grüne Route" vorschlagen

### Foto-Spots
- [ ] Beste Foto-Locations pro Destination
- [ ] GPS, beste Tageszeit, Beispielfotos
- [ ] Golden-Hour-Rechner
- [ ] Community-eingereichte Spots

### Kulturelle Immersion
- [ ] Kochkurse finden & buchen
- [ ] Lokale Märkte Guide
- [ ] Handwerks-Workshops
- [ ] Festival-Kalender
- [ ] Lokale Etikette & Dress Code

### Medien zur Destination
- [ ] Bücher die dort spielen
- [ ] Filme die dort gedreht wurden
- [ ] Lokale Musik-Playlist
- [ ] Podcasts & Dokumentationen

### Gamification
- [ ] Reise-Achievements & Abzeichen
- [ ] Reise-Bingo (destination-spezifisch)
- [ ] Gruppen-Challenges
- [ ] Punkte-System für Community-Beiträge
- [ ] Leaderboard (Freunde)

### Reise-Zeitkapsel
- [ ] Nachricht an Zukunfts-Ich versiegeln
- [ ] Gruppen-Zeitkapsel
- [ ] Automatische Jahrestag-Erinnerung

### Smart Devices
- [ ] Gepäck-Tracking (AirTag/Tile)
- [ ] Smartwatch-Integration
- [ ] Boarding-Pass auf Watch

### Loyalty & Punkte
- [ ] Alle Treueprogramme an einem Ort
- [ ] Punkte-Verfall-Warnung
- [ ] Optimierungs-Empfehlung

### Outfit-Planer
- [ ] Capsule Wardrobe
- [ ] Outfit pro Tag (Wetter + Aktivität)
- [ ] Wäsche-Planer

### Miet-Dokumentation
- [ ] Schäden dokumentieren (Fotos + Zeitstempel)
- [ ] Zustandsprotokoll Check-in/Check-out
- [ ] Kautions-Tracking

### Wellness & Spa
- [ ] Spa/Massage/Yoga finden
- [ ] Bewertungen & Buchung
- [ ] Erholungstag-Empfehlung

### Mikro-Abenteuer
- [ ] "Was kann ich in 2h machen?"
- [ ] Off-the-beaten-path Empfehlungen
- [ ] Surprise-Modus
- [ ] Nacht-Aktivitäten

### Reise-Infos & Länder-Guide
- [ ] Währung & Wechselkurs
- [ ] Steckdosentyp & Adapter
- [ ] Trinkgeld-Kultur
- [ ] Notfallnummern
- [ ] Zeitzone & Zeitverschiebung
- [ ] Sprache & Phrasen
- [ ] Kulturelle Besonderheiten
- [ ] Klima zur Reisezeit
- [ ] Einreisebestimmungen
- [ ] Leitungswasser-Info
- [ ] SIM/Roaming
- [ ] Feiertage während Aufenthalt

---

## 7. Community & Social Features

> *Reisen verbindet. TripForge ist nicht nur ein Planungstool — es ist ein soziales Netzwerk für Reisende.*

### 7.1 Andere Reisende treffen

> *"Wer ist gerade auch in Palermo?"*

**Echtzeit-Matching am Reiseziel**
- Andere TripForge-Nutzer sehen die gerade am gleichen Ort sind
- Filter: Sprache, Alter, Interessen, Reise-Typ (Backpacker, Luxus, Familie)
- "Jemand Lust auf ein Bier heute Abend?" — Spontane Hangout-Anfragen
- Opt-in: Nur sichtbar wenn man möchte (Privacy-First)
- Verifizierte Profile (ID-Check, Foto-Verification) für Vertrauen
- Bewertungen/Reviews von anderen Reisenden

**Travel Buddy Matching**
- Persönlichkeits-basiertes Matching (Reise-Stil, Budget-Level, Aktivität, Schlafrhythmus)
- Destination + Datum: Wer fährt wann wohin (wie GAFFL, Tourlina)
- Kompatibilitäts-Score basierend auf Profil-Daten
- Chat-Funktion zum Kennenlernen vor dem Treffen
- Gruppen-Reise-Anfragen: "Suche 2-3 Leute für Roadtrip Sizilien im Juni"
- Solo-Reisende vernetzen sich mit anderen Solos

**Gruppen-Aktivitäten mit anderen Reisenden**
- Spontane Aktivitäten erstellen: "Wanderung zum Ätna morgen, noch 3 Plätze frei"
- Pub Crawls & Nachtleben: Organisierte Bar-Touren, andere Reisende einladen
- Gemeinsames Kochen: "Heute Abend Pizza-Abend in unserer Airbnb-Küche"
- Sport-Aktivitäten: Beach-Volleyball, Schnorcheln, Radtour — Mitspieler finden
- Tagesausflüge: Mietwagen-Kosten teilen mit anderen Reisenden
- Events: Lokale Festivals, Konzerte — zusammen hingehen

### 7.2 Locals treffen & lokale Erlebnisse

> *"Die besten Tipps kommen von Einheimischen."*

**Lokale Guides & Erlebnisse**
- Marketplace für lokale Guides: Private Touren buchen (wie WithLocals, Showaround)
- Kochen mit Locals: Einheimische laden zum gemeinsamen Kochen ein (wie EatWith, BonAppetour)
- "Zeig mir deine Stadt": Locals bieten individuelle Stadtführungen an
- Bewertungen & Verifikation der Guides
- Preis transparent, direkte Buchung

**Sprach- & Kultur-Austausch**
- Tandem-Partner finden: Sprache üben mit Einheimischen (wie Tandem, HelloTalk)
- Kultur-Workshops: Töpfern, Kochen, Tanzen, Handwerk — lokale Angebote
- "Stammtisch": Regelmäßige Treffen von Locals und Reisenden
- Skill-Swap: Du bringst mir Surfen bei, ich bringe dir Deutsch bei

**Insider-Tipps von Locals**
- "Spotted by Locals"-Konzept: Einheimische kuratieren Geheimtipps
- Keine gesponserten Inhalte — nur echte Empfehlungen
- Kategorien: Essen, Cafés, Aussichtspunkte, Märkte, versteckte Strände
- Verifizierte Locals (leben tatsächlich dort)

### 7.3 Reisen teilen & Community

> *"Schaut mal, wo wir waren!"*

**Reise-Tagebuch öffentlich teilen**
- Fertige Reise als Story/Blog veröffentlichen (optional)
- Automatisch generiert aus Tagesplan, Fotos, Routen, Highlights
- Privacy-Stufen: Privat, Freunde, Community, Öffentlich
- Andere können kommentieren, liken, speichern
- Reise als Inspiration für andere ("Diese Route hat super funktioniert")
- Teilbare Links: "Hier ist unsere Sizilien-Route" → andere können sie als Template nutzen

**Itinerary-Bibliothek**
- Öffentliche Sammlung von Reiseplänen (wie Itinsy)
- Filtern nach: Destination, Dauer, Budget, Reise-Typ, Gruppengröße
- "Von der Community für die Community"
- Beliebteste Routen, am besten bewertete Itineraries
- One-Click-Import: Route als eigene Reise übernehmen und anpassen

**Social Feed**
- Aktuelle Reisen von Freunden & Community
- Stories: Kurzformat-Updates von unterwegs (Foto + Ort + kurzer Text)
- "Live from..." — Echtzeit-Eindrücke
- Keine Algorithmus-Manipulation — chronologisch, ehrlich, authentisch
- "Reise-Rückblick" automatisch generiert am Ende (Highlight-Reel)

### 7.4 Sicherheitsnetzwerke

> *Sicher reisen — besonders allein.*

**Frauen & Solo-Reisende**
- Frauen-only Community-Bereich (wie NomadHer)
- Solo-Reisende vernetzen für gemeinsame Abende, Ausflüge
- Sicherheits-Tipps von echten Solo-Reisenden pro Destination
- Verifizierte Profile (extra für Safety-Features)
- "Walking Buddy": Jemand begleitet dich nachts nach Hause

**Safety-Netzwerk**
- Vertrauenspersonen definieren (werden bei Inaktivität automatisch informiert)
- Community-Warnungen: "Vorsicht in Gegend X — wurde heute bestohlen"
- Notfall-Netzwerk: Andere TripForge-Nutzer in der Nähe können helfen
- Verifizierte Safe Spaces: Cafés, Hotels, Polizeistationen auf der Karte

### 7.5 Cost-Sharing mit anderen Reisenden

> *"Mietwagen teilen? Apartment teilen?"*

- **Ride-Sharing**: Fahrten zwischen Städten mit anderen Reisenden teilen (BlaBlaCar-Prinzip)
- **Unterkunft-Sharing**: Großes Apartment zusammen mit anderen Reisenden mieten
- **Aktivitäten-Sharing**: Gruppen-Rabatte nutzen durch Zusammenschluss
- **Mietwagen-Sharing**: Auto teilen für Tagesausflüge
- Kosten transparent aufteilen über das integrierte Expense-System
- Bewertungen für Zuverlässigkeit

### 7.6 Digital Nomad Community

> *Für Langzeitreisende und Remote Worker.*

- Coworking-Spaces finden & bewerten
- Internet-Geschwindigkeit pro Café/Ort (Community-reported)
- Nomad-Meetups: Wöchentliche Treffen an beliebten Nomad-Hubs
- Coliving-Spaces: Gemeinsam wohnen & arbeiten
- "Wer ist auch in Bali?" — Nomad-Radar
- Visa-Infos für digitale Nomaden (Remote-Work-Visa pro Land)

### 7.7 Volunteer & Austausch

> *Nicht nur Tourist sein — etwas zurückgeben.*

- Volunteer-Möglichkeiten am Reiseziel (wie Workaway, WWOOF)
- Kultur-Austausch: Bei Einheimischen mithelfen, dafür Unterkunft/Essen
- Umwelt-Projekte: Beach Cleanup, Naturschutz-Aktionen
- Community-Events: Lokale Feste, Charity-Events

---

## 8. Innovative & Unique Features

> *Features die TripForge von allen anderen abheben — kreativ, nützlich, überraschend.*

### 8.1 AR & Virtual Reality

- **Destination Preview**: 360°-Rundgang durch Hotel, Unterkunft, Sehenswürdigkeit — bevor man bucht
- **AR Navigation**: Kamera aufhalten → Pfeile auf der Straße zeigen den Weg
- **AR Speisekarte**: Kamera auf Speisekarte → Bilder der Gerichte einblenden
- **AR Sehenswürdigkeiten**: Kamera auf Gebäude → Historische Infos, Bewertungen einblenden
- **Virtuelle Rundgänge**: Destination vorab erkunden von zuhause

### 8.2 Barrierefreies Reisen (Accessibility)

- **Rollstuhl-gerechte Orte**: Filter für alle Unterkünfte, Restaurants, Aktivitäten
- Stufenloser Zugang, Aufzüge, Behindertenparkplätze, barrierefreie Toiletten
- Crowdsourced Datenbank (wie Wheelmap, AccessNow)
- Hörgeschädigten-freundlich: Visuelle Alerts, Untertitel-Services
- Sehgeschädigten-freundlich: Audio-Beschreibungen, Braille-Info
- Neurodivergent-freundlich: Reizarme Orte, ruhige Räume
- Barrierefreiheits-Score pro Ort (1-5 Sterne)

### 8.3 Familien-Features

- **Kinderfreundliche Orte**: Filter für Spielplätze, Kindermenüs, Hochstühle
- Wickelraum-Finder (wie Toiletten-Finder, aber für Eltern)
- Kinderwagen-Zugang prüfen (Treppen? Aufzug? Rampe?)
- Altersgerechte Aktivitäts-Empfehlungen
- Schulferien-Kalender (Crowd-Vorhersage)
- Kinder-Unterhaltung für lange Fahrten (Reise-Bingo, Spiele)
- Babysitter-Service am Reiseziel finden
- Kinderarzt in der Nähe

### 8.4 Reisen mit Haustier

- **Pet-Friendly Filter**: Hotels, Restaurants, Strände, Parks die Haustiere erlauben
- Airline-Regeln pro Haustier (Größe, Gewicht, Kabine vs. Frachtraum)
- Tierarzt in der Nähe am Reiseziel
- Pet-Sitter vor Ort finden
- Einreise-Bestimmungen für Tiere (EU-Heimtierausweis, Impfungen, Chip)
- Hundestrand-Finder
- Tier-Transport-Regeln pro Land

### 8.5 Nachhaltigkeit & CO₂-Tracking

- **CO₂-Fußabdruck pro Reise**: Berechnung basierend auf Transportmitteln
- Vergleich: Flug vs. Zug vs. Auto vs. Bus — CO₂-Emissionen
- CO₂-Offset-Möglichkeiten: Direkter Link zu Kompensations-Projekten
- **Nachhaltige Alternativen**: Eco-Hotels, Bio-Restaurants, lokale Anbieter statt Ketten
- Plastik-Vermeidungs-Tipps pro Destination
- "Grüne Route": CO₂-optimierte Reiseroute vorschlagen
- Slow-Travel-Empfehlungen: Längere Aufenthalte, weniger Transportemissionen

### 8.6 Foto-Spots & Fotografie

- **Beste Foto-Locations**: Kuratierte Liste der besten Fotospots pro Destination
- GPS-Koordinaten, beste Tageszeit, Beispielfotos
- "Golden Hour"-Rechner: Wann ist das Licht am besten
- Weniger bekannte Spots (nicht nur die Klassiker)
- Community-eingereichte Foto-Spots
- Kamera-Einstellungen-Empfehlungen pro Motiv

### 8.7 Kulturelle Immersion

- **Kochkurse vor Ort**: Lokale Kochkurse finden & buchen (Cookly, Cozymeal, EatWith)
- **Lokale Märkte**: Markt-Guide (wann, wo, was gibt es, Handeln erlaubt?)
- **Handwerks-Workshops**: Töpfern, Mosaik, Weben, Schmuck — lokales Handwerk lernen
- **Fest & Festival-Kalender**: Lokale Feste, religiöse Feiern, kulturelle Events
- **"Typisch lokal"**: Was muss man in dieser Region einmal gemacht haben
- **Lokale Etikette**: Wie grüßt man, was ist unhöflich, Dress Code in Kirchen/Tempeln

### 8.8 Medien-Empfehlungen zur Destination

> *Einstimmung auf das Reiseziel — Bücher, Filme, Musik, Podcasts.*

- **Bücher die dort spielen**: Literatur-Empfehlungen zum Reiseziel (z.B. "Der Leopard" für Sizilien)
- **Filme die dort gedreht wurden**: Film-Locations besuchen (z.B. "Der Pate" in Savoca, Sizilien)
- **Lokale Musik-Playlist**: Spotify-Playlist mit Musik aus der Region
- **Podcasts zum Reiseziel**: Reise-Podcasts, Geschichts-Podcasts, Kultur-Podcasts
- **Dokumentationen**: Natur-/Kultur-Dokus zum Einstimmen

### 8.9 Gamification & Challenges

- **Reise-Achievements**: Abzeichen für Meilensteine
  - "Erste Reise geplant", "10 Abstimmungen", "Budget-Master", "Frühbucher"
  - "Weltenbummler" (5 Länder), "Feinschmecker" (20 Restaurants bewertet)
- **Reise-Bingo**: Destination-spezifische Bingo-Karten (z.B. "Gelato gegessen", "Sonnenuntergang am Meer", "Markt besucht")
- **Gruppen-Challenges**: "Wer postet das beste Foto?", "Wer entdeckt den besten Geheimtipp?"
- **Reise-Streaks**: "3 Reisen in einem Jahr!"
- **Punkte-System**: Punkte für Community-Beiträge, Reviews, geteilte Tipps
- **Leaderboard**: Freunde-Rangliste (spielerisch, nicht kompetitiv)

### 8.10 Reise-Zeitkapsel

- **Erinnerung versiegeln**: Am Ende der Reise eine Nachricht/Fotos an das "Zukunfts-Ich" schreiben
- Öffnet sich automatisch in 1 Jahr ("Erinnerst du dich?")
- Gruppen-Zeitkapsel: Jeder schreibt eine Nachricht, alle öffnen gleichzeitig
- Jahrestag-Erinnerungen: "Vor genau einem Jahr wart ihr in Sizilien"

### 8.11 Smart Device Integration

- **Gepäck-Tracking**: AirTag/Tile-Tracker für Koffer — Status in der App
- "Mein Koffer ist angekommen" / "Mein Koffer ist noch in München" — Live-Status
- **Smartwatch-Integration**: Quick-Infos am Handgelenk (nächste Aktivität, Wetter, Navigation)
- Boarding-Pass auf der Smartwatch
- "Wo ist die Gruppe?"-Karte auf der Watch

### 8.12 Loyalty & Punkte-Optimierung

- **Alle Treueprogramme an einem Ort**: Vielflieger-Meilen, Hotel-Punkte, Kreditkarten-Punkte
- Punkte-Verfall-Warnung
- "Wie setze ich meine Meilen am besten ein?" — Optimierungs-Empfehlung
- Status-Tracking: Wie weit bis zum nächsten Status-Level

### 8.13 Reise-Garderobe & Outfit-Planer

- **Capsule Wardrobe**: Minimale Kleidungsstücke, maximale Kombinationen
- Outfit pro Tag vorplanen (basierend auf Wetter + Aktivität)
- "Wiederholungs-Manager": Kleidungsstücke durchrotieren ohne Wiederholung aufzufallen
- Wäsche-Planer: Wann waschen, um mit weniger auszukommen
- Packliste basierend auf geplanten Outfits

### 8.14 Miet-Dokumentation

- **Schäden dokumentieren**: Bei Mietwagen/Apartment — Fotos mit Zeitstempel bei Check-in
- Zustandsprotokoll erstellen
- Check-out: Vergleichsfotos
- Bei Streit: Dokumentation als Beweis
- Kautions-Tracking: Wann wird Kaution zurückerstattet

### 8.15 Wellness & Spa

- Spa & Wellness-Finder am Reiseziel
- Massage, Yoga, Meditation, Thermalbad, Hammam
- Preise, Bewertungen, Buchung
- "Erholungstag"-Empfehlung nach aktiven Tagen
- Yoga-Spots im Freien (Strand, Park)

### 8.16 Mikro-Abenteuer

- **"Was kann ich in 2 Stunden machen?"** — Spontane Kurzaktivitäten in der Nähe
- Kleine Wanderungen, versteckte Strände, lokale Märkte, Aussichtspunkte
- "Off the beaten path"-Empfehlungen
- Surprise-Modus: "Überrasch mich mit etwas in der Nähe!"
- Nacht-Aktivitäten: Nachtwanderung, Sternbeobachtung, Nachtmärkte

---

## 9. Design-Philosophie & Regeln

> *Sektions-Nummern: 1=Vision, 2=Recherche, 3=Management, 4=Lifecycle, 5=Alerts, 6=Features, 7=Community, 8=Innovative, 9=Design, 10=UX, 11=Erweiterungen, 12=Zusammenfassung*

> *Das Design ist kein Nachgedanke — es ist der Kern. TripForge soll sich anfühlen wie ein Produkt von Linear, Notion oder Stripe.*

### 7.1 Premium-Ästhetik

**"Wow, einfach geil."** — Das ist die Reaktion die jeder haben soll, wenn er TripForge zum ersten Mal öffnet.

- **Clean & Aufgeräumt**: Kein visuelles Rauschen. Jedes Element hat einen Zweck.
- **Modern**: Aktuelle Design-Trends (2025/2026) — aber zeitlos, nicht trendy.
- **Ansprechend fürs Auge**: Farben, Typografie, Spacing — alles harmoniert.
- **Liebe zum Detail**: Schatten, Übergänge, Hover-States, Icons — alles durchdacht.
- **Konsistenz**: Gleiche Patterns überall. Ein Button sieht überall gleich aus.

**Referenz-Apps für Look & Feel:**
- **Linear**: Minimalistisch, schnell, professionell
- **Notion**: Flexibel, clean, einladend
- **Figma**: Kollaborativ, modern, kraftvoll
- **Stripe**: Dashboard-Design, Datenvisualisierung, Premium-Feel
- **Apple HIG**: Klarheit, Tiefe, Konsistenz
- **Material Design 3**: Dynamische Farben, adaptive Layouts

### 7.2 Farb-System

- **Primärfarbe**: Warm, einladend, reise-assoziiert (z.B. warmes Blau, Teal, Terrakotta)
- **Akzentfarbe**: Für CTAs und Highlights — muss Aufmerksamkeit ziehen
- **Semantische Farben**: Grün (Erfolg/Gebucht), Gelb (Warnung/Vielleicht), Rot (Fehler/Abgesagt), Blau (Info)
- **Neutrale Skala**: 10+ Abstufungen von fast-schwarz bis fast-weiß
- **Dark Mode**: Vollständige Unterstützung mit eigenem Farbschema
- **Farben für Personen**: Jeder Teilnehmer hat eine eigene Farbe (für Avatare, Beiträge, Markierungen)

### 7.3 Typografie

- **Hauptschrift**: Moderne Sans-Serif (Inter, Plus Jakarta Sans, oder ähnlich)
- **Display**: Groß, bold — für Seitenüberschriften
- **Headings**: Klar abgestuft (H1 → H4)
- **Body**: Optimale Lesbarkeit (15-16px, 1.5-1.65 Zeilenhöhe)
- **Small/Caption**: Für Meta-Infos, Timestamps, Labels
- **Monospace**: Für Zahlen, Codes, Daten (optional)
- **Gewichtungen**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### 7.4 Spacing & Layout

- **Base Unit**: 4px (alle Abstände sind Vielfache davon)
- **Spacing-Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- **Großzügiges Whitespace**: Elemente atmen lassen — nicht alles zusammenquetschen
- **Grid-System**: 12-Spalten auf Desktop, responsive Reduktion auf Tablet/Mobile
- **Container-Breiten**: Max-Width für Lesbarkeit (z.B. 1200px content, 1400px wide)
- **Card-Padding**: Konsistent 20-24px
- **Section-Margins**: 32-48px zwischen Abschnitten

### 7.5 Schatten & Tiefe

- **Mehrere Schatten-Stufen**: XS (subtil), SM (Cards), MD (erhöht), LG (Navigation/Overlays)
- **Hover-Schatten**: Elemente "heben sich" beim Hover leicht an
- **Keine harten Schatten**: Immer weich und diffus
- **Konsistenz**: Gleiche Schattenstufe für gleiche Elementtypen

### 7.6 Border-Radius

- **Konsistente Radien**: Klein (6px Buttons/Inputs), Mittel (10-12px Cards), Groß (20px Pills/Badges), Rund (Avatare)
- **Niemals mixed** — innerhalb einer Komponente immer gleicher Radius

### 7.7 Icons

- **Einheitlicher Icon-Set**: Lucide, Phosphor, oder Hero Icons — einen wählen, dabei bleiben
- **Konsistente Größe**: Icons immer gleich groß im gleichen Kontext
- **Nicht überladen**: Icons nur wo sie helfen, nicht als Dekoration
- **Aussagekräftig**: Jedes Icon sofort verständlich

### 7.8 Animationen & Micro-Interactions

- **Purposeful Motion**: Jede Animation hat einen Zweck (Feedback, Orientierung, Freude)
- **Schnell**: Max. 200-300ms für UI-Transitions. Nichts soll sich langsam anfühlen.
- **Smooth**: 60fps, keine Ruckler. Lieber keine Animation als eine schlechte.
- **Hover-States**: Subtile Farbänderung, leichter Schatten-Lift
- **Click-Feedback**: Button drückt sich leicht ein (scale 0.98)
- **Page-Transitions**: Sanfte Übergänge zwischen Bereichen
- **Loading-States**: Skeleton-Screens statt Spinner (wo möglich)
- **Toast-Notifications**: Slide-in von oben oder unten, auto-dismiss
- **Drag & Drop**: Visuelles Feedback beim Ziehen (Element wird leicht transparent, Ziel leuchtet)
- **Erfolgs-Animations**: Konfetti bei abgeschlossener Buchung, Checkmark-Animation bei erledigter Aufgabe

### 7.9 Desktop-Optimierung

- **Multi-Panel-Layouts**: Sidebar + Content + Detail (wie Linear, Notion)
- **Keyboard-Shortcuts**: Power-User können alles per Tastatur steuern
- **Hover-States**: Volle Nutzung von Hover für zusätzliche Infos
- **Drag & Drop**: Vollständige Unterstützung
- **Tabellen & Listen**: Breitere, datenreichere Ansichten
- **Split-View**: Zwei Bereiche nebeneinander (z.B. Karte + Liste)
- **Contextual Menus**: Rechtsklick-Menüs für schnelle Aktionen

### 7.10 Mobile-Optimierung

- **Touch-First**: Große Tap-Targets (min. 44x44px)
- **Thumb-Zone**: Wichtige Actions im unteren Bildschirmbereich
- **Swipe-Gesten**: Links/Rechts-Swipe für Aktionen (erledigt, löschen, etc.)
- **Bottom-Navigation**: Hauptbereiche über Bottom-Tab-Bar erreichbar
- **Pull-to-Refresh**: Daten aktualisieren durch Herunterziehen
- **Sheet-Modals**: Overlays von unten (statt zentrierte Popups)
- **Kein Pinch-to-Zoom nötig**: Alles lesbar ohne Zoomen
- **Native-Feel**: Soll sich anfühlen wie eine native App, nicht wie eine Website im Browser

---

## 10. UX-Prinzipien

> *Die App ist für 5 Freunde die zusammen in den Urlaub fahren — nicht für Enterprise-IT-Manager.*

### 8.1 Sofort nutzbar — Zero Onboarding

- **Keine Tutorial-Screens, keine Walkthroughs, keine "Willkommen bei TripForge"-Popups**
- Die UI ist so intuitiv, dass man sofort loslegen kann
- Bekannte Patterns verwenden (jeder weiß was ein + Button tut)
- Kontextuelle Hilfe nur wenn nötig (Tooltip bei komplexeren Features)
- **Progressive Onboarding**: Features entdecken sich beim Benutzen, nicht vorher

### 8.2 Progressive Disclosure — Einfach starten, später verfeinern

- **Oberfläche zeigt erst das Wesentliche** — Detailoptionen sind versteckt aber erreichbar
- Beispiel: Ausgabe eintragen = Betrag + wer hat bezahlt. Erweitert: Kategorie, für wen, Währung, Beleg
- Beispiel: Aktivität hinzufügen = Name + Ort. Erweitert: Öffnungszeiten, Preis, Dauer, Koordinaten
- **Settings getrennt vom Hauptflow**: Feintuning stört nicht die normale Nutzung
- "Erweitert"-Optionen in Accordion/Collapsible, nicht direkt sichtbar
- **Smart Defaults**: Sinnvolle Standardwerte, damit man nicht alles konfigurieren MUSS

### 8.3 Alles dynamisch & bearbeitbar

- **Nichts ist hardcoded**: Alle Daten, Listen, Optionen sind vom Nutzer bearbeitbar
- Jeder eingetragene Wert ist editierbar (Inline-Edit oder Edit-Modal)
- Listen sind erweiterbar (Hinzufügen-Button) und reduzierbar (Löschen mit Bestätigung)
- Reihenfolgen sind änderbar (Drag & Drop)
- Teilnehmeranzahl ist dynamisch (nicht auf 5 fixiert)
- **Gespeichert in Datenbank**, nicht im Code — alle dynamischen Werte persistent
- Einstellungen bis ins kleinste Detail änderbar — aber über eine dedizierte Settings-Seite, nicht inline

### 8.4 Feedback bei jeder Aktion

- **Toast-Notifications**: "Ausgabe gespeichert", "Abstimmung abgegeben", "Aufgabe erledigt"
- **Optimistisches UI**: Aktion sofort sichtbar, Background-Sync
- **Fehler klar kommunizieren**: Nicht "Error 500" sondern "Konnte nicht gespeichert werden, bitte nochmal versuchen"
- **Bestätigung bei destruktiven Aktionen**: "Aktivität löschen? Das kann nicht rückgängig gemacht werden."
- **Undo wo möglich**: "Ausgabe gelöscht. [Rückgängig]" — 5 Sekunden Zeitfenster
- **Loading-States**: Skeleton-Screens, Progress-Bars, niemals leere Screens
- **Empty-States**: Freundliche Illustration + CTA wenn ein Bereich noch leer ist ("Noch keine Aktivitäten. Füge die erste hinzu!")

### 8.5 Intuitive Navigation

- **Klare Informationsarchitektur**: Max. 2-3 Navigationsebenen
- **Breadcrumbs**: Immer wissen wo man ist
- **Globale Navigation**: Alle Hauptbereiche sofort erreichbar (Sidebar Desktop, Bottom-Bar Mobile)
- **Kontextuelle Navigation**: Innerhalb eines Bereichs zwischen Unterbereichen wechseln
- **Back-Button funktioniert**: Browser-History korrekt, kein Zustand-Verlust
- **Deep-Links**: Jede Ansicht hat eine teilbare URL
- **Quick-Actions**: Die häufigsten Aktionen sind maximal 1-2 Klicks entfernt

### 8.6 Barrierefreiheit (Accessibility)

- **Kontrast-Ratio**: Mindestens WCAG AA (4.5:1 für Text, 3:1 für große Elemente)
- **Keyboard-Navigation**: Alles per Tab/Enter/Escape steuerbar
- **Focus-States**: Sichtbare Fokus-Indikatoren
- **ARIA-Labels**: Für alle interaktiven Elemente
- **Screen-Reader-kompatibel**: Semantisches HTML, sinnvolle Heading-Hierarchie
- **Reduzierte Bewegung**: `prefers-reduced-motion` respektieren
- **Farbunabhängig**: Information nie NUR über Farbe vermittelt (immer auch Text/Icon)

### 8.7 Performance-Obsession

- **Sofortige Reaktion**: UI reagiert in < 100ms auf Interaktionen
- **Schnelle Ladezeiten**: First Contentful Paint < 1.5s
- **Keine unnötigen Ladezeiten**: Lazy Loading, Code Splitting
- **Smooth Scrolling**: 60fps, keine Ruckler
- **Offline-First Mindset**: Lokale Daten bevorzugen, im Hintergrund synchronisieren

### 8.8 Emotionales Design

- **Freude am Benutzen**: Die App soll Vorfreude auf die Reise erzeugen
- **Kleine Überraschungen**: Konfetti bei Meilenstein, Emoji-Reactions, witzige Empty-States
- **Persönlich**: Farben pro Person, Avatare, "Dein Reiseplan"
- **Motivierend**: Fortschrittsbalken, "Noch X Tage bis zur Reise!", erledigte Aufgaben feiern
- **Kein Stress**: Die App hilft Chaos zu vermeiden, nicht neues zu erzeugen

---

## 11. Zusätzliche Erweiterungsideen

> *Nice-to-Have Features für spätere Versionen.*

### AI-Features
- AI-generierte Reisepläne basierend auf Präferenzen der Gruppe
- Chatbot: "Schlag mir ein Restaurant für heute Abend vor"
- Automatische Beleg-Erkennung (Foto → Ausgabe mit Betrag und Kategorie)
- Smart Packing: AI schlägt Packliste vor basierend auf Wetter + Aktivitäten
- Reise-Zusammenfassung als Text generieren lassen

### Social & Community
- Öffentliche Reise-Tagebücher
- Community-Tipps pro Destination
- "Freunde einladen" über Social Media
- Reise-Bewertungen öffentlich teilen

### Gamification
- Achievements: "Erste Reise geplant", "10 Abstimmungen abgegeben", "Budget-Master"
- Reise-Streaks: "3 Reisen in einem Jahr"
- Gruppen-Challenges: "Wer postet das beste Foto?"

### Business/Pro Features
- Reiseveranstalter-Modus: Trips für Kunden organisieren
- Zahlungsabwicklung: Teilnehmer zahlen direkt über die Plattform
- White-Label: Eigenes Branding für Veranstalter
- Analytics: Reise-Statistiken über mehrere Trips

### Weitere Integrationen
- Spotify: Gemeinsame Reise-Playlist
- Instagram: Fotos direkt posten
- Google Translate / DeepL: Echtzeit-Übersetzung
- Uber/Bolt/Lyft: Ride direkt buchen
- OpenTable/Resy/TheFork: Restaurant-Reservierung
- Flixbus/DB/Trenitalia/Trainline: Tickets buchen
- Ferryhopper: Fährtickets buchen
- Revolut/Wise/N26: Multi-Währungs-Zahlungen
- Bring!/AnyList: Einkaufslisten-Sync
- Polarsteps: Reise-Tracking importieren
- Airalo/Nomad: eSIM direkt kaufen
- Viator/GetYourGuide: Aktivitäten buchen
- Rome2Rio: Transport-Vergleich
- Komoot: Wander-/Radrouten
- Citymapper/Moovit: ÖPNV-Navigation
- HappyCow: Vegane Restaurant-Suche
- Flush: Toiletten-Finder
- Life360/Find My: Standort-Sharing

---

## 12. Zusammenfassung

TripForge deckt den **gesamten Reise-Lifecycle** ab:

```
Inspiration → Gruppe → Termine → Recherche → Buchung → Vorbereitung → Reise → Abschluss
     ↑                                                                              ↓
     └──────────────────────── Nächste Reise planen ◄───────────────────────────────┘
```

**500+ Features** in einer Anwendung, die sich anfühlt wie ein Premium-Produkt — professionell, intuitiv, ein Genuss zu benutzen.

Das Ziel: **Man nimmt TripForge in die Hand und will nie wieder ohne verreisen.**
