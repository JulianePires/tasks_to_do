import Layout from "../components/Layout/index";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import { SwitchTheme } from "../components/SwitchTheme/index";
import { Logo } from "../components/Logo/index";
import { BackButton } from "../components/BackButton/index";
import { Form } from "../components/Form";

export default function Create() {
  return (
    <Layout title="Login | TTD">
      <Flex
        w="100%"
        h="100vh"
        p="10"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <VStack>
          <HStack>
            <BackButton />
            <SwitchTheme />
          </HStack>
          <Logo />
        </VStack>

        <Form type="createUser"/>
      </Flex>
    </Layout>
  );
}
