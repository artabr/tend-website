import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});

const nextConfig: NextConfig = {
  serverExternalPackages: ['isolated-vm'],
} satisfies NextConfig;

export default withContentlayer(withNextIntl(nextConfig));
