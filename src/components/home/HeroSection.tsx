import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

interface HeroSectionProps {
  headline: string;
  subHeadline: string;
  callToAction: string;
  whyLink: string;
  disclaimer: string;
}

export function HeroSection({
  headline,
  subHeadline,
  callToAction,
  whyLink,
  disclaimer,
}: HeroSectionProps) {
  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.xl" pt={24}>
        <VStack gap={8} textAlign="center" maxW="5xl" mx="auto">
          <Box position="relative">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="bold"
              lineHeight={1.15}
            >
              {headline}
            </Heading>
            <Box
              position="absolute"
              bottom="-6px"
              left={{ base: 4, lg: 10 }}
              zIndex={-1}
              display={{ base: 'none', md: 'block' }}
            >
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                  stroke="url(#paint0_linear_hero)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_hero"
                    x1="19.0416"
                    y1="4.03539"
                    x2="42.8362"
                    y2="66.9459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stopColor="#5fc3e7" />
                    <stop offset="1" stopColor="#47b9e3" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
          </Box>

          <Text fontSize="xl" color="fg.muted" maxW="3xl">
            {subHeadline}
          </Text>

          <VStack gap={4}>
            <Button
              asChild
              size="lg"
              colorPalette="blue"
              bgGradient="to-r"
              gradientFrom="primary.400"
              gradientTo="primary.600"
              _hover={{ opacity: 0.9 }}
            >
              <a href="#waitlist">
                {callToAction}
                <span>↓</span>
              </a>
            </Button>
            <Link
              href="#why"
              fontSize="lg"
              fontWeight="medium"
              color="primary.400"
              _hover={{ textDecoration: 'underline' }}
            >
              {whyLink}
            </Link>
          </VStack>

          <Text fontSize="sm" color="fg.subtle" maxW="2xl" mt={4}>
            {disclaimer}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
