import NextLink from "next/link";
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <Layout>
      <Container>
        {/* Greeting */}
        <Box
          bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")}
          textAlign="center"
          mt={6}
          mb={6}
          p={3}
          borderRadius="3xl"
          boxShadow="md"
          css={{ backdropFilter: "blur(10px)" }}>
          Hello, I&apos;m an front-end developer!
        </Box>

        {/* Introduce Name */}
        <Box display={{ md: "flex" }} mb={6}>
          <Box
            flexGrow={1}
            textAlign="center"
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}>
            <Box
              borderColor={useColorModeValue(
                "blackAlpha.300",
                "whiteAlpha.900"
              )}
              borderWidth={2}
              borderStyle="solid"
              w="120px"
              h="120px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden">
              <ProfileImage
                src="/images/avatar.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>

          <Box flexGrow={1} textAlign="center" mt={{ base: 3, md: 6 }}>
            <Heading as={"h2"} variant="page-title">
              Truong Dang Dong
            </Heading>
            <p>Front-end developer (ReactJS / React Native)</p>
          </Box>
        </Box>

        {/* Working explaination */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m a front-end developer. I had 2 year experiences working on
            React Native , and learning about ReactJS , Javascript ,
            Typescript... building cross platform app for both IOS and Android.
            I also searching about middleware, Firebase, Google Cloud, a little
            bit about Php, MySql... Now, i&apos;m working at
            <NextLink href="https://irtech.com.vn/" passHref scroll={false}>
              <Link> IRTech Vietnam</Link>
            </NextLink>
            .
          </Paragraph>

          <Box my={4} align="center">
            <NextLink href="/works" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="steal"
                bg={useColorModeValue("blackAlpha.800", "whiteAlpha.900")}
                borderRadius="3xl">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        {/* Bio description */}
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Da Nang, Viet Nam
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Start study in Da Nang University of Science and Technology
          </BioSection>
          <BioSection>
            <BioYear>2021 - Present</BioYear>
            Working at{" "}
            <NextLink href="https://irtech.com.vn/" passHref scroll={false}>
              <Link> IRTech Vietnam</Link>
            </NextLink>
            .
          </BioSection>
        </Section>

        {/* Favourite session */}
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Favourites
          </Heading>
          <Paragraph>
            Video games, sports, animations, team buildings, beer parties 🍻
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
}
