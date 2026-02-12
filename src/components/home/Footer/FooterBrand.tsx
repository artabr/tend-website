import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextImage from 'next/image';

export function FooterBrand() {
  return (
    <Stack
      className="FooterBrand-root"
      direction="row"
      spacing={1}
      alignItems="center"
    >
      <NextImage
        src="/logo-compact.svg"
        alt="Tend logo"
        width={64}
        height={64}
        style={{ display: 'block' }}
      />
      <Typography variant="body2" sx={{ mx: '20px' }}>
        Tend
      </Typography>
    </Stack>
  );
}
