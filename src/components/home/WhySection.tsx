import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';

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
    <Box as="section" id="why" py={{ base: 12, md: 16 }}>
      <Container maxW="container.lg">
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="semibold"
          textAlign="center"
          mb={{ base: 8, md: 12 }}
        >
          {title}
        </Heading>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 8, md: 12 }}
        >
          {blocks.slice(0, 2).map((block) => (
            <VStack key={block.title} alignItems="flex-start" gap={2}>
              <Heading as="h3" fontSize="md" fontWeight="bold">
                {block.title}
              </Heading>
              <Text fontSize="sm" color="fg.muted">
                {block.description}
              </Text>
            </VStack>
          ))}
        </Grid>

        {disclaimer && (
          <Text
            fontSize="xs"
            color="fg.subtle"
            textAlign="center"
            mt={8}
            maxW="2xl"
            mx="auto"
          >
            {disclaimer}
          </Text>
        )}
      </Container>
    </Box>
  );
}
