// ─── Praktische Infos - Daten ───

var NOTFALLNUMMERN = [
  { name: 'Europ\u00e4ischer Notruf',       nummer: '112',              icon: '\u{1F6A8}', beschreibung: 'Polizei, Feuerwehr, Rettung' },
  { name: 'Carabinieri',                    nummer: '113',              icon: '\u{1F46E}', beschreibung: 'Milit\u00e4rpolizei / allg. Polizei' },
  { name: 'Rettungsdienst',                 nummer: '118',              icon: '\u{1F691}', beschreibung: 'Medizinischer Notfall' },
  { name: 'Feuerwehr',                      nummer: '115',              icon: '\u{1F692}', beschreibung: 'Vigili del Fuoco' },
  { name: 'Deutsche Botschaft Rom',         nummer: '+39 06 49213-1',   icon: '\u{1F1E9}\u{1F1EA}', beschreibung: 'Konsularische Hilfe' },
  { name: 'ADAC Auslandsnotruf',            nummer: '+49 89 22 22 22',  icon: '\u{1F697}', beschreibung: 'Pannenhilfe im Ausland' },
  { name: 'Ospedale Civico Palermo',        nummer: '',                 icon: '\u{1F3E5}', beschreibung: 'Piazza Nicola Leotta, 4 - Palermo' }
];

var DOKUMENTE_CHECK = [
  { name: 'Personalausweis / Reisepass',      pflicht: true  },
  { name: 'EHIC Krankenversicherungskarte',   pflicht: true  },
  { name: 'F\u00fchrerschein',                pflicht: false },
  { name: 'Buchungsbest\u00e4tigungen',       pflicht: true  },
  { name: 'Flugtickets',                      pflicht: true  },
  { name: 'Mietwagen-Voucher',                pflicht: false },
  { name: 'Kreditkarte',                      pflicht: true  },
  { name: 'Bargeld Euro',                     pflicht: true  },
  { name: 'Notfallnummern-Liste',             pflicht: false }
];

var LOKALE_TIPPS = [
  {
    kategorie: 'Geld',
    icon: '\u{1F4B6}',
    tipps: [
      'Trinkgeld 1\u20132\u00a0\u20ac ist normal und wird gesch\u00e4tzt',
      'Kreditkarten werden fast \u00fcberall akzeptiert',
      'Geldautomaten hei\u00dfen "Bancomat" \u2013 Geb\u00fchren pr\u00fcfen!',
      'Coperto (Gedeck) von 1\u20133\u00a0\u20ac pro Person ist \u00fcblich'
    ]
  },
  {
    kategorie: 'Essen',
    icon: '\u{1F35D}',
    tipps: [
      'Mittagessen: 12\u201314 Uhr (pranzo)',
      'Abendessen: ab 20 Uhr (cena) \u2013 vorher sind Restaurants oft leer',
      'Aperitivo ab 18 Uhr \u2013 oft mit kleinen Snacks inklusive',
      'Coperto ist das Gedeck \u2013 kein Trinkgeld, sondern Servicepauschale',
      'Leitungswasser bestellen: "acqua del rubinetto"'
    ]
  },
  {
    kategorie: 'Verkehr',
    icon: '\u{1F6A7}',
    tipps: [
      'ZTL-Zonen in Palermo: Einfahrt f\u00fcr Nicht-Anwohner verboten! Kameras kontrollieren automatisch.',
      'Benzin ist teurer als in Deutschland \u2013 vorher volltanken lohnt sich',
      'Parkregeln beachten: Blau = kostenpflichtig, Wei\u00df = frei, Gelb = Anwohner',
      'Kreisverkehr = Abenteuer \u2013 wer drin ist, hat nicht immer Vorfahrt'
    ]
  },
  {
    kategorie: 'Kultur',
    icon: '\u{1F3DB}\uFE0F',
    tipps: [
      'Siesta 13\u201316 Uhr: Viele Gesch\u00e4fte und Sehensw\u00fcrdigkeiten sind geschlossen',
      'In Kirchen Knie und Schultern bedecken \u2013 sonst kein Eintritt',
      'Laut sein ist normal und kein Zeichen von Unhoflichkeit',
      'Handeln auf M\u00e4rkten (z.B. Ballar\u00f2, Vucciria) ist erwartet und ok'
    ]
  },
  {
    kategorie: 'Sicherheit',
    icon: '\u{1F6E1}\uFE0F',
    tipps: [
      'Wertsachen nicht offen tragen \u2013 besonders Handy und Kamera',
      'Tasche vorne tragen in Menschenmengen und \u00f6ffentlichen Verkehrsmitteln',
      'Kopien von allen wichtigen Dokumenten anfertigen (digital + Papier)'
    ]
  }
];

