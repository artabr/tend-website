import { getTranslations } from 'next-intl/server';

export const getTranslatedContent = async () => {
  const t = await getTranslations('Content');

  return {
    home: {
      hero: {
        headline: t('home.hero.headline'),
        subHeadline: t('home.hero.subHeadline'),
        callToAction: t('home.hero.callToAction'),
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
      footer: {
        copyright: t('home.footer.copyright'),
        privacyPolicy: t('home.footer.privacyPolicy'),
      },
    },
  };
};
