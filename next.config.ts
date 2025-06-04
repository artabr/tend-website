import BuilderDevTools from '@builder.io/dev-tools/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = BuilderDevTools()({
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
} satisfies NextConfig);

export default nextConfig;
