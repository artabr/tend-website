import '@/styles/globals.css';
import PageLayout from '@/components/ui/PageLayout';
import { routing } from '@/i18n/routing';
import { type Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import type { ReactNode } from 'react';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
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
      <body>
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        <NextIntlClientProvider>
          <PageLayout>{children}</PageLayout>
        </NextIntlClientProvider>
        <Script
          strategy="lazyOnload"
          src="https://sibforms.com/forms/end-form/build/main.js"
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="d8bdbe4e-7251-4d95-b244-3231ae896f35"
          data-blockingmode="auto"
          type="text/javascript"
        />
      </body>
    </html>
  );
}
