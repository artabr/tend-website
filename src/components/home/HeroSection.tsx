import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import NextImage from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
  disclaimer,
}: HeroSectionProps) {
  return (
    <Box
      component="section"
      sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Logo */}
          <Box
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <NextImage
              src="/logo.svg"
              alt="Tend logo"
              width={40}
              height={40}
              style={{ display: 'block' }}
            />
          </Box>

          {/* Headline */}
          <Typography variant="h1" component="h1" sx={{ maxWidth: '600px' }}>
            {headline}
          </Typography>

          {/* Subheadline with Why link */}
          <Typography
            variant="subtitle1"
            sx={{ color: '#333333', fontSize: '28px', lineHeight: '24px' }}
          >
            {subHeadline}{' '}
            <Link
              href="#why"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                textDecoration: 'underline',
                '&:hover': { color: 'primary.dark' },
              }}
            >
              {whyLink}
            </Link>
          </Typography>

          {/* CTA Button */}
          <Button
            href="#waitlist"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#a71677',
              color: 'white',
              px: 4,
              borderRadius: '10px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 400,
              height: '54px',
              '&:hover': { bgcolor: '#8a1262' },
            }}
          >
            {callToAction}
          </Button>

          {/* Phone Mockup Image */}
          <Box
            sx={{
              mt: 4,
              maxWidth: { xs: '280px', md: '460px' },
              mx: 'auto',
            }}
          >
            <Box
              component="img"
              src="/images/main_hero_image.png"
              alt="Tend app habit tracker interface"
              sx={{ width: '100%', height: '616px', objectFit: 'contain' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
