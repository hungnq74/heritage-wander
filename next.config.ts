import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "cdn.vntrip.vn" },
      { protocol: "https", hostname: "huetourism.gov.vn" },
      { protocol: "https", hostname: "api.sovaba.travel" },
      { protocol: "https", hostname: "khamphahue.com.vn" },
    ],
  },
};

export default withNextIntl(nextConfig);
