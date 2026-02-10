import { Box, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';

interface FooterProps {
  copyright: string;
  privacyPolicy: string;
}

export function Footer({ copyright, privacyPolicy }: FooterProps) {
  return (
    <Box as="footer" py={8}>
      <Container maxW="container.lg">
        <Flex
          w="full"
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <HStack gap={2}>
            <Text fontSize="lg" fontWeight="bold" color="primary.500">
              T
            </Text>
            <Text fontSize="md" fontWeight="medium">
              Tend
            </Text>
          </HStack>

          <HStack as="nav" gap={4} fontSize="sm" color="fg.muted">
            <Link href="/privacy" _hover={{ textDecoration: 'underline' }}>
              {privacyPolicy}
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
