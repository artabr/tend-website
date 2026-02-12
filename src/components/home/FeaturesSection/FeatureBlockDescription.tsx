import Typography from '@mui/material/Typography';

interface FeatureBlockDescriptionProps {
  children: string;
}

export function FeatureBlockDescription({
  children,
}: FeatureBlockDescriptionProps) {
  return (
    <Typography
      className="FeatureBlockDescription-root"
      variant="body1"
      sx={{ maxWidth: 'sm' }}
    >
      {children}
    </Typography>
  );
}