var WETTER_JUNI = {
  min: 19,
  max: 28,
  wassertemp: 22,
  sonnenstunden: 11,
  regentage: 2,
  empfehlung: 'Leichte Sommerkleidung, Sonnencreme (LSF 30+), Sonnenhut und Sonnenbrille einpacken. F\u00fcr Abende ein leichtes Langarm-Shirt mitnehmen. Badekleidung nicht vergessen! Bequeme Laufschuhe f\u00fcr Sightseeing sind ein Muss.'
};

var NUETZLICHE_SAETZE = [
  // Begrüßung
  { kategorie: 'Begr\u00fc\u00dfung', deutsch: 'Guten Tag',                       italienisch: 'Buongiorno',                  aussprache: 'Buon-DSHOR-no' },
  { kategorie: 'Begr\u00fc\u00dfung', deutsch: 'Guten Abend',                      italienisch: 'Buonasera',                   aussprache: 'Buona-SEH-ra' },
  { kategorie: 'Begr\u00fc\u00dfung', deutsch: 'Tsch\u00fcss / Hallo',             italienisch: 'Ciao',                        aussprache: 'Tschau' },
  { kategorie: 'Begr\u00fc\u00dfung', deutsch: 'Danke',                             italienisch: 'Grazie',                      aussprache: 'GRAH-tsieh' },
  { kategorie: 'Begr\u00fc\u00dfung', deutsch: 'Bitte',                             italienisch: 'Per favore',                  aussprache: 'Per fa-WOH-reh' },
  // Restaurant
  { kategorie: 'Restaurant',          deutsch: 'Einen Tisch f\u00fcr f\u00fcnf, bitte', italienisch: 'Un tavolo per cinque, per favore', aussprache: 'Un TAH-wolo per TSCHIN-kweh' },
  { kategorie: 'Restaurant',          deutsch: 'Die Rechnung, bitte',               italienisch: 'Il conto, per favore',        aussprache: 'Il KON-to, per fa-WOH-reh' },
  { kategorie: 'Restaurant',          deutsch: 'Sehr lecker!',                      italienisch: 'Buonissimo!',                 aussprache: 'Buon-IS-simo' },
  { kategorie: 'Restaurant',          deutsch: 'Noch ein Bier, bitte',              italienisch: 'Un\'altra birra, per favore', aussprache: 'Un-AL-tra BIR-ra' },
  { kategorie: 'Restaurant',          deutsch: 'Was empfehlen Sie?',                italienisch: 'Cosa consiglia?',             aussprache: 'KOH-sa kon-SIL-ja' },
  // Einkaufen
  { kategorie: 'Einkaufen',           deutsch: 'Wie viel kostet das?',              italienisch: 'Quanto costa?',               aussprache: 'KWAN-to KOS-ta' },
  { kategorie: 'Einkaufen',           deutsch: 'Zu teuer!',                         italienisch: 'Troppo caro!',                aussprache: 'TROP-po KAH-ro' },
  { kategorie: 'Einkaufen',           deutsch: 'Ich nehme es',                      italienisch: 'Lo prendo',                   aussprache: 'Lo PREN-do' },
  // Notfall
  { kategorie: 'Notfall',             deutsch: 'Hilfe!',                            italienisch: 'Aiuto!',                      aussprache: 'Ah-JUH-to' },
  { kategorie: 'Notfall',             deutsch: 'Ich brauche einen Arzt',            italienisch: 'Ho bisogno di un medico',     aussprache: 'Oh bi-SON-jo di un MEH-diko' },
  { kategorie: 'Notfall',             deutsch: 'Rufen Sie die Polizei',             italienisch: 'Chiami la polizia',           aussprache: 'KJAH-mi la po-li-TSIA' },
  // Allgemein
  { kategorie: 'Allgemein',           deutsch: 'Entschuldigung',                    italienisch: 'Scusi',                       aussprache: 'SKUH-si' },
  { kategorie: 'Allgemein',           deutsch: 'Wo ist die Toilette?',              italienisch: 'Dov\'\u00e8 il bagno?',       aussprache: 'Dow-EH il BAN-jo' },
  { kategorie: 'Allgemein',           deutsch: 'Ich spreche kein Italienisch',      italienisch: 'Non parlo italiano',          aussprache: 'Non PAR-lo itali-AH-no' },
  { kategorie: 'Allgemein',           deutsch: 'Ja / Nein',                         italienisch: 'S\u00ec / No',                aussprache: 'Si / No' }
];

