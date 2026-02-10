import EnvScript from '@/components/common/EnvScript';
import { Scripts } from '@/components/common/Scripts';
import { HomePage } from '@/components/home/HomePage';
import PageLayout from '@/components/ui/PageLayout';
import { getHomeContent } from '@/content/getHomeContent';
import { generatePageMetadata } from '@/lib/metadata';
import { type Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata() {
  const locale = 'en';
  const slug = 'index';

  return generatePageMetadata(slug, locale);
}

export default async function Page({ params }: Props) {
  const locale = 'en';
  setRequestLocale(locale);

  const homeContent = await getHomeContent();

  return (
    <html lang={locale}>
      <EnvScript />
      <body>
        <NextIntlClientProvider>
          <PageLayout>
            <HomePage {...homeContent} />
          </PageLayout>
        </NextIntlClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
