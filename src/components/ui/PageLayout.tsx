import Navigation from '@/components/ui/Navigation';
import { Box } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <Box minH="100vh">
      <Navigation />
      <Box>{children}</Box>
    </Box>
  );
}
