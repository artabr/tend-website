import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <Box bg="slate.850" position="sticky" top={0} zIndex={100}>
      <Container maxW="container.lg">
        <Flex h="12" alignItems="center" justifyContent="space-between">
          <HStack gap={6}>
            <HStack gap={1}>
              <Text fontSize="md" fontWeight="bold" color="primary.400">
                T
              </Text>
              <Text fontSize="sm" fontWeight="medium" color="white">
                Tend
              </Text>
            </HStack>
            <HStack gap={4}>
              <NavigationLink href="/">{t('home')}</NavigationLink>
              <NavigationLink href="https://docs.tend-app.pro/en">
                {t('docs')}
              </NavigationLink>
            </HStack>
          </HStack>
          <LocaleSwitcher />
        </Flex>
      </Container>
    </Box>
  );
}
