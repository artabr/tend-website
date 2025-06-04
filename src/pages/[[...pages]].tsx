import Code from '@/components/Code';
import PageLayout from '@/components/PageLayout';
import { RenderBuilderContent } from '@/components/builder';
import { builder } from '@builder.io/react';
import pick from 'lodash/pick';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// TODO: Check if it's safe to use the Builder API key here
// It's a public facing part
// Maybe we should put it here only in development environment
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Pages({
  page,
  attributes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations('Pages');
  const { locale } = useRouter();

  const builderModelName = 'page';

  useEffect(() => {
    builder.setUserAttributes(attributes!);
  }, []);

  const { title, description } = page?.data || {};
  return (
    <PageLayout title={t('title')}>
      <div>
        {t.rich('description', {
          locale: locale!,
          p: (children) => <p>{children}</p>,
          code: (children) => <Code>{children}</Code>,
        })}
      </div>
      <ul>
        {Pages.messages.map((componentName) => (
          <li key={componentName} style={{ marginBottom: 5 }}>
            <Code>{componentName}</Code>
          </li>
        ))}
      </ul>
      {/* Render the Builder page */}
      <RenderBuilderContent content={page} model={builderModelName} />
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
  const config = { locale, locales };
  console.log('params', params);
  // const { attributes } = parsePersonalizedURL(params!.pages || []);
  const attributes = {
    // Use the page path specified in the URL to fetch the content
    urlPath: '/' + (params?.pages?.join('/') || ''),
  };
  console.log('attributes', attributes);
  const page =
    (await builder
      .get('page', {
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        userAttributes:
          attributes.urlPath === '/' ? { urlPath: '/home' } : attributes,
        cachebust: true,
      })
      .promise()) || null;

  // if (page) {
  //   await addAsyncProps(page);
  // }

  return {
    props: {
      page,
      attributes: attributes,
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
