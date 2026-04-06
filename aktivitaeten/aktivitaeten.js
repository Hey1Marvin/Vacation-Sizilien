/**
 * Aktivitäten & Sehenswürdigkeiten für Sizilien Urlaub Juni 2026
 */

const AKTIVITAETEN = [
  {
    id: 1,
    name: "Kathedrale von Palermo",
    kategorie: "sehenswuerdigkeit",
    ort: "Palermo Zentrum",
    kosten: "Kostenlos (D\u00E4cher: 5\u20AC)",
    dauer: "1-2 Stunden",
    beschreibung: "Beeindruckende normannische Kathedrale aus dem 12. Jh. mit K\u00F6nigsgr\u00E4bern. Dachbegehung mit Panoramablick!",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1148, mapLng: 13.3564
  },
  {
    id: 2,
    name: "Teatro Massimo",
    kategorie: "sehenswuerdigkeit",
    ort: "Palermo Zentrum",
    kosten: "8\u20AC (F\u00FChrung)",
    dauer: "1 Stunde",
    beschreibung: "Gr\u00F6\u00DFtes Opernhaus Italiens und drittgr\u00F6\u00DFtes Europas. Bekannt aus \"Der Pate III\".",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1199, mapLng: 13.3568
  },
  {
    id: 3,
    name: "Mondello Beach",
    kategorie: "strand",
    ort: "Mondello (10 km von Palermo)",
    kosten: "Kostenlos (Liegen: 10-15\u20AC)",
    dauer: "Halber Tag",
    beschreibung: "Der beliebteste Strand Palermos mit t\u00FCrkisblauem Wasser und feinem Sand. Im Juni noch nicht zu voll.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1824, mapLng: 13.3244
  },
  {
    id: 4,
    name: "Mercato di Ballaro",
    kategorie: "sehenswuerdigkeit",
    ort: "Palermo Zentrum (Albergheria)",
    kosten: "Kostenlos (Essen: 5-15\u20AC)",
    dauer: "1-2 Stunden",
    beschreibung: "\u00C4ltester Stra\u00DFenmarkt Palermos. Frisches Obst, Streetfood (Arancini, Panelle, Sfincione), lokales Flair.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1096, mapLng: 13.3581
  },
  {
    id: 5,
    name: "Cappella Palatina",
    kategorie: "sehenswuerdigkeit",
    ort: "Palazzo dei Normanni, Palermo",
    kosten: "12\u20AC",
    dauer: "1-2 Stunden",
    beschreibung: "Atemberaubende byzantinische Mosaiken aus dem 12. Jh. im Normannenpalast. UNESCO-Weltkulturerbe.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1103, mapLng: 13.3533
  },
  {
    id: 6,
    name: "Cefal\u00F9 (Tagesausflug)",
    kategorie: "ausflug",
    ort: "Cefal\u00F9 (70 km \u00F6stlich)",
    kosten: "Zug: ~12\u20AC hin/r\u00FCck",
    dauer: "Ganzer Tag",
    beschreibung: "Malerisches K\u00FCstenst\u00E4dtchen mit normannischem Dom, Altstadt und wundersch\u00F6nem Strand. Per Zug erreichbar.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.0386, mapLng: 14.0229
  },
  {
    id: 7,
    name: "Strand von Isola delle Femmine",
    kategorie: "strand",
    ort: "Isola delle Femmine",
    kosten: "Kostenlos",
    dauer: "Halber Tag",
    beschreibung: "Lokaler Strand direkt bei mehreren unserer Unterk\u00FCnfte. Ruhiger als Mondello.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.1868, mapLng: 13.2388
  },
  {
    id: 8,
    name: "Streetfood-Tour Palermo",
    kategorie: "restaurant",
    ort: "Palermo Altstadt",
    kosten: "15-30\u20AC p.P.",
    dauer: "2-3 Stunden",
    beschreibung: "Palermo ist die Streetfood-Hauptstadt Europas! Arancini, Panelle, Sfincione, Stigghiola, Cannoli...",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1157, mapLng: 13.3615
  },
  {
    id: 9,
    name: "Monreale (Dom & Kreuzgang)",
    kategorie: "ausflug",
    ort: "Monreale (8 km von Palermo)",
    kosten: "6\u20AC",
    dauer: "Halber Tag",
    beschreibung: "Spektakul\u00E4re goldene Mosaiken im Dom von Monreale. Der Kreuzgang ist ein Meisterwerk der Romanik.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.0818, mapLng: 13.2909
  },
  {
    id: 10,
    name: "Quattro Canti & Pretoria-Brunnen",
    kategorie: "sehenswuerdigkeit",
    ort: "Palermo Zentrum",
    kosten: "Kostenlos",
    dauer: "30 Minuten",
    beschreibung: "Barocker Platz im Herzen Palermos. Der Pretoria-Brunnen (\"Brunnen der Schande\") ist direkt nebenan.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1154, mapLng: 13.3623
  },
  {
    id: 11,
    name: "Trattoria Ai Cascinari",
    kategorie: "restaurant",
    ort: "Palermo Zentrum (Ballaro)",
    kosten: "15-25\u20AC p.P.",
    dauer: "1-2 Stunden",
    beschreibung: "Traditionelle sizilianische K\u00FCche direkt am Ballaro-Markt. Pasta alla Norma und frischer Fisch. Reservierung empfohlen!",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.1102, mapLng: 13.3578
  },
  {
    id: 12,
    name: "Antica Focacceria San Francesco",
    kategorie: "restaurant",
    ort: "Palermo Zentrum",
    kosten: "10-20\u20AC p.P.",
    dauer: "1 Stunde",
    beschreibung: "Seit 1834! Ber\u00FChmte Focaccia, Panelle, Arancini und Milzbrötchen (Pani ca' meusa). Sizilianisches Fast Food deluxe.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "must-do",
    mapLat: 38.1142, mapLng: 13.3667
  },
  {
    id: 13,
    name: "Gelateria Cappadonia",
    kategorie: "restaurant",
    ort: "Palermo (Via Colonna Rotta)",
    kosten: "3-5\u20AC",
    dauer: "30 Minuten",
    beschreibung: "Preisgekr\u00F6ntes handgemachtes Eis. Granita mit Brioche zum Fr\u00FChst\u00FCck ist ein Muss!",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.1170, mapLng: 13.3590
  },
  {
    id: 14,
    name: "Pizzeria Frida",
    kategorie: "restaurant",
    ort: "Palermo Zentrum",
    kosten: "8-15\u20AC p.P.",
    dauer: "1 Stunde",
    beschreibung: "Hipster-Pizzeria mit kreativen Belag-Kombinationen und lokalen Zutaten. Tolle Atmosph\u00E4re, oft voll.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.1195, mapLng: 13.3612
  },
  {
    id: 15,
    name: "Fischmarkt La Vucciria",
    kategorie: "sehenswuerdigkeit",
    ort: "Palermo (Vucciria-Viertel)",
    kosten: "Kostenlos (Essen: 5-15\u20AC)",
    dauer: "1 Stunde",
    beschreibung: "Historischer Fisch- und Stra\u00DFenmarkt. Abends verwandelt er sich in eine Kneipenmeile. Authentisches Palermo-Erlebnis.",
    link: "",
    vorgeschlagenVon: "",
    prioritaet: "nice-to-have",
    mapLat: 38.1178, mapLng: 13.3655
  }
];