var SPEZIALITAETEN = [
  { name: 'Arancini',          beschreibung: 'Frittierte Reisb\u00e4llchen gef\u00fcllt mit Rag\u00f9, Mozzarella oder Spinat. Das Street-Food-Highlight Siziliens.', preis: '1,50\u20133 \u20ac', bild: '\u{1F35A}' },
  { name: 'Cannoli',           beschreibung: 'Knusprige R\u00f6llchen gef\u00fcllt mit s\u00fc\u00dfer Ricotta-Creme, oft mit Pistazien oder Schokolade. Ein Muss!',   preis: '2\u20134 \u20ac',    bild: '\u{1F36C}' },
  { name: 'Pasta alla Norma', beschreibung: 'Pasta mit Auberginen, Tomatenso\u00dfe, Ricotta salata und Basilikum. Ein Klassiker aus Catania.',                       preis: '8\u201312 \u20ac',   bild: '\u{1F35D}' },
  { name: 'Granita',           beschreibung: 'Halbgefrorenes Eis aus frischen Fr\u00fcchten (Zitrone, Mandel, Maulbeere) \u2013 perfekt zum Fr\u00fchst\u00fcck mit Brioche!', preis: '2\u20134 \u20ac',    bild: '\u{1F9CA}' },
  { name: 'Panelle',           beschreibung: 'Frittierte Kichererbsen-Fladen, oft im Br\u00f6tchen serviert. Typisch Palermo-Street-Food.',                            preis: '1,50\u20133 \u20ac', bild: '\u{1F35E}' },
  { name: 'Sfincione',         beschreibung: 'Sizilianische Pizza: dicker, fluffiger Teig mit Tomatenso\u00dfe, Zwiebeln, Sardellen und Caciovallo-K\u00e4se.',         preis: '2\u20135 \u20ac',    bild: '\u{1F355}' },
  { name: 'Caponata',          beschreibung: 'S\u00fc\u00df-saurer Auberginen-Eintopf mit Sellerie, Kapern, Oliven und Tomaten. Perfekte Vorspeise.',                   preis: '5\u20138 \u20ac',    bild: '\u{1F346}' },
  { name: 'Pasta con le sarde', beschreibung: 'Pasta mit Sardinen, wildem Fenchel, Pinienkernen und Rosinen. Einzigartig sizilianisch!',                               preis: '9\u201313 \u20ac',   bild: '\u{1F41F}' },
  { name: 'Cassata',           beschreibung: 'Aufwendige Torte aus Biskuit, Ricotta, Marzipan und kandierten Fr\u00fcchten. Festtagsklassiker.',                        preis: '4\u20136 \u20ac',    bild: '\u{1F370}' }
];

var ENTFERNUNGEN = [
  { ziel: 'Cefal\u00f9',   autoMinuten: 70,  autoKm: 70,  zugMinuten: 60,  zugPreis: '6,50 \u20ac' },
  { ziel: 'Monreale',       autoMinuten: 20,  autoKm: 10,  zugMinuten: null, zugPreis: '\u2013' },
  { ziel: 'Erice',          autoMinuten: 90,  autoKm: 95,  zugMinuten: 120, zugPreis: '9,50 \u20ac' },
  { ziel: 'Agrigento',      autoMinuten: 150, autoKm: 130, zugMinuten: 135, zugPreis: '9,00 \u20ac' },
  { ziel: 'Taormina',       autoMinuten: 180, autoKm: 255, zugMinuten: 210, zugPreis: '13,50 \u20ac' },
  { ziel: 'Catania',        autoMinuten: 165, autoKm: 210, zugMinuten: 180, zugPreis: '13,50 \u20ac' },
  { ziel: 'Siracusa',       autoMinuten: 210, autoKm: 260, zugMinuten: 300, zugPreis: '15,00 \u20ac' }
];
