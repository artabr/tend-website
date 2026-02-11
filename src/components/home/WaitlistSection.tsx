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
          <Typography variant="h2" component="h2">
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '32rem' }}
          >
            {description}
          </Typography>

          <Box sx={{ width: '100%', maxWidth: '400px', mt: 2 }}>
            <Box id="brevo-form-container" className="brevo-form" />
          </Box>

          <Typography variant="caption" color="text.disabled" sx={{ mt: 1 }}>
            {disclaimer}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
