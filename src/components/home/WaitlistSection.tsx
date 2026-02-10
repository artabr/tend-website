'use client';

import { Box, Card, Container, Heading, Text, VStack } from '@chakra-ui/react';

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
    <Box
      as="section"
      id="waitlist"
      bg="bg.subtle"
      py={{ base: 16, sm: 24, lg: 32 }}
    >
      <Container maxW="container.xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Card.Root shadow="xl">
          <Card.Body>
            <VStack maxW="2xl" mx="auto" textAlign="center" gap={6}>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', sm: '4xl' }}
                fontWeight="bold"
              >
                {title}
              </Heading>
              <Text fontSize="lg" color="fg.muted" whiteSpace="pre-line">
                {description}
              </Text>

              <Box mb={6} w="full">
                <Box id="brevo-form-container" className="brevo-form" />
              </Box>

              <Text fontSize="sm" color="fg.subtle">
                {disclaimer}
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Container>
    </Box>
  );
}
