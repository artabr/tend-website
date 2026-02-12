import Typography from '@mui/material/Typography';

interface WhyBlockHeadingProps {
  children: string;
}

export function WhyBlockHeading({ children }: WhyBlockHeadingProps) {
  return (
    <Typography
      className="WhyBlockHeading-root"
      variant="h4"
      component="h3"
    >
      {children}
    </Typography>
  );
}
