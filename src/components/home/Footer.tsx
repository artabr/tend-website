import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Separator,
  Text,
} from '@chakra-ui/react';

interface FooterProps {
  copyright: string;
  privacyPolicy: string;
}

export function Footer({ copyright, privacyPolicy }: FooterProps) {
  return (
    <Box as="footer" bg="bg.subtle" p={10}>
      <Container maxW="container.xl">
        <Flex
          w="full"
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={6}
        >
          <HStack gap={3}>
            <Text fontSize="xl" fontWeight="bold">
              Tend
            </Text>
          </HStack>

          <HStack as="nav" gap={6}>
            <Link
              href="/privacy"
              fontWeight="medium"
              color="fg.muted"
              _hover={{ textDecoration: 'underline' }}
            >
              {privacyPolicy}
            </Link>
          </HStack>
        </Flex>

        <Separator my={6} />

        <Text textAlign="center" fontSize="md">
          {copyright}
        </Text>
      </Container>
    </Box>
  );
}
