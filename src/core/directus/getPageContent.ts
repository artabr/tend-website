import { directus } from '@/core/api/directus';
import { readItems } from '@directus/sdk';

export const getPageContent = async (locale: string, slug: string) => {
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
    })
  );

  const pageData = pagesBySlug?.[0];

  if (!pageData) {
    return undefined;
  }

  const pageDataByLocale = {
    ...pageData,
    ...pageData?.translations?.find(
      (translation: { languages_code: string }) =>
        translation.languages_code === locale
    ),
  };

  const builderTemplate = pageData?.builder_template;

  const contentData = {
    title: pageDataByLocale?.title || '',
    excerpt: pageDataByLocale?.excerpt || '',
    content: pageDataByLocale?.content || '',
  };

  return {
    contentData,
    builderTemplate,
  };
};
