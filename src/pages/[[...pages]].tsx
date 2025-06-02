import { RenderBuilderContent } from '@/components/builder';
import { builder } from '@builder.io/react';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';

// TODO: Check if it's safe to use the Builder API key here
// It's a public facing part
// Maybe we should put it here only in development environment
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Pages({
  page,
  attributes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const builderModelName = 'page';

  useEffect(() => {
    builder.setUserAttributes(attributes!);
  }, []);

  const { title, description } = page?.data || {};
  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={page} model={builderModelName} />
    </>
  );
}

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
