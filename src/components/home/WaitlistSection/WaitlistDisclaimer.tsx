import Typography from '@mui/material/Typography';

interface WaitlistDisclaimerProps {
  children: string;
}

export function WaitlistDisclaimer({ children }: WaitlistDisclaimerProps) {
  return (
    <Typography
      className="WaitlistDisclaimer-root"
      variant="caption"
      sx={{ fontSize: '13px', color: '#333333' }}
    >
      {children}
    </Typography>
  );
}
