import { BuilderPageComponent } from '@/components/builder/BuilderPageComponent';
import { getBuilderTemplate } from '@/content/getBuilderTemplate';
import { getTranslatedContent } from '@/content/getTranslatedContent';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: Locale; pages: string[] }>;
};

export const dynamic = 'force-dynamic';

export default async function Page({ params }: Props) {
  const { locale, pages } = await params;

  const builderModelName = 'page';
  const slug = `/${pages?.join('/') || 'home'}`;

  const builderTemplate = getBuilderTemplate(slug);

  if (!builderTemplate) {
    return notFound();
  }

  const contentData = await getTranslatedContent();

  return (
    <BuilderPageComponent
      builderModelName={builderModelName}
      contentData={contentData}
      builderTemplate={builderTemplate}
    />
  );
}
