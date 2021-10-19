import { Box, Button, Flex, HStack, Input, useDisclosure } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useState } from "react";

import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { TaskView } from "../components/TaskView";
import { Toolbar } from "../components/Toolbar";
import { Paths } from "../constants/paths";
import { useGetLoggedUser } from "../hooks/useLoggedUser";
import { useGetTasks } from "../hooks/useManageTasks";
import { TOKEN_KEY } from "../services/authenticated";
import { Views } from "../types";
import { NewTaskModal } from '../components/NewTaskModal/index';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<Views>("todo");
  const [searchValue, setSearchValue] = useState<string>("");

  function onChangeSearchValue(value: string) {
    setSearchValue(value);
  }

  const { data } = useGetLoggedUser();
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Layout title="Home | TTD">
      <Flex w="100%" h="100vh" flexDirection="column" alignItems="center">
        <Header name={data?.userName!} />
        <Toolbar
          currentView={currentView}
          onChangeView={(view) => setCurrentView(view)}
        />
        <Box w="80%">
          <HStack spacing="auto" mt={["4", "5", "8"]}>
            <Button onClick={onOpen}>New Task</Button>
            <Input
              w="50%"
              placeholder="Task name"
              colorScheme="orange"
              variant="filled"
              value={searchValue}
              onChange={({ target }) => onChangeSearchValue(target.value)}
            />
          </HStack>
          <TaskView search={searchValue} view={currentView} />
        </Box>
        <NewTaskModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN_KEY]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: Paths.START,
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
};
