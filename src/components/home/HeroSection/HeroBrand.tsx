import Box from '@mui/material/Box';
import NextImage from 'next/image';

export function HeroBrand() {
  return (
    <Box
      className="HeroBrand-root"
      sx={{
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NextImage
        src="/logo.svg"
        alt="Tend logo"
        width={40}
        height={40}
        style={{ display: 'block' }}
      />
    </Box>
  );
}
