import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextImage from 'next/image';
import Stack from '@mui/material/Stack';

interface FooterProps {
  copyright: string;
  privacyPolicy: string;
}

export function Footer({ copyright, privacyPolicy }: FooterProps) {
  return (
    <Box component="footer" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <NextImage
              src="/logo.svg"
              alt="Tend logo"
              width={28}
              height={28}
              style={{ display: 'block' }}
            />
            <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
              Tend
            </Typography>
          </Stack>

          <Stack
            component="nav"
            direction="row"
            spacing={2}
            sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
          >
            <Link
              href="/privacy"
              sx={{ '&:hover': { textDecoration: 'underline' } }}
            >
              {privacyPolicy}
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
