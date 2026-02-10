import {
  Box,
  Button,
  Container,
  Flex,
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

const TelegramIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

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
    <Box as="section" py={{ base: 12, md: 16 }}>
      <Container maxW="container.lg">
        <Box
          bg="slate.850"
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          position="relative"
          overflow="hidden"
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            gap={8}
          >
            <VStack
              alignItems={{ base: 'center', md: 'flex-start' }}
              gap={4}
              flex={1}
            >
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                color="white"
                lineHeight={1.3}
              >
                {title}
              </Heading>
              <Text fontSize="sm" color="gray.400" maxW="sm">
                {description}
              </Text>

              <HStack flexWrap="wrap" gap={3} mt={2}>
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    asChild
                    size="sm"
                    variant="outline"
                    borderColor="gray.600"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                  >
                    <a
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getIcon(button.label)} {button.label}
                    </a>
                  </Button>
                ))}
              </HStack>
            </VStack>

            <Box color="blue.400" opacity={0.8}>
              <TelegramIcon />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
