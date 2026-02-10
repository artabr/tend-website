import { Box } from '@chakra-ui/react';
import { HeroSection } from './HeroSection';
import { WaitlistSection } from './WaitlistSection';
import { FeaturesSection } from './FeaturesSection';
import { WhySection } from './WhySection';
import { FollowUsSection } from './FollowUsSection';
import { Footer } from './Footer';

interface Button {
  label: string;
  url: string;
}

interface HomePageProps {
  home: {
    hero: {
      headline: string;
      subHeadline: string;
      callToAction: string;
      whyLink: string;
      disclaimer: string;
    };
    waitlistSection: {
      title: string;
      description: string;
      disclaimer: string;
      actionButton: string;
    };
    features: {
      calendarView: {
        title: string;
        description: string;
      };
      overviewView: {
        title: string;
        description: string;
      };
      rewardSection: {
        heading: string;
        description: string;
      };
    };
    whySection: {
      title: string;
      disclaimer: string;
      blocks: Array<{
        title: string;
        description: string;
      }>;
    };
    followUsSection: {
      title: string;
      description: string;
      buttons: Button[];
    };
    footer: {
      copyright: string;
      privacyPolicy: string;
    };
  };
}

export function HomePage({ home }: HomePageProps) {
  return (
    <Box as="main" minH="100vh">
      <HeroSection {...home.hero} />
      <WaitlistSection {...home.waitlistSection} />
      <FeaturesSection {...home.features} />
      <WhySection {...home.whySection} />
      <FollowUsSection {...home.followUsSection} />
      <Footer {...home.footer} />
    </Box>
  );
}
