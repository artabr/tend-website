import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { HeroBrand } from './HeroBrand';
import { HeroHeadline } from './HeroHeadline';
import { HeroSubheadline } from './HeroSubheadline';
import { HeroCallToAction } from './HeroCallToAction';
import { HeroMedia } from './HeroMedia';

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
      sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <HeroBrand />
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
