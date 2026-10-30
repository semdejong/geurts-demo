/** Leidt de data-cta-waarde af van een href (voor de Sleads demo-analytics tracker). */
export function ctaType(href: string): "bellen" | "mailen" | "offerte" {
  if (href.startsWith("tel:")) return "bellen";
  if (href.startsWith("mailto:")) return "mailen";
  return "offerte";
}
