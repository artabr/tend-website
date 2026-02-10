'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

interface WaitlistSectionProps {
  title: string;
  description: string;
  disclaimer: string;
  actionButton: string;
}

export function WaitlistSection({
  title,
  description,
  disclaimer,
  actionButton,
}: WaitlistSectionProps) {
  return (
    <Box as="section" id="waitlist" bg="gray.100" py={{ base: 12, md: 16 }}>
      <Container maxW="container.md">
        <VStack gap={4} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="semibold"
          >
            {title}
          </Heading>
          <Text fontSize="sm" color="fg.muted" maxW="lg">
            {description}
          </Text>

          <Box w="full" maxW="400px" mt={4}>
            <Box id="brevo-form-container" className="brevo-form" />
          </Box>

          <Text fontSize="xs" color="fg.subtle" mt={2}>
            {disclaimer}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