/**
 * Sizilianische Spezialit\u00E4ten
 */
const SPEZIALITAETEN = [
  { name: "Arancini", beschreibung: "Frittierte Reisb\u00E4llchen gef\u00FCllt mit Rag\u00F9, Mozzarella oder Spinat. DAS Streetfood Siziliens.", preis: "2-4\u20AC", bild: "\u{1F35A}" },
  { name: "Cannoli", beschreibung: "Knusprige R\u00F6llchen gef\u00FCllt mit s\u00FC\u00DFer Ricotta-Creme. Nur frisch gef\u00FCllt bestellen!", preis: "2-4\u20AC", bild: "\u{1F36C}" },
  { name: "Pasta alla Norma", beschreibung: "Pasta mit Auberginen, Tomatensauce, Ricotta Salata und Basilikum. Das Nationalgericht Siziliens.", preis: "8-12\u20AC", bild: "\u{1F35D}" },
  { name: "Granita con Brioche", beschreibung: "Halbgefrorenes Eis (Mandel, Zitrone, Kaffee, Pistazie) mit warmem Brioche. Typisches sizilianisches Fr\u00FChst\u00FCck!", preis: "3-5\u20AC", bild: "\u{1F9CA}" },
  { name: "Panelle", beschreibung: "Frittierte Kichererbsen-Fl\u00E4den im Br\u00F6tchen. Einfach, g\u00FCnstig und unglaublich lecker.", preis: "2-3\u20AC", bild: "\u{1F35E}" },
  { name: "Sfincione", beschreibung: "Sizilianische Pizza: dicker Teig mit Tomaten, Zwiebeln, Anchovis und Semmelbröseln.", preis: "2-4\u20AC", bild: "\u{1F355}" },
  { name: "Caponata", beschreibung: "S\u00FC\u00DF-saures Auberginen-Gem\u00FCse mit Oliven und Kapern. Perfekte Vorspeise.", preis: "5-8\u20AC", bild: "\u{1F346}" },
  { name: "Pasta con le Sarde", beschreibung: "Pasta mit frischen Sardinen, wildem Fenchel, Pinienkernen und Rosinen. Ungewöhnlich aber genial.", preis: "10-14\u20AC", bild: "\u{1F41F}" },
  { name: "Cassata Siciliana", beschreibung: "Aufwendige Torte mit Ricotta, Marzipan, kandierten Fr\u00FCchten und Zuckerguss. Barockes Meisterwerk.", preis: "4-6\u20AC", bild: "\u{1F370}" },
  { name: "Pani ca' Meusa", beschreibung: "Milzbr\u00F6tchen: gekochte und frittierte Kalbsmilz im Sesambrötchen. Mutig, aber ein echtes Erlebnis!", preis: "3-5\u20AC", bild: "\u{1F956}" }
];
