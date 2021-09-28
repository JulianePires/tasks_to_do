import Layout from "../components/Layout/index";
import { Flex, HStack } from "@chakra-ui/react";
import { SwitchTheme } from "../components/SwitchTheme/index";
import { Logo } from "../components/Logo/index";
import { BackButton } from "../components/BackButton/index";

export default function Login() {
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
        <HStack>
          <BackButton />
          <SwitchTheme />
        </HStack>

        <Logo />
      </Flex>
    </Layout>
  );
}
