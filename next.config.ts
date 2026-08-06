import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // English (app/(en)/) and Arabic (app/ar/) each declare their own root
  // layout with a correctly-localized <html lang>/dir — Next.js needs this
  // flag to compose app/global-not-found.tsx for URLs matching neither.
  experimental: {
    globalNotFound: true,
  },
  // Arabic is the default landing experience; English stays reachable at
  // its existing unprefixed course URLs (/courses/[slug]) for paid-ad
  // traffic, so only the bare homepage redirects.
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ar",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
