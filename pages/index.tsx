import { Flex, Text, VStack, HStack, Button } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <Layout title="Next-Typescript-ChakraUI Boilerplate">
      <Flex
        w="100%"
        h="100vh"
        p="10"
        bgColor="blackAlpha.900"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Logo />

        <VStack>
          <Text fontSize="xl">Crie</Text>
          <Text fontSize="xl">Categorize</Text>
          <Text fontSize="xl">Liste</Text>
          <Text fontSize="xl">Check</Text>
        </VStack>

        <HStack>
          <Button size="lg" colorScheme="blue">Entrar</Button>
          <Button size="lg" colorScheme="orange" variant="outline">Criar</Button>
        </HStack>
      </Flex>
    </Layout>
  );
}
