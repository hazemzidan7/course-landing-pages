import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
