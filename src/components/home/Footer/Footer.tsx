import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FooterBrand } from './FooterBrand';
import { FooterNav } from './FooterNav';

interface FooterProps {
  copyright: string;
  privacyPolicy: string;
}

export function Footer({ privacyPolicy }: FooterProps) {
  return (
    <Box className="Footer-root" component="footer" sx={{ py: 4 }}>
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
          <FooterBrand />
          <FooterNav privacyPolicy={privacyPolicy} />
        </Box>
      </Container>
    </Box>
  );
}
