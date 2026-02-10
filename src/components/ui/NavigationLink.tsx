'use client';

import { Link } from '@/i18n/navigation';
import { Box } from '@chakra-ui/react';
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
      asChild
      display="inline-block"
      px={2}
      py={3}
      transition="colors 0.2s"
      color={isActive ? 'white' : 'gray.400'}
      _hover={{ color: 'gray.200' }}
    >
      <Link
        aria-current={isActive ? 'page' : undefined}
        href={href}
        {...rest}
      />
    </Box>
  );
}
