import { HomePage } from '@/components/home/HomePage';
import { getHomeContent } from '@/content/getHomeContent';
import { generatePageMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const slug = 'index';

  return generatePageMetadata(slug, locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const homeContent = await getHomeContent();

  return <HomePage {...homeContent} />;
}
