/**
 * Auto & Transport Daten für Sizilien Urlaub Juni 2026
 */

const FAHRER = [
  { name: "Person 1", fuehrerschein: true, faehrtImAusland: true, notizen: "" },
  { name: "Person 2", fuehrerschein: true, faehrtImAusland: false, notizen: "" },
  { name: "Person 3", fuehrerschein: false, faehrtImAusland: false, notizen: "" },
  { name: "Person 4", fuehrerschein: true, faehrtImAusland: true, notizen: "" },
  { name: "Person 5", fuehrerschein: false, faehrtImAusland: false, notizen: "" }
];

const MIETWAGEN = [
  // Beispiel:
  // {
  //   id: 1,
  //   anbieter: "Europcar",
  //   fahrzeugtyp: "Fiat 500L o.ä.",
  //   kategorie: "Kompaktvan",
  //   abholung: "Flughafen PMO",
  //   rueckgabe: "Flughafen PMO",
  //   von: "2026-06-01",
  //   bis: "2026-06-14",
  //   tage: 13,
  //   preis: 350,
  //   versicherung: "Vollkasko inkl.",
  //   extras: "GPS, Kindersitz",
  //   link: "",
  //   status: "option",
  //   notizen: ""
  // }
];

const OEPNV_INFO = {
  zug: {
    titel: "Zug (Trenitalia)",
    beschreibung: "Isola delle Femmine \u2194 Palermo Centrale: ca. 20 Min, ca. 2-3\u20AC",
    link: "https://www.trenitalia.com"
  },
  bus: {
    titel: "Bus (AST/AMAT)",
    beschreibung: "Lokale Busse in Palermo und Umgebung. Tickets am Kiosk oder in der App.",
    link: ""
  },
  taxi: {
    titel: "Taxi / Uber",
    beschreibung: "Taxi vom Flughafen nach Palermo: ca. 35-45\u20AC (Festpreis). Uber teilweise verf\u00FCgbar.",
    link: ""
  },
  transfer: {
    titel: "Flughafentransfer",
    beschreibung: "Trinacria Express: Flughafen \u2192 Palermo Centrale in 50 Min, ca. 7\u20AC. Tipp: Casa del Grecale bietet kostenlosen Transfer!",
    link: ""
  }
};
