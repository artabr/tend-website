import PageLayout from '@/components/PageLayout';
import { RenderBuilderContent } from '@/components/builder';
import { directus } from '@/core/api/directus';
import { builder } from '@builder.io/react';
import { readItems } from '@directus/sdk';
import pick from 'lodash/pick';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

// TODO: Check if it's safe to use the Builder API key here
// It's a public facing part
// Maybe we should put it here only in development environment
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Pages({
  viewData,
  contentData,
  attributes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations('Pages');

  const builderModelName = 'page';

  useEffect(() => {
    builder.setUserAttributes(attributes!);
  }, []);

  return (
    <PageLayout title={t('title')}>
      {/* Render the Builder page */}
      <RenderBuilderContent
        content={viewData}
        model={builderModelName}
        data={contentData}
      />
    </PageLayout>
  );
}

// The namespaces can be generated based on used components. `PageLayout` in
// turn requires messages for `Navigation` and therefore a recursive list of
// namespaces is created dynamically, where the owner of a component doesn't
// have to know which nested components are rendered. Note that this approach
// is limited to components which are not lazy loaded.
Pages.messages = ['Pages', ...PageLayout.messages];

export async function getStaticProps({
  params,
  locale,
  locales,
  preview,
}: GetStaticPropsContext<{ pages: string[] }>) {
  console.log('params', params);
  const slug = `/${params?.pages?.join('/') || 'home'}`;
  console.log('slug', slug);
  console.log('locale', locale);

  const pagesBySlug = await directus.request(
    readItems('pages', {
      filter: {
        translations: {
          _and: [
            {
              languages_code: { _eq: locale },
            },
            {
              slug: { _eq: slug },
            },
          ],
        },
      },
      fields: ['*', { translations: ['*'] }],
      limit: 1,
    }),
  );

  const pageData = pagesBySlug?.[0];
  console.log('pageData', JSON.stringify(pageData, null, 2));

  const pageDataByLocale = {
    ...pageData,
    ...pageData?.translations?.find(
      (translation: { languages_code: string }) =>
        translation.languages_code === locale,
    ),
  };
  console.log('pageDataByLocale', JSON.stringify(pageDataByLocale, null, 2));

  const builderTemplate = pageData?.builder_template;

  const contentData = {
    title: pageDataByLocale?.title || '',
    excerpt: pageDataByLocale?.excerpt || '',
    content: pageDataByLocale?.content || '',
  };

  const viewData =
    (await builder
      .get('page', {
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        userAttributes: { urlPath: `/${builderTemplate}` },
        cachebust: true,
      })
      .promise()) || null;

  return {
    props: {
      viewData,
      contentData,
      attributes: { urlPath: slug },
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        Pages.messages,
      ),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
