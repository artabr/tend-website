'use client';

import { Link } from '@/i18n/navigation';
import Box from '@mui/material/Box';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { ComponentProps } from 'react';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Box
      component={Link}
      href={href}
      aria-current={isActive ? 'page' : undefined}
      sx={{
        display: 'inline-block',
        px: 1,
        py: 1.5,
        transition: 'color 0.2s',
        color: isActive ? 'white' : 'grey.400',
        textDecoration: 'none',
        '&:hover': { color: 'grey.200' },
      }}
      {...rest}
    />
  );
}
