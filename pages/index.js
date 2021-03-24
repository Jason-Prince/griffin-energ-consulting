import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ArrowForwardIcon, Icon } from "@chakra-ui/icons";
import { BsArrowRight } from "react-icons/bs";
import {
  Heading,
  Text,
  Code,
  Link,
  Container,
  Grid,
  GridItem,
  Center,
  Square,
  Box,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Wrap,
  WrapItem,
  Stack,
  Flex,
  Spacer,
  AspectRatio,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        height="100vh"
        templateColumns="1fr"
        templateRows="repeat(3, 1fr)"
        margin="8px"
        alignItems="center"
      >
        <Container centerContent>
          <Heading as="h1" fontSize={["4xl", null, "5xl"]}>
            Welcome to{" "}
            <Link color="teal.500" href="https://nextjs.org" isExternal>
              Next.js!
            </Link>
          </Heading>
          <Text fontSize="xl">
            Get started by editing <Code fontSize="xl">pages/index.js</Code>
          </Text>
        </Container>

        <Grid
          templateColumns={["360px", null, "repeat(2, minmax(360px, 500px))"]}
          templateRows={["repeat(4, 125px)", null, "repeat(2, 125px)"]}
          gap="1rem"
          margin="0px auto"
        >
          <LinkBox as="article">
            <Container
              height="100%"
              rounded="md"
              borderWidth="1px"
              centerContent
              _hover={{ color: "teal.500", borderColor: "teal.500" }}
            >
              <Box margin="auto">
                <Heading as="h3" size="md" pb="8px">
                  <LinkOverlay href="https://nextjs.org/docs">
                    Documentation <Icon as={BsArrowRight} />
                  </LinkOverlay>
                </Heading>
                <Text>
                  Find in-depth information about Next.js features and API.
                </Text>
              </Box>
            </Container>
          </LinkBox>

          <LinkBox as="article">
            <Container
              height="100%"
              rounded="md"
              borderWidth="1px"
              centerContent
              _hover={{ color: "teal.500", borderColor: "teal.500" }}
            >
              <Box margin="auto">
                <Heading as="h3" size="md" pb="8px">
                  <LinkOverlay href="https://nextjs.org/learn">
                    Learn <Icon as={BsArrowRight} />
                  </LinkOverlay>
                </Heading>
                <Text>
                  Learn about Next.js in an interactive course with quizzes!
                </Text>
              </Box>
            </Container>
          </LinkBox>

          <LinkBox as="article">
            <Container
              height="100%"
              rounded="md"
              borderWidth="1px"
              centerContent
              _hover={{ color: "teal.500", borderColor: "teal.500" }}
            >
              <Box margin="auto">
                <Heading as="h3" size="md" pb="8px">
                  <LinkOverlay href="https://github.com/vercel/next.js/tree/master/examples">
                    Examples <Icon as={BsArrowRight} />
                  </LinkOverlay>
                </Heading>
                <Text>
                  Discover and deploy boilerplate example Next.js projects.
                </Text>
              </Box>
            </Container>
          </LinkBox>

          <LinkBox as="article">
            <Container
              height="100%"
              rounded="md"
              borderWidth="1px"
              centerContent
              _hover={{ color: "teal.500", borderColor: "teal.500" }}
            >
              <Box margin="auto">
                <Heading as="h3" size="md" pb="8px">
                  <LinkOverlay href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                    Deploy <Icon as={BsArrowRight} />
                  </LinkOverlay>
                </Heading>
                <Text>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </Text>
              </Box>
            </Container>
          </LinkBox>
        </Grid>

        <LinkBox>
          <Container centerContent>
            <LinkOverlay
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.logo}
              />
            </LinkOverlay>
          </Container>
        </LinkBox>
      </Grid>
    </>
  );
}
