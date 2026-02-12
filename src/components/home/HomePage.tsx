import Box from '@mui/material/Box';
import { HeroSection } from './HeroSection/index';
import { WaitlistSection } from './WaitlistSection/index';
import { FeaturesSection } from './FeaturesSection/index';
import { WhySection } from './WhySection/index';
import { FollowUsSection } from './FollowUsSection/index';
import { Footer } from './Footer/index';

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
    <Box component="main" sx={{ minHeight: '100vh' }}>
      <HeroSection {...home.hero} />
      <WaitlistSection {...home.waitlistSection} />
      <FeaturesSection {...home.features} />
      <WhySection {...home.whySection} />
      <FollowUsSection {...home.followUsSection} />
      <Footer {...home.footer} />
    </Box>
  );
}
