'use client';

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@builder.io/sdk';
import DefaultErrorPage from 'next/error';
import type { ComponentProps } from 'react';
import '../builder-registry';

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

/**
 * This component is client-side component that populates a Builder page component with a content data.
 *
 * Unfortunately, the content data in Builder is only client side for now.
 */
export function RenderBuilderContent({
  content,
  model,
  data,
}: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();

  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  if (!content && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  return <BuilderComponent content={content} model={model} data={data} />;
}
