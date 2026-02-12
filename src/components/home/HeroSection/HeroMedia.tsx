import Box from '@mui/material/Box';

interface HeroMediaProps {
  src: string;
  alt: string;
}

export function HeroMedia({ src, alt }: HeroMediaProps) {
  return (
    <Box
      className="HeroMedia-root"
      sx={{
        mt: 4,
        maxWidth: { xs: '280px', md: '460px' },
        mx: 'auto',
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ width: '100%', height: '616px', objectFit: 'contain' }}
      />
    </Box>
  );
}
