import Typography from '@mui/material/Typography';

interface WhySectionDisclaimerProps {
  children: string;
}

export function WhySectionDisclaimer({ children }: WhySectionDisclaimerProps) {
  return (
    <Typography
      className="WhySectionDisclaimer-root"
      variant="caption"
      sx={{
        textAlign: 'center',
        mt: 4,
        maxWidth: '42rem',
        mx: 'auto',
        display: 'block',
        fontSize: '18px',
        color: '#000000',
      }}
    >
      {children}
    </Typography>
  );
}
