'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { Box, Text } from '@chakra-ui/react';
import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/components/ui/native-select';
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
      position="relative"
      color="gray.400"
      opacity={isPending ? 0.3 : 1}
      transition="opacity 0.2s"
    >
      <Text srOnly>{label}</Text>
      <NativeSelectRoot size="sm" variant="plain" disabled={isPending}>
        <NativeSelectField
          defaultValue={defaultValue}
          onChange={onSelectChange}
          bg="transparent"
          color="gray.400"
        >
          {children}
        </NativeSelectField>
      </NativeSelectRoot>
    </Box>
  );
}
