import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../RenderBuilderContent';

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (!BUILDER_API_KEY) {
  throw new Error('NEXT_PUBLIC_BUILDER_API_KEY is not defined');
}

// Initialize Builder.io
builder.init(BUILDER_API_KEY);

export type BuilderPageProps = {
  builderModelName: string;
  contentData?: Record<string, unknown>;
  builderTemplate: string;
};

/**
 * This component is server-side component that is used to render a Builder page.
 *
 * It fetches the page view from Builder.io and renders the page on the server-side without content data.
 *
 * It passes the content data to the client-side RenderBuilderContent component then.
 */
export async function BuilderPageComponent({
  builderModelName,
  contentData,
  builderTemplate,
}: BuilderPageProps) {
  const viewData = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: { urlPath: `/${builderTemplate}` },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <RenderBuilderContent
      content={viewData}
      model={builderModelName}
      data={contentData}
    />
  );
}
