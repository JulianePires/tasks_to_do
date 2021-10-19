import Layout from "../components/Layout/index";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import { SwitchTheme } from "../components/SwitchTheme/index";
import { Logo } from "../components/Logo/index";
import { BackButton } from "../components/BackButton/index";
import { Form } from "../components/Form";
import { RegisterForm } from "../components/RegisterForm/index";
import { GetServerSideProps } from "next";
import { TOKEN_KEY } from "../services/authenticated";
import { parseCookies } from "nookies";
import { Paths } from "../constants/paths";

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

        <RegisterForm />
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
