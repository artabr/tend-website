import Stack from '@mui/material/Stack';
import { FollowUsSocialLink } from './FollowUsSocialLink';

interface ButtonItem {
  label: string;
  url: string;
}

const getIcon = (label: string) => {
  switch (label) {
    case 'Twitter':
      return '𝕏';
    case 'Telegram':
      return '✈️';
    case 'Bluesky':
      return '🦋';
    default:
      return null;
  }
};

interface FollowUsActionsProps {
  buttons: ButtonItem[];
}

export function FollowUsActions({ buttons }: FollowUsActionsProps) {
  return (
    <Stack
      className="FollowUsActions-root"
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      sx={{ mt: 1 }}
    >
      {buttons.map((button) => (
        <FollowUsSocialLink
          key={button.label}
          label={button.label}
          url={button.url}
          icon={getIcon(button.label)}
        />
      ))}
    </Stack>
  );
}
