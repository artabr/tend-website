// import * as Button from '@/components/mui/Button';
// import * as Card from '@/components/mui/Card';
import { Builder, builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';

// TODO: Check if it's safe to use the Builder API key here
// It's a public facing part
// Maybe we should put it here only in development environment
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

// Register all MUI components individually
// ---
// I put it here only as an example for now, unfortunately, although it works in development mode,
// it is not being built in production mode
// Need to investigate why
//
// Builder.registerComponent(withChildren(Card.default), Card.config);
//
// Builder.registerComponent(withChildren(Button.default), Button.config);
