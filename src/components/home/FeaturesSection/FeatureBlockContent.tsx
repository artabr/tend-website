import Stack from '@mui/material/Stack';
import { FeatureBlockHeading } from './FeatureBlockHeading';
import { FeatureBlockDescription } from './FeatureBlockDescription';

interface FeatureBlockContentProps {
  title: string;
  description: string;
  reverse?: boolean;
}

export function FeatureBlockContent({
  title,
  description,
  reverse = false,
}: FeatureBlockContentProps) {
  return (
    <Stack
      className="FeatureBlockContent-root"
      sx={{
        flex: 1,
        alignItems: {
          xs: 'center',
          md: reverse ? 'flex-end' : 'flex-start',
        },
        textAlign: { xs: 'center', md: reverse ? 'right' : 'left' },
      }}
      spacing={1.5}
    >
      <FeatureBlockHeading>{title}</FeatureBlockHeading>
      <FeatureBlockDescription>{description}</FeatureBlockDescription>
    </Stack>
  );
}
