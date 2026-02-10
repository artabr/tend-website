import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

interface ButtonItem {
  label: string;
  url: string;
}

interface FollowUsSectionProps {
  title: string;
  description: string;
  buttons: ButtonItem[];
}

const getIcon = (label: string) => {
  switch (label) {
    case 'Twitter':
      return '𝕏';
    case 'Telegram':
      return '✈️';
    case 'Bluesky':
      return '🦋';
    default:
      return null;
  }
};

export function FollowUsSection({
  title,
  description,
  buttons,
}: FollowUsSectionProps) {
  return (
    <Box as="section" py={{ base: 16, sm: 24, lg: 32 }}>
      <Container maxW="container.xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Card.Root
          bgGradient="to-br"
          gradientFrom="primary.400/10"
          gradientTo="purple.400/10"
        >
          <Card.Body>
            <VStack maxW="3xl" mx="auto" textAlign="center" gap={6}>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', sm: '4xl' }}
                fontWeight="bold"
              >
                {title}
              </Heading>
              <Text fontSize="lg" color="fg.muted">
                {description}
              </Text>

              <HStack flexWrap="wrap" justifyContent="center" gap={4}>
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    asChild
                    size="lg"
                    colorPalette="blue"
                  >
                    <a
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getIcon(button.label)}
                      {button.label}
                    </a>
                  </Button>
                ))}
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Container>
    </Box>
  );
}
