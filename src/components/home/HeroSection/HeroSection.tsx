import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { HeroCallToAction } from './HeroCallToAction';
import { HeroHeadline } from './HeroHeadline';
import { HeroMedia } from './HeroMedia';
import { HeroSubheadline } from './HeroSubheadline';

interface HeroSectionProps {
  headline: string;
  subHeadline: string;
  callToAction: string;
  whyLink: string;
  disclaimer: string;
}

export function HeroSection({
  headline,
  subHeadline,
  callToAction,
  whyLink,
}: HeroSectionProps) {
  return (
    <Box
      className="HeroSection-root"
      component="section"
      sx={{ pt: { xs: 4, md: '100px' }, pb: 0 }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <HeroHeadline>{headline}</HeroHeadline>
          <HeroSubheadline
            text={subHeadline}
            linkText={whyLink}
            linkHref="#why"
          />
          <HeroCallToAction href="#waitlist">{callToAction}</HeroCallToAction>
          <HeroMedia
            src="/images/main_hero_image.png"
            alt="Tend app habit tracker interface"
          />
        </Stack>
      </Container>
    </Box>
  );
}
