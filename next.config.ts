import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired Italian pages redirect individually to their English equivalents.
      {"source": "/it", "destination": "/", "statusCode": 301},
      {"source": "/it/cookie-policy", "destination": "/cookie-policy", "statusCode": 301},
      {"source": "/it/destinations/antibes", "destination": "/destinations/antibes", "statusCode": 301},
      {"source": "/it/destinations/cannes", "destination": "/destinations/cannes", "statusCode": 301},
      {"source": "/it/destinations/esterel", "destination": "/destinations/esterel", "statusCode": 301},
      {"source": "/it/destinations/grasse", "destination": "/destinations/grasse", "statusCode": 301},
      {"source": "/it/destinations/iles-de-lerins", "destination": "/destinations/iles-de-lerins", "statusCode": 301},
      {"source": "/it/destinations/pays-de-fayence", "destination": "/destinations/pays-de-fayence", "statusCode": 301},
      {"source": "/it/experiences/corporate-incentive-travel", "destination": "/experiences/corporate-incentive-travel", "statusCode": 301},
      {"source": "/it/experiences/cruise-guests", "destination": "/experiences/cruise-guests", "statusCode": 301},
      {"source": "/it/experiences/cycling-experiences", "destination": "/experiences/cycling-experiences", "statusCode": 301},
      {"source": "/it/experiences/edible-plants", "destination": "/experiences/edible-plants", "statusCode": 301},
      {"source": "/it/experiences/evg-experiences", "destination": "/experiences/evjf-experiences", "statusCode": 301},
      {"source": "/it/experiences/evjf-experiences", "destination": "/experiences/evjf-experiences", "statusCode": 301},
      {"source": "/it/experiences/family-experiences", "destination": "/experiences/family-experiences", "statusCode": 301},
      {"source": "/it/experiences/food-tours", "destination": "/experiences/food-tours", "statusCode": 301},
      {"source": "/it/experiences/hiking-experiences", "destination": "/experiences/hiking-experiences", "statusCode": 301},
      {"source": "/it/experiences/outdoor-escape-games", "destination": "/experiences/outdoor-escape-games", "statusCode": 301},
      {"source": "/it/experiences/sunset-apero-hikes", "destination": "/experiences/sunset-apero-hikes", "statusCode": 301},
      {"source": "/it/experiences/wild-provence", "destination": "/experiences/wild-provence", "statusCode": 301},
      {"source": "/it/journal", "destination": "/journal", "statusCode": 301},
      {"source": "/it/legal-notice", "destination": "/legal-notice", "statusCode": 301},
      {"source": "/it/meet-maddy", "destination": "/meet-maddy", "statusCode": 301},
      {"source": "/it/press", "destination": "/press", "statusCode": 301},
      {"source": "/it/privacy-policy", "destination": "/privacy-policy", "statusCode": 301},
      {"source": "/it/terms-and-conditions", "destination": "/terms-and-conditions", "statusCode": 301},

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
