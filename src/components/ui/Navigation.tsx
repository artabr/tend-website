import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <Box
      sx={{
        bgcolor: 'slate.850',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            height: 48,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <NextImage
                src="/logo.svg"
                alt="Tend logo"
                width={24}
                height={24}
                style={{ display: 'block' }}
              />
              <Typography
                sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'white' }}
              >
                Tend
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <NavigationLink href="/">{t('home')}</NavigationLink>
              <NavigationLink href="https://docs.tend-app.pro/en">
                {t('docs')}
              </NavigationLink>
            </Stack>
          </Stack>
          <LocaleSwitcher />
        </Box>
      </Container>
    </Box>
  );
}
