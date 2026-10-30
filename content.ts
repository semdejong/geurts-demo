/**
 * Bedrijfsgegevens en kleuren voor Maikel Geurts Metaalbewerking.
 * Kleuren komen uit het logo.
 */
export const content = {
  slug: "geurts-demo",

  company: {
    name: "Maikel Geurts Metaalbewerking",
    owner: "Maikel Geurts",
    logo: "/img/logo-geurts.png",
    street: "Soetersveldweg 6C",
    postalCode: "7151 JA",
    city: "Eibergen",
    area: "industrieterrein De Kiefte",
    phoneDisplay: "0545 47 60 00",
    phoneTel: "tel:+31545476000",
    mobileDisplay: "06 137 567 89",
    mobileTel: "tel:+31613756789",
    email: "info@maikelgeurtsmetaal.nl",
    kvk: "08137383",
    founded: 2005,
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Soetersveldweg+6C,+7151+JA+Eibergen",
  },

  colors: {
    primary: "#112670",
    primaryForeground: "#ffffff",
    accent: "#F0CC0C",
    background: "#F6F6F2",
    foreground: "#1E2125",
    muted: "#E6E7E1",
    steel: "#CBCCC2",
  },

  seo: {
    title: "Maikel Geurts Metaalbewerking · Lassen, draaien en frezen in Eibergen",
    description:
      "Lassen, draaien en frezen in RVS, staal en aluminium. Werkplaats op industrieterrein De Kiefte in Eibergen, sinds 2005. Voor thuis en voor bedrijven.",
    lang: "nl",
  },

  nav: [
    { label: "Werkzaamheden", href: "/werkzaamheden" },
    { label: "Projecten", href: "/projecten" },
    { label: "Materiaal halen", href: "/materiaal" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Content = typeof content;
