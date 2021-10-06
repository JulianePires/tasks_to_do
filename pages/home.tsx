import {
  Flex,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
  Tfoot,
  Box,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";

import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { Toolbar } from "../components/Toolbar";
import { Views } from "../types";
import { IoMdTrash } from "react-icons/io";

export default function HomePage() {
  const [currentView, setCurrentView] = useState<Views>("todo");
  return (
    <Layout title="Home | TTD">
      <Flex w="100%" h="100vh" flexDirection="column" alignItems="center">
        <Header />
        <Toolbar
          currentView={currentView}
          onChangeView={(view) => setCurrentView(view)}
        />
        <Box w="80%">
             {/*TODO: Adicionar um botão de add tasks  */}
             {/*TODO: Deixar o layout responsivo  */}
             
          <Table colorScheme="orange" size="sm" px="10" mt="8">
            <Thead>
              <Tr>
                <Th color="orange">Name</Th>
                <Th color="orange" textAlign="center">Priority</Th>
                <Th color="orange" textAlign="center">Expires in</Th>
                <Th color="orange" textAlign="center">Is Done</Th>
                <Th color="orange" isNumeric>Remove</Th>
              </Tr>
            </Thead>
            <Tbody fontWeight="semibold">
              <Tr>
                <Td>Lavar a louça</Td>
                <Td textAlign="center" fontWeight="semibold" color="red.600">
                  High
                </Td>
                <Td textAlign="center">29/05</Td>
                <Td textAlign="center">
                  <Checkbox />
                </Td>
                <Td isNumeric>
                  <IconButton
                    variant="ghost"
                    aria-label="remove"
                    icon={<IoMdTrash />}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Fazer exercícios</Td>
                <Td textAlign="center" fontWeight="semibold" color="yellow.600">
                  Medium
                </Td>
                <Td textAlign="center">29/07</Td>
                <Td textAlign="center">
                  <Checkbox />
                </Td>
                <Td isNumeric>
                  <IconButton
                    variant="ghost"
                    aria-label="remove"
                    icon={<IoMdTrash />}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Organizar os livros</Td>
                <Td textAlign="center" fontWeight="semibold" color="green.600">
                  Low
                </Td>
                <Td textAlign="center">29/02</Td>
                <Td textAlign="center">
                  <Checkbox />
                </Td>
                <Td isNumeric>
                  <IconButton
                    variant="ghost"
                    aria-label="remove"
                    icon={<IoMdTrash />}
                  />
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th color="orange">Name</Th>
                <Th color="orange" textAlign="center">Priority</Th>
                <Th color="orange" textAlign="center">Expires in</Th>
                <Th color="orange" textAlign="center">Is Done</Th>
                <Th color="orange" isNumeric>Remove</Th>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </Flex>
    </Layout>
  );
}
