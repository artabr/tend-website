import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

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
        <Stack spacing={3} alignItems="center" textAlign="center">
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
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'primary.main',
              }}
            >
              T
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.125rem', lg: '3rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              maxWidth: '600px',
            }}
          >
            {headline}
          </Typography>

          {/* Subheadline with Why link */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: 'text.secondary',
            }}
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
              bgcolor: 'slate.850',
              color: 'white',
              px: 4,
              borderRadius: '9999px',
              '&:hover': { bgcolor: 'grey.700' },
            }}
          >
            {callToAction}
          </Button>

          {/* Phone Mockup Image */}
          <Box
            sx={{
              mt: 4,
              maxWidth: { xs: '280px', md: '360px' },
              mx: 'auto',
            }}
          >
            <Box
              component="img"
              src="/images/Main hero image.png"
              alt="Tend app habit tracker interface"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
