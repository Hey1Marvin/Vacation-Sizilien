/**
 * Budget-Daten für Sizilien Urlaub Juni 2026
 * Alle Beträge in Euro
 */

const BUDGET = {
  personen: 5,
  kategorien: [
    {
      id: "unterkunft",
      name: "Unterkunft",
      icon: "\u{1F3E8}",
      geschaetzt: 500,
      tatsaechlich: 0,
      notizen: "Zeitraum 1 + Zeitraum 2 zusammen. G\u00FCnstigste: 458\u20AC (Casa Alice) + 517\u20AC (Casetta Mape)"
    },
    {
      id: "fluege",
      name: "Fl\u00FCge",
      icon: "\u2708\uFE0F",
      geschaetzt: 150,
      tatsaechlich: 0,
      notizen: "Pro Person, Hin- und R\u00FCckflug. Ryanair/Eurowings ab ~80-200\u20AC"
    },
    {
      id: "mietwagen",
      name: "Mietwagen",
      icon: "\u{1F697}",
      geschaetzt: 300,
      tatsaechlich: 0,
      notizen: "Gesamt f\u00FCr ca. 2 Wochen inkl. Versicherung. Plus Sprit ~100\u20AC"
    },
    {
      id: "essen",
      name: "Essen & Trinken",
      icon: "\u{1F355}",
      geschaetzt: 350,
      tatsaechlich: 0,
      notizen: "Pro Person, ~25\u20AC/Tag. Mix aus Selbstkochen und Restaurant"
    },
    {
      id: "aktivitaeten",
      name: "Aktivit\u00E4ten & Eintritte",
      icon: "\u{1F3AD}",
      geschaetzt: 50,
      tatsaechlich: 0,
      notizen: "Pro Person. Museen, Touren, Bootstransfer etc."
    },
    {
      id: "transport_lokal",
      name: "Lokaler Transport",
      icon: "\u{1F68C}",
      geschaetzt: 30,
      tatsaechlich: 0,
      notizen: "Pro Person. Z\u00FCge, Busse, ggf. Taxi"
    },
    {
      id: "sonstiges",
      name: "Sonstiges",
      icon: "\u{1F4B3}",
      geschaetzt: 50,
      tatsaechlich: 0,
      notizen: "Pro Person. Souvenirs, Unvorhergesehenes, Trinkgeld"
    }
  ]
};
