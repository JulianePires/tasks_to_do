import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

import { CheckText } from "../components/CheckText";
import Layout from "../components/Layout";
import { Logo } from "../components/Logo";
import { SwitchTheme } from "../components/SwitchTheme";
import { NavigationPaths } from "../constants/index";

export default function Home() {
  const router = useRouter();

  return (
    <Layout title="Início | TTD">
      <Flex
        w="100%"
        h="100vh"
        p="10"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <VStack>
          <SwitchTheme />
          <Logo />
        </VStack>

        <VStack>
          <CheckText label="Crie" />
          <CheckText label="Categorize" />
          <CheckText label="Liste" />
          <CheckText label="Check" />
        </VStack>

        <HStack>
          <Button
            size="lg"
            variant="solid"
            onClick={() => router.push(NavigationPaths.LOGIN)}
          >
            Entrar
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push(NavigationPaths.CREATE)}
          >
            Criar
          </Button>
        </HStack>
      </Flex>
    </Layout>
  );
}
