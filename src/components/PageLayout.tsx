import Navigation from '@/components/ui/Navigation';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <>
      <Head>
        <title>{[title, t('pageTitle')].join(' - ')}</title>
      </Head>
      <div>
        <Navigation />
        <div>{children}</div>
      </div>
    </>
  );
}

PageLayout.messages = ['PageLayout', ...Navigation.messages];
