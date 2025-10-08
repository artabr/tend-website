import { getLocale, getTranslations } from 'next-intl/server';

export const getTranslatedContent = async () => {
  const t = await getTranslations('Content');
  const locale = await getLocale();

  return {
    home: {
      hero: {
        headline: t('home.hero.headline'),
        subHeadline: t('home.hero.subHeadline'),
        callToAction: t('home.hero.callToAction'),
        whyLink: t('home.hero.whyLink'),
        disclaimer: t('home.hero.disclaimer'),
      },
      waitlistSection: {
        title: t('home.waitlistSection.title'),
        description: t('home.waitlistSection.description'),
        disclaimer: t('home.waitlistSection.disclaimer'),
        actionButton: t('home.waitlistSection.actionButton'),
      },
      features: {
        calendarView: {
          title: t('home.features.calendarView.title'),
          description: t('home.features.calendarView.description'),
        },
        overviewView: {
          title: t('home.features.overviewView.title'),
          description: t('home.features.overviewView.description'),
        },
        rewardSection: {
          heading: t('home.features.rewardSection.heading'),
          description: t('home.features.rewardSection.description'),
        },
      },
      whySection: {
        title: t('home.whySection.title'),
        disclaimer: t('home.whySection.disclaimer'),
        blocks: [
          {
            title: t('home.whySection.blocks.1.title'),
            description: t('home.whySection.blocks.1.description'),
          },
          {
            title: t('home.whySection.blocks.2.title'),
            description: t('home.whySection.blocks.2.description'),
          },
        ],
      },
      followUsSection: {
        title: t('home.followUsSection.title'),
        description: t('home.followUsSection.description'),
        buttons:
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
              ],
      },
      footer: {
        copyright: t('home.footer.copyright'),
        privacyPolicy: t('home.footer.privacyPolicy'),
      },
    },
  };
};
