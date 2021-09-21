import { Flex, Heading, Image } from "@chakra-ui/react";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Next-Typescript-ChakraUI Boilerplate">
      <Flex
        w="100%"
        h="100vh"
        bgColor="blackAlpha.900"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="whiteAlpha.900" m="4">
          Boilerplate Next.js + Typescript + Chakra UI + React Query
        </Heading>
        <Image
          w="2xl"
          src="https://insideblock.com/assets/blog/nextjs-o-hype-da-hora-que-esta-dominando-o-desenvolvimento-front-end.png"
          alt="Next"
        />
      </Flex>
    </Layout>
  );
}
