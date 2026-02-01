import { BuilderPageComponent } from '@/components/builder/BuilderPageComponent';
import EnvScript from '@/components/common/EnvScript';
import { Scripts } from '@/components/common/Scripts';
import PageLayout from '@/components/ui/PageLayout';
import { getBuilderTemplate } from '@/content/getBuilderTemplate';
import { generatePageMetadata } from '@/lib/metadata';
import { type Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: Locale; pages: string[] }>;
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata() {
  const locale = 'ru';
  const slug = 'index';

  return generatePageMetadata(slug, locale);
}

export default async function Page({ params }: Props) {
  await import('isolated-vm');

  const locale = 'ru';
  const slug = 'index';

  const builderModelName = 'page';

  const builderTemplate = getBuilderTemplate(slug, locale);

  if (!builderTemplate) {
    return notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <EnvScript />
      <body>
        <NextIntlClientProvider>
          <PageLayout>
            <BuilderPageComponent
              builderModelName={builderModelName}
              builderTemplate={builderTemplate}
            />
          </PageLayout>
        </NextIntlClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
