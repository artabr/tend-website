import { defineRouting } from 'next-intl/routing';

// TODO: read the localization config for pathnames from the CMS

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  pathnames: {
    '/': {
      ru: '/home',
    },
    '/#features': {
      ru: '/#features',
    },
    '/#subscribe': {
      ru: '/#subscribe',
    },
  },
});
