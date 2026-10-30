import type { NextConfig } from "next";
import projecten from "./data/projecten.json";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/draai-en-freeswerk", destination: "/draaien-frezen", permanent: true },
      ...projecten.map((project) => ({
        source: project.oldUrl.replace(/\/$/, ""),
        destination: `/projecten/${project.slug}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
