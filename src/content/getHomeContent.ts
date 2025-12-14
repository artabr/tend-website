import { type HomeContent, allHomeContents } from 'contentlayer/generated';
import { getLocale } from 'next-intl/server';

interface Button {
  label: string;
  url: string;
}

export const getHomeContent = async () => {
  const locale = await getLocale();

  const homeContent = allHomeContents.find(
    (content: HomeContent) =>
      content.slug === 'home' && content.locale === locale,
  );

  if (!homeContent) {
    throw new Error(`Home content not found for locale: ${locale}`);
  }

  const followUsButtons: Button[] =
    locale === 'ru'
      ? [
          {
            label: 'Telegram',
            url: 'https://t.me/feat_initial_commit',
          },
          {
            label: 'Bluesky',
            url: 'https://bsky.app/profile/tend-app.pro',
          },
        ]
      : [
          {
            label: 'Twitter',
            url: 'https://x.com/artabr',
          },
          {
            label: 'Bluesky',
            url: 'https://bsky.app/profile/tend-app.pro',
          },
        ];

  // Transform the data to match the expected format from getTranslatedContent
  return {
    home: {
      ...homeContent.home,
      followUsSection: {
        ...homeContent.home.followUsSection,
        buttons: followUsButtons,
      },
    },
  };
};
