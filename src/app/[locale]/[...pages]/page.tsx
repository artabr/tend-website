import { BuilderPageComponent } from '@/components/builder/BuilderPageComponent';
import { getBuilderTemplate } from '@/content/getBuilderTemplate';
import { generatePageMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: Locale; pages: string[] }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props) {
  const { locale, pages } = await params;
  const slug = `${pages?.join('/') || 'home'}`;

  return generatePageMetadata(slug, locale);
}

export default async function Page({ params }: Props) {
  await import('isolated-vm');

  const { locale, pages } = await params;

  const builderModelName = 'page';
  const slug = `${pages?.join('/') || 'home'}`;

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
