import Typography from '@mui/material/Typography';

interface WhySectionDisclaimerProps {
  children: string;
}

export function WhySectionDisclaimer({ children }: WhySectionDisclaimerProps) {
  return (
    <Typography
      className="WhySectionDisclaimer-root"
      variant="body1"
      sx={{
        textAlign: 'center',
        mt: 4,
        maxWidth: '42rem',
        mx: 'auto',
        display: 'block',
      }}
    >
      {children}
    </Typography>
  );
}
