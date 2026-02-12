import Typography from '@mui/material/Typography';

interface HeroHeadlineProps {
  children: string;
}

export function HeroHeadline({ children }: HeroHeadlineProps) {
  return (
    <Typography
      className="HeroHeadline-root"
      variant="h1"
      component="h1"
      sx={{ maxWidth: '600px' }}
    >
      {children}
    </Typography>
  );
}
