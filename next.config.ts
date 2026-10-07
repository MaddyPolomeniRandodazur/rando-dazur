import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/experiences/evg-experiences",
        destination: "/experiences/evjf-experiences",
        permanent: true,
      },
      {
        source: "/fr/experiences/evg-experiences",
        destination: "/fr/experiences/evjf-experiences",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
