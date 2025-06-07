import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus('https://directus.tend-app.ru').with(
  rest(),
);
