import Box from '@mui/material/Box';
import { FollowUsContent } from './FollowUsContent';

interface ButtonItem {
  label: string;
  url: string;
}

interface FollowUsCardProps {
  title: string;
  description: string;
  buttons: ButtonItem[];
}

export function FollowUsCard({
  title,
  description,
  buttons,
}: FollowUsCardProps) {
  return (
    <Box
      className="FollowUsCard-root"
      sx={{
        bgcolor: 'slate.850',
        borderRadius: 4,
        p: { xs: 6, md: 12.5, xl: 10 },
        px: { md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <FollowUsContent
          title={title}
          description={description}
          buttons={buttons}
        />
      </Box>
    </Box>
  );
}
