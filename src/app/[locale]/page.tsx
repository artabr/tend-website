import { BuilderPageComponent } from '@/components/builder/BuilderPageComponent';
import { getTranslatedContent } from '@/content/getTranslatedContent';
import { getPageContent } from '@/core/directus/getPageContent';
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

  const pageContent = await getPageContent(locale, slug);

  if (!pageContent) {
    return notFound();
  }

  const { contentData, builderTemplate } = pageContent;

  const translatedContent = await getTranslatedContent();
  const enrichedContentData = {
    ...contentData,
    ...translatedContent,
  };

  console.log(enrichedContentData);

  return (
    <BuilderPageComponent
      builderModelName={builderModelName}
      contentData={enrichedContentData}
      builderTemplate={builderTemplate}
    />
  );
}
