import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
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

interface FeatureRowProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

function FeatureRow({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureRowProps) {
  return (
    <Flex
      direction={{ base: 'column', md: reverse ? 'row-reverse' : 'row' }}
      alignItems="center"
      gap={{ base: 8, md: 12 }}
      py={{ base: 12, md: 16 }}
    >
      <VStack
        flex={1}
        alignItems={{ base: 'center', md: reverse ? 'flex-end' : 'flex-start' }}
        textAlign={{ base: 'center', md: reverse ? 'right' : 'left' }}
        gap={3}
      >
        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="sm" color="fg.muted" maxW="sm">
          {description}
        </Text>
      </VStack>
      <Box flex={1} maxW={{ base: '240px', md: '280px' }}>
        <Image src={imageSrc} alt={imageAlt} w="full" h="auto" />
      </Box>
    </Flex>
  );
}

export function FeaturesSection({
  calendarView,
  overviewView,
  rewardSection,
}: FeaturesSectionProps) {
  return (
    <Box as="section" py={{ base: 8, md: 12 }}>
      <Container maxW="container.lg">
        {/* Feature 1: Calendar View - Text Left, Image Right */}
        <FeatureRow
          title={calendarView.title}
          description={calendarView.description}
          imageSrc="/images/Detailed calendar feature.png"
          imageAlt="Calendar view showing habit tracking progress"
        />

        {/* Feature 2: Overview/Statistics - Image Left, Text Right */}
        <FeatureRow
          title={overviewView.title}
          description={overviewView.description}
          imageSrc="/images/Detailed statistics feature.png"
          imageAlt="Statistics view showing habit progress across multiple habits"
          reverse
        />

        {/* Feature 3: Rewards/Achievements - Text Left, Image Right */}
        <FeatureRow
          title={rewardSection.heading}
          description={rewardSection.description}
          imageSrc="/images/Achievements feature.png"
          imageAlt="Achievements and rewards for completing habits"
        />
      </Container>
    </Box>
  );
}
