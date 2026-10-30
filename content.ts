/**
 * ÉÉN bestand om aan te passen per demo.
 * Kopieer de starter, vul hieronder de gegevens van de prospect in, klaar.
 */
export const content = {
  // Slug = Vercel-project- en GitHub-reponaam (eindigt op "-demo"). Wordt door scripts/new-demo.sh gezet.
  // Ook de "data-demo" voor de Sleads demo-analytics tracker.
  slug: "geurts-demo",

  company: {
    name: "Voorbeeldbedrijf",
    tagline: "Vakmanschap uit de regio, sinds 1998",
    description:
      "Wij helpen particulieren en bedrijven met betrouwbaar werk, eerlijk advies en een persoonlijke aanpak.",
    logo: "/logo.png", // zet het logo in /public en pas het pad aan ("" = alleen tekst)
    city: "Utrecht",
  },

  // Huisstijlkleuren van de prospect (hex)
  colors: {
    primary: "#1d4ed8",
    primaryForeground: "#ffffff",
    accent: "#f59e0b",
    background: "#ffffff",
    foreground: "#0f172a",
    muted: "#f1f5f9",
  },

  seo: {
    title: "Voorbeeldbedrijf | Vakmanschap uit Utrecht",
    description: "Conceptwebsite voor Voorbeeldbedrijf.",
    lang: "nl",
  },

  nav: [
    { label: "Diensten", href: "#diensten" },
    { label: "Over ons", href: "#over-ons" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "Vakwerk waar u op kunt bouwen",
    subtitle:
      "Snel geregeld, duidelijk geprijsd en netjes opgeleverd. Vraag vandaag nog vrijblijvend een offerte aan.",
    primaryCta: { label: "Offerte aanvragen", href: "#contact" },
    secondaryCta: { label: "Bekijk onze diensten", href: "#diensten" },
    image: "", // bv. "/hero.jpg" in /public of een externe URL; leeg = kleurverloop
    highlights: ["25+ jaar ervaring", "Gratis advies aan huis", "Garantie op al ons werk"],
  },

  services: {
    title: "Onze diensten",
    intro: "Alles onder één dak, van eerste advies tot oplevering.",
    items: [
      { icon: "🛠️", title: "Dienst één", text: "Korte omschrijving van wat deze dienst inhoudt en wat de klant eraan heeft." },
      { icon: "📐", title: "Dienst twee", text: "Korte omschrijving van wat deze dienst inhoudt en wat de klant eraan heeft." },
      { icon: "✅", title: "Dienst drie", text: "Korte omschrijving van wat deze dienst inhoudt en wat de klant eraan heeft." },
    ],
  },

  about: {
    title: "Over ons",
    text: [
      "Wat begon als een klein familiebedrijf is uitgegroeid tot een vertrouwd adres in de regio.",
      "We werken met vaste vakmensen, houden ons aan afspraken en staan ook na de oplevering voor u klaar.",
    ],
    image: "", // optioneel
    stats: [
      { value: "25+", label: "jaar ervaring" },
      { value: "1.200+", label: "tevreden klanten" },
      { value: "9,2", label: "gemiddeld cijfer" },
    ],
  },

  reviews: {
    title: "Wat klanten zeggen",
    items: [
      { name: "Familie Jansen", text: "Netjes en snel gewerkt, precies volgens afspraak. Echt een aanrader!", rating: 5 },
      { name: "Petra de Vries", text: "Duidelijke communicatie en een eerlijke prijs. We komen zeker terug.", rating: 5 },
      { name: "Mark Bakker", text: "Vakkundig advies en mooi resultaat. Heel tevreden.", rating: 5 },
    ],
  },

  contact: {
    title: "Neem contact op",
    text: "Bel, mail of kom langs. We reageren binnen één werkdag.",
    phone: "030 123 45 67",
    email: "info@voorbeeldbedrijf.nl",
    address: "Voorbeeldstraat 1, 1234 AB Utrecht",
    openingHours: ["Ma t/m vr: 08:00 – 17:30", "Za: 09:00 – 13:00"],
    whatsapp: "", // bv. "31612345678" (zonder +)
    cta: { label: "Bel direct", href: "tel:0301234567" },
  },

  footer: {
    kvk: "", // bv. "KvK 12345678"
    socials: [] as { label: string; href: string }[],
  },
};

export type Content = typeof content;
