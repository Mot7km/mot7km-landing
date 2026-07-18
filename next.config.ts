import type { NextConfig } from "next";

const i18nConfig = require('./src/config/next-i18next.config.ts');

const nextConfig: NextConfig = {
  /* config options here */
  i18n: i18nConfig.i18n,
};

export default nextConfig;
