import Typography from '@mui/material/Typography';

interface FollowUsDescriptionProps {
  children: string;
}

export function FollowUsDescription({ children }: FollowUsDescriptionProps) {
  return (
    <Typography
      className="FollowUsDescription-root"
      variant="body1"
      sx={{ color: '#ffffff', maxWidth: 'sm' }}
    >
      {children}
    </Typography>
  );
}
