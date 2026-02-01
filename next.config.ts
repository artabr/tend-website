import BuilderDevTools from '@builder.io/dev-tools/next';
import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});

const nextConfig: NextConfig = BuilderDevTools()({
  serverExternalPackages: ['isolated-vm'],
} satisfies NextConfig);

export default withContentlayer(withNextIntl(nextConfig));
