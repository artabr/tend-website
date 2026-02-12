import Typography from '@mui/material/Typography';

interface WaitlistDescriptionProps {
  children: string;
}

export function WaitlistDescription({ children }: WaitlistDescriptionProps) {
  return (
    <Typography
      className="WaitlistDescription-root"
      variant="body1"
      sx={{ maxWidth: '32rem' }}
    >
      {children}
    </Typography>
  );
}
