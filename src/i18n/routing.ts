import { defineRouting } from 'next-intl/routing';

// TODO: read the localization config for pathnames from the CMS

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': {
      ru: '/',
    },
    '/#features': {
      ru: '/#features',
    },
    '/#subscribe': {
      ru: '/#subscribe',
    },
    'https://docs.tend-app.pro/en': {
      ru: 'https://docs.tend-app.pro/en',
    },
  },
});
