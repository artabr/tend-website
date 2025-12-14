import { getTranslations } from 'next-intl/server';
import type { Locale } from 'next-intl';
import type { Metadata } from 'next';

export interface LocalizedMetadata {
  title: string;
  description: string;
  keywords: string;
  siteName: string;
  siteUrl: string;
  locale: string;
}

export async function getLocalizedMetadata(
  slug: string,
  locale: Locale
): Promise<LocalizedMetadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  // Get page-specific metadata or fall back to default
  const pageKey = slug === 'home' ? 'home' : 'default';

  return {
    title: t(`${pageKey}.title`),
    description: t(`${pageKey}.description`),
    keywords: t(`${pageKey}.keywords`),
    siteName: t('site.name'),
    siteUrl: t('site.url'),
    locale: t('site.locale'),
  };
}

export async function generatePageMetadata(
  slug: string,
  locale: Locale
): Promise<Metadata> {
  const metadata = await getLocalizedMetadata(slug, locale);
  const pageUrl = `${metadata.siteUrl}/${locale === 'en' ? '' : locale}${slug === 'home' ? '' : `/${slug}`}`.replace(/\/+/g, '/').replace(/\/$/, '') || metadata.siteUrl;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Artem Abramov', url: 'https://artabr.com' }],
    creator: 'Artem Abramov',
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      siteName: metadata.siteName,
      locale: metadata.locale,
      type: 'website',
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'en': `${metadata.siteUrl}${slug === 'home' ? '' : `/${slug}`}`,
        'ru': `${metadata.siteUrl}/ru${slug === 'home' ? '' : `/${slug}`}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}
