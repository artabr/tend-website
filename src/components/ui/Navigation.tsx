import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <Box bg="gray.900" position="sticky" top={0} zIndex={100}>
      <Container maxW="container.lg">
        <Flex h="16" alignItems="center" justifyContent="space-between">
          <HStack gap={4}>
            <NavigationLink href="/">{t('home')}</NavigationLink>
            <NavigationLink href="https://docs.tend-app.pro/en">
              {t('docs')}
            </NavigationLink>
          </HStack>
          <LocaleSwitcher />
        </Flex>
      </Container>
    </Box>
  );
}
