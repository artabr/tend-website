import Typography from '@mui/material/Typography';

interface WaitlistHeadingProps {
  children: string;
}

export function WaitlistHeading({ children }: WaitlistHeadingProps) {
  return (
    <Typography
      className="WaitlistHeading-root"
      variant="h2"
      component="h2"
    >
      {children}
    </Typography>
  );
}
