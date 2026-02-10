import Navigation from '@/components/ui/Navigation';
import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navigation />
      <Box>{children}</Box>
    </Box>
  );
}
