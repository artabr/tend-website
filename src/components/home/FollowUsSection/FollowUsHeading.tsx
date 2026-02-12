import Typography from '@mui/material/Typography';

interface FollowUsHeadingProps {
  children: string;
}

export function FollowUsHeading({ children }: FollowUsHeadingProps) {
  return (
    <Typography
      className="FollowUsHeading-root"
      variant="h2"
      component="h2"
      sx={{ color: 'white' }}
    >
      {children}
    </Typography>
  );
}
