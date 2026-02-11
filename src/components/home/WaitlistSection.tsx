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
      sx={{ bgcolor: '#fbfcff', py: { xs: 6, md: 12.5 } }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h2" component="h2">
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '32rem',
              fontSize: '18px',
              lineHeight: '27px',
              color: '#000000',
            }}
          >
            {description}
          </Typography>

          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            <Box id="brevo-form-container" className="brevo-form" />
          </Box>

          <Typography
            variant="caption"
            sx={{ fontSize: '13px', color: '#333333' }}
          >
            {disclaimer}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
