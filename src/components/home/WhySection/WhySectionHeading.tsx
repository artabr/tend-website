import Typography from '@mui/material/Typography';

interface WhySectionHeadingProps {
  children: string;
}

export function WhySectionHeading({ children }: WhySectionHeadingProps) {
  return (
    <Typography
      className="WhySectionHeading-root"
      variant="h2"
      component="h2"
      sx={{
        textAlign: 'center',
        mb: { xs: 4, md: 6 },
      }}
    >
      {children}
    </Typography>
  );
}
