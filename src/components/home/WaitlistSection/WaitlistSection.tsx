'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { WaitlistHeading } from './WaitlistHeading';
import { WaitlistDescription } from './WaitlistDescription';
import { WaitlistForm } from './WaitlistForm';
import { WaitlistDisclaimer } from './WaitlistDisclaimer';

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
}: WaitlistSectionProps) {
  return (
    <Box
      className="WaitlistSection-root"
      component="section"
      id="waitlist"
      sx={{ bgcolor: '#fbfcff', py: { xs: 6, md: 12.5 } }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <WaitlistHeading>{title}</WaitlistHeading>
          <WaitlistDescription>{description}</WaitlistDescription>
          <WaitlistForm />
          <WaitlistDisclaimer>{disclaimer}</WaitlistDisclaimer>
        </Stack>
      </Container>
    </Box>
  );
}
