import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

interface FooterNavProps {
  privacyPolicy: string;
}

export function FooterNav({ privacyPolicy }: FooterNavProps) {
  return (
    <Stack
      className="FooterNav-root"
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
  );
}
