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

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  calendarView: Feature;
  overviewView: Feature;
  rewardSection: {
    heading: string;
    description: string;
  };
}

export function FeaturesSection({
  calendarView,
  overviewView,
  rewardSection,
}: FeaturesSectionProps) {
  return (
    <Box as="section" py={{ base: 16, sm: 24, lg: 32 }}>
      <Container maxW="container.xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack mb={{ base: 12, sm: 16, lg: 24 }} gap={4} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
            Track Your Progress
          </Heading>
        </VStack>

        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={8}
        >
          <Card.Root
            borderWidth="1px"
            borderColor="primary.300/30"
            shadow="none"
            transition="border-color 0.3s"
            _hover={{ borderColor: 'primary.400' }}
          >
            <Card.Body>
              <Flex
                w={14}
                h={14}
                bg="primary.400/10"
                color="primary.400"
                borderRadius="lg"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <Text fontSize="2xl">📅</Text>
              </Flex>
              <Heading as="h3" fontSize="xl" mb={2}>
                {calendarView.title}
              </Heading>
              <Text color="fg.muted" whiteSpace="pre-line">
                {calendarView.description}
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            borderWidth="1px"
            borderColor="green.300/30"
            shadow="none"
            transition="border-color 0.3s"
            _hover={{ borderColor: 'green.400' }}
          >
            <Card.Body>
              <Flex
                w={14}
                h={14}
                bg="green.400/10"
                color="green.400"
                borderRadius="lg"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <Text fontSize="2xl">📊</Text>
              </Flex>
              <Heading as="h3" fontSize="xl" mb={2}>
                {overviewView.title}
              </Heading>
              <Text color="fg.muted" whiteSpace="pre-line">
                {overviewView.description}
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            borderWidth="1px"
            borderColor="yellow.300/30"
            shadow="none"
            transition="border-color 0.3s"
            _hover={{ borderColor: 'yellow.400' }}
            gridColumn={{ sm: 'span 2', lg: 'span 1' }}
          >
            <Card.Body>
              <Flex
                w={14}
                h={14}
                bg="yellow.400/10"
                color="yellow.400"
                borderRadius="lg"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <Text fontSize="2xl">🏆</Text>
              </Flex>
              <Heading as="h3" fontSize="xl" mb={2}>
                {rewardSection.heading}
              </Heading>
              <Text color="fg.muted" whiteSpace="pre-line">
                {rewardSection.description}
              </Text>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Container>
    </Box>
  );
}
