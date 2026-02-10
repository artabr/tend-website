import {
  Box,
  Button,
  Container,
  Heading,
  Image,
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
    <Box as="section" pt={{ base: 8, md: 16 }} pb={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <VStack gap={6} textAlign="center">
          {/* Logo */}
          <Box
            w={10}
            h={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="primary.500">
              T
            </Text>
          </Box>

          {/* Headline */}
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight={1.2}
            maxW="600px"
          >
            {headline}
          </Heading>

          {/* Subheadline with Why link */}
          <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted">
            {subHeadline}{' '}
            <Link
              href="#why"
              color="primary.500"
              fontWeight="medium"
              textDecoration="underline"
              _hover={{ color: 'primary.600' }}
            >
              {whyLink}
            </Link>
          </Text>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            bg="slate.850"
            color="white"
            px={8}
            borderRadius="full"
            _hover={{ bg: 'gray.700' }}
          >
            <a href="#waitlist">{callToAction}</a>
          </Button>

          {/* Phone Mockup Image */}
          <Box mt={8} maxW={{ base: '280px', md: '360px' }} mx="auto">
            <Image
              src="/images/Main hero image.png"
              alt="Tend app habit tracker interface"
              w="full"
              h="auto"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
