import Navigation from '@/components/ui/Navigation';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
}
