'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface WaitlistSectionProps {
  title: string;
  description: string;
  disclaimer: string;
  actionButton: string;
}

export function WaitlistSection({
  title,
  description,
  disclaimer,
  actionButton,
}: WaitlistSectionProps) {
  return (
    <Box
      component="section"
      id="waitlist"
      sx={{ bgcolor: 'grey.100', py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              maxWidth: '32rem',
            }}
          >
            {description}
          </Typography>

          <Box sx={{ width: '100%', maxWidth: '400px', mt: 2 }}>
            <Box id="brevo-form-container" className="brevo-form" />
          </Box>

          <Typography
            sx={{ fontSize: '0.75rem', color: 'text.disabled', mt: 1 }}
          >
            {disclaimer}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
