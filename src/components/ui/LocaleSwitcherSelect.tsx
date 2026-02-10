'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import type { Locale } from 'next-intl';
import { useParams } from 'next/navigation';
import { type ChangeEvent, type ReactNode, useTransition } from 'react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Box
      sx={{
        position: 'relative',
        color: 'grey.400',
        opacity: isPending ? 0.3 : 1,
        transition: 'opacity 0.2s',
      }}
    >
      <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        {label}
      </Box>
      <NativeSelect
        defaultValue={defaultValue}
        onChange={onSelectChange}
        disabled={isPending}
        disableUnderline
        sx={{
          color: 'grey.400',
          fontSize: '0.875rem',
          '& select': {
            bgcolor: 'transparent',
            py: 0.5,
            pr: 3,
          },
          '& .MuiNativeSelect-icon': {
            color: 'grey.400',
          },
        }}
      >
        {children}
      </NativeSelect>
    </Box>
  );
}
