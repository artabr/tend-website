import Box from '@mui/material/Box';
import { FeatureBlockContent } from './FeatureBlockContent';
import { FeatureBlockMedia } from './FeatureBlockMedia';

interface FeatureBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function FeatureBlock({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureBlockProps) {
  return (
    <Box
      className="FeatureBlock-root"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: reverse ? 'row-reverse' : 'row',
        },
        alignItems: 'center',
        gap: { xs: 4, md: 6 },
        py: { xs: 6, md: 8 },
      }}
    >
      <FeatureBlockContent
        title={title}
        description={description}
        reverse={reverse}
      />
      <FeatureBlockMedia src={imageSrc} alt={imageAlt} />
    </Box>
  );
}
