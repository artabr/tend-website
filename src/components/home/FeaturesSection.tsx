import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

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

interface FeatureRowProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

function FeatureRow({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureRowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: reverse ? 'row-reverse' : 'row',
        },
        alignItems: 'center',
        gap: { xs: 4, md: 6 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Stack
        sx={{
          flex: 1,
          alignItems: {
            xs: 'center',
            md: reverse ? 'flex-end' : 'flex-start',
          },
          textAlign: { xs: 'center', md: reverse ? 'right' : 'left' },
        }}
        spacing={1.5}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: '0.875rem', color: 'text.secondary', maxWidth: 'sm' }}
        >
          {description}
        </Typography>
      </Stack>
      <Box sx={{ flex: 1, maxWidth: { xs: '240px', md: '280px' } }}>
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
}

export function FeaturesSection({
  calendarView,
  overviewView,
  rewardSection,
}: FeaturesSectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Feature 1: Calendar View - Text Left, Image Right */}
        <FeatureRow
          title={calendarView.title}
          description={calendarView.description}
          imageSrc="/images/Detailed calendar feature.png"
          imageAlt="Calendar view showing habit tracking progress"
        />

        {/* Feature 2: Overview/Statistics - Image Left, Text Right */}
        <FeatureRow
          title={overviewView.title}
          description={overviewView.description}
          imageSrc="/images/Detailed statistics feature.png"
          imageAlt="Statistics view showing habit progress across multiple habits"
          reverse
        />

        {/* Feature 3: Rewards/Achievements - Text Left, Image Right */}
        <FeatureRow
          title={rewardSection.heading}
          description={rewardSection.description}
          imageSrc="/images/Achievements feature.png"
          imageAlt="Achievements and rewards for completing habits"
        />
      </Container>
    </Box>
  );
}
