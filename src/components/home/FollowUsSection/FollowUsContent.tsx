import Stack from '@mui/material/Stack';
import { FollowUsHeading } from './FollowUsHeading';
import { FollowUsDescription } from './FollowUsDescription';
import { FollowUsActions } from './FollowUsActions';

interface ButtonItem {
  label: string;
  url: string;
}

interface FollowUsContentProps {
  title: string;
  description: string;
  buttons: ButtonItem[];
}

export function FollowUsContent({
  title,
  description,
  buttons,
}: FollowUsContentProps) {
  return (
    <Stack
      className="FollowUsContent-root"
      sx={{
        alignItems: { xs: 'center', md: 'flex-start' },
        flex: 1,
      }}
      spacing={2}
    >
      <FollowUsHeading>{title}</FollowUsHeading>
      <FollowUsDescription>{description}</FollowUsDescription>
      <FollowUsActions buttons={buttons} />
    </Stack>
  );
}
