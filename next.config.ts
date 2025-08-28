import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
