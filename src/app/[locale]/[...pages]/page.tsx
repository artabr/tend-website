import { BuilderPageComponent } from '@/components/builder/BuilderPageComponent';
import { getBuilderTemplate } from '@/content/getBuilderTemplate';
import { generatePageMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: Locale; pages: string[] }>;
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'ru', pages: ['index'] }, { locale: 'en', pages: ['index'] }];
}

export async function generateMetadata({ params }: Props) {
  const { locale, pages } = await params;
  const slug = `${pages?.join('/') || 'index'}`;

  return generatePageMetadata(slug, locale);
}

export default async function Page({ params }: Props) {
  await import('isolated-vm');

  const { locale, pages } = await params;

  const builderModelName = 'page';
  const slug = `${pages?.join('/') || 'index'}`;

  const builderTemplate = getBuilderTemplate(slug, locale);

  if (!builderTemplate) {
    return notFound();
  }

  return (
    <BuilderPageComponent
      builderModelName={builderModelName}
      builderTemplate={builderTemplate}
    />
  );
}
