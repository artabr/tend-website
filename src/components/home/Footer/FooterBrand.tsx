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
        src="/logo.svg"
        alt="Tend logo"
        width={28}
        height={28}
        style={{ display: 'block' }}
      />
      <Typography variant="body2">Tend</Typography>
    </Stack>
  );
}
