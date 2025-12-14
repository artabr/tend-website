import '@/styles/globals.css';
import EnvScript from '@/components/common/EnvScript';
import { Scripts } from '@/components/common/Scripts';
import PageLayout from '@/components/ui/PageLayout';
import { routing } from '@/i18n/routing';
import { type Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  // TODO: make it dynamic
  metadataBase: new URL('https://tend-app.pro'),
  formatDetection: {
    telephone: false,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <EnvScript />
      <body>
        <NextIntlClientProvider>
          <PageLayout>{children}</PageLayout>
        </NextIntlClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
