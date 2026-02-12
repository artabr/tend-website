import Box from '@mui/material/Box';

interface FeatureBlockMediaProps {
  src: string;
  alt: string;
}

export function FeatureBlockMedia({ src, alt }: FeatureBlockMediaProps) {
  return (
    <Box
      className="FeatureBlockMedia-root"
      sx={{ flex: 1, maxWidth: { xs: '240px', md: '280px' } }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
}
