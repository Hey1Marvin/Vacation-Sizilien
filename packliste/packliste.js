/**
 * Packliste für Sizilien Urlaub Juni 2026
 * Checkboxen werden per localStorage gespeichert
 */

const PACKLISTE_GEMEINSAM = [
  { id: "g1", item: "Reiseapotheke (Ibuprofen, Pflaster, Durchfall-Tabletten, Sonnenbrand-Gel)", zustaendig: "" },
  { id: "g2", item: "Kartenspiele / Gesellschaftsspiele", zustaendig: "" },
  { id: "g3", item: "Bluetooth-Lautsprecher", zustaendig: "" },
  { id: "g4", item: "Reiseadapter (DE \u2192 IT: gleicher Stecker, aber Schuko passt manchmal nicht)", zustaendig: "" },
  { id: "g5", item: "Strandmuschel / Sonnensegel", zustaendig: "" },
  { id: "g6", item: "K\u00FChlbox / K\u00FChltasche", zustaendig: "" },
  { id: "g7", item: "Schnorchelset", zustaendig: "" },
  { id: "g8", item: "Wasserball / Frisbee", zustaendig: "" }
];

const PACKLISTE_KATEGORIEN = [
  {
    id: "kleidung",
    name: "Kleidung",
    icon: "\u{1F455}",
    items: [
      "T-Shirts / Tops (5-7x)",
      "Kurze Hosen (3-4x)",
      "Leichte lange Hose (1x)",
      "Badehose / Bikini (2x)",
      "Unterw\u00E4sche (7x)",
      "Socken (4-5x)",
      "Leichte Jacke / Hoodie (Abende)",
      "Schickes Outfit (1x f\u00FCr Abendessen)",
      "Schlafkleidung",
      "Flip-Flops / Sandalen",
      "Bequeme Laufschuhe"
    ]
  },
  {
    id: "hygiene",
    name: "Hygiene",
    icon: "\u{1F9F4}",
    items: [
      "Sonnencreme (LSF 50!)",
      "After-Sun Lotion",
      "Zahnb\u00FCrste + Zahnpasta",
      "Shampoo / Duschgel",
      "Deo",
      "Rasierer",
      "Haarb\u00FCrste / Kamm",
      "Insektenschutzmittel",
      "Lippenpflege mit LSF"
    ]
  },
  {
    id: "elektronik",
    name: "Elektronik",
    icon: "\u{1F50C}",
    items: [
      "Handy + Ladekabel",
      "Powerbank",
      "Kopfh\u00F6rer",
      "Kamera (optional)",
      "E-Book-Reader (optional)",
      "Mehrfachsteckdose"
    ]
  },
  {
    id: "dokumente",
    name: "Dokumente",
    icon: "\u{1F4C4}",
    items: [
      "Personalausweis / Reisepass",
      "Krankenversicherungskarte (EHIC)",
      "F\u00FChrerschein (falls Fahrer)",
      "Buchungsbest\u00E4tigungen (Unterkunft)",
      "Flugtickets / Boarding Pass",
      "Mietwagen-Voucher",
      "Kreditkarte / EC-Karte",
      "Bargeld (etwas Euro)",
      "Notfallnummern (Botschaft, Versicherung)"
    ]
  },
  {
    id: "strand",
    name: "Strand & Outdoor",
    icon: "\u{1F3D6}\uFE0F",
    items: [
      "Strandhandtuch",
      "Sonnenbrille",
      "Sonnenhut / Cap",
      "Wasserflasche (nachf\u00FCllbar)",
      "Strandtasche",
      "Wasserschuhe / Badeschuhe",
      "Taucherbrille"
    ]
  },
  {
    id: "sonstiges",
    name: "Sonstiges",
    icon: "\u{1F392}",
    items: [
      "Tagesrucksack",
      "Reisehandtuch (schnelltrocknend)",
      "Reisekissen (f\u00FCr Flug)",
      "Ohrst\u00F6psel / Schlafmaske",
      "Reisetagebuch / Notizbuch",
      "Kleiner Regenschirm (unwahrscheinlich, aber...)",
      "Snacks f\u00FCr den Flug"
    ]
  }
];
