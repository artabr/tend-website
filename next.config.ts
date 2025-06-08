import BuilderDevTools from '@builder.io/dev-tools/next';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});

const nextConfig: NextConfig = BuilderDevTools()({} satisfies NextConfig);

export default withNextIntl(nextConfig);
