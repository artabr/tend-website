import Typography from '@mui/material/Typography';

interface WhyBlockDescriptionProps {
  children: string;
}

export function WhyBlockDescription({ children }: WhyBlockDescriptionProps) {
  return (
    <Typography
      className="WhyBlockDescription-root"
      variant="body1"
      sx={{
        fontSize: '18px',
        lineHeight: '32px',
        color: '#000000',
      }}
    >
      {children}
    </Typography>
  );
}
