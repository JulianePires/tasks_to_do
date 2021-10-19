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
import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { SwitchTheme } from "../components/SwitchTheme";
import { TOKEN_KEY } from '../services/authenticated';
import { GetServerSideProps } from 'next';
import { parseCookies } from "nookies";
import { Paths } from '../constants/paths';

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

        <LoginForm/>
      </Flex>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN_KEY]: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: Paths.HOME,
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
};
