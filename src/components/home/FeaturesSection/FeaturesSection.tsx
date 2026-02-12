import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FeatureBlock } from './FeatureBlock';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  calendarView: Feature;
  overviewView: Feature;
  rewardSection: {
    heading: string;
    description: string;
  };
}

export function FeaturesSection({
  calendarView,
  overviewView,
  rewardSection,
}: FeaturesSectionProps) {
  return (
    <Box
      className="FeaturesSection-root"
      component="section"
      sx={{ py: { xs: 4, md: 6 } }}
    >
      <Container maxWidth="lg">
        <FeatureBlock
          title={calendarView.title}
          description={calendarView.description}
          imageSrc="/images/detailed_calendar_feature.png"
          imageAlt="Calendar view showing habit tracking progress"
        />
        <FeatureBlock
          title={overviewView.title}
          description={overviewView.description}
          imageSrc="/images/detailed_statistics_feature.png"
          imageAlt="Statistics view showing habit progress across multiple habits"
          reverse
        />
        <FeatureBlock
          title={rewardSection.heading}
          description={rewardSection.description}
          imageSrc="/images/achievements_feature.png"
          imageAlt="Achievements and rewards for completing habits"
        />
      </Container>
    </Box>
  );
}
