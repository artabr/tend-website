import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

interface WhyBlock {
  title: string;
  description: string;
}

interface WhySectionProps {
  title: string;
  disclaimer: string;
  blocks: WhyBlock[];
}

export function WhySection({ title, disclaimer, blocks }: WhySectionProps) {
  return (
    <Box as="section" id="why" bg="bg.subtle" py={{ base: 16, sm: 24, lg: 32 }}>
      <Container maxW="container.xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack mb={{ base: 12, sm: 16, lg: 20 }} gap={6} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Text fontSize="lg" color="fg.muted" maxW="3xl" whiteSpace="pre-line">
            {disclaimer}
          </Text>
        </VStack>

        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={8}>
          {blocks.map((block) => (
            <Card.Root
              key={block.title}
              borderWidth="1px"
              borderColor="blue.300/30"
              shadow="none"
              transition="border-color 0.3s"
              _hover={{ borderColor: 'blue.400' }}
            >
              <Card.Body>
                <Flex
                  w={14}
                  h={14}
                  bg="blue.400/10"
                  color="blue.400"
                  borderRadius="lg"
                  alignItems="center"
                  justifyContent="center"
                  mb={4}
                >
                  <Text fontSize="2xl">🚀</Text>
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>
                  {block.title}
                </Heading>
                <Text color="fg.muted" whiteSpace="pre-line">
                  {block.description}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
