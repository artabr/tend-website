import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FollowUsCard } from './FollowUsCard';

interface ButtonItem {
  label: string;
  url: string;
}

interface FollowUsSectionProps {
  title: string;
  description: string;
  buttons: ButtonItem[];
}

export function FollowUsSection({
  title,
  description,
  buttons,
}: FollowUsSectionProps) {
  return (
    <Box
      className="FollowUsSection-root"
      component="section"
      sx={{ py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <FollowUsCard
          title={title}
          description={description}
          buttons={buttons}
        />
      </Container>
    </Box>
  );
}
