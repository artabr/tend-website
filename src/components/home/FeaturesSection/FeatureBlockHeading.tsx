import Typography from '@mui/material/Typography';

interface FeatureBlockHeadingProps {
  children: string;
}

export function FeatureBlockHeading({ children }: FeatureBlockHeadingProps) {
  return (
    <Typography
      className="FeatureBlockHeading-root"
      variant="h3"
      component="h3"
    >
      {children}
    </Typography>
  );
}
