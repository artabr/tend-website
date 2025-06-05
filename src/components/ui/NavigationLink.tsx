import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ComponentProps } from 'react';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const router = useRouter();
  const pathname = router.asPath;
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
        isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200',
      )}
      href={href}
      {...rest}
    />
  );
}
