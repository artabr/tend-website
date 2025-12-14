import { Builder, builder } from '@builder.io/react';
import Counter from '../custom/Counter/Counter';

// TODO: Check if it's safe to use the Builder API key here
// It's a public facing part
// Maybe we should put it here only in development environment
// biome-ignore lint/style/noNonNullAssertion: <explanation>
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
  ],
});
