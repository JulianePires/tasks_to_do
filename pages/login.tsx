import {
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import { MdLock, MdMail, MdVisibility } from "react-icons/md";

import { BackButton } from "../components/BackButton";
import { Form } from "../components/Form";
import Layout from "../components/Layout";
import { Logo } from "../components/Logo";
import { SwitchTheme } from "../components/SwitchTheme";

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
        <VStack>
          <HStack>
            <BackButton />
            <SwitchTheme />
          </HStack>
          <Logo />
        </VStack>

        <Form type="login"/>
      </Flex>
    </Layout>
  );
}
