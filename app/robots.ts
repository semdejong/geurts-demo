import type { MetadataRoute } from "next";

// Demo's mogen nooit geïndexeerd worden.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
