import {
  VStack,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Checkbox,
  IconButton,
  Tfoot,
} from "@chakra-ui/react";
import { compareDesc, format } from "date-fns";
import { IoMdTrash } from "react-icons/io";
import {
  useGetTasks,
  useGetTasksByPriority,
  useChangeTaskStatus,
  useDeleteTask,
} from "../../hooks/useManageTasks";
import { Views, Tasks } from "../../types/index";
import { MobileTask } from "../MobileTask";
import useState, { useEffect } from "react";
import { useQueryClient } from "react-query";
import {
  GET_TASKS_KEY,
  GET_TASKS_PRIORITY_KEY,
} from "../../hooks/useManageTasks";

interface TaskViewProps {
  view: Views;
  search: string;
}

export function TaskView({ view, search }: TaskViewProps) {
  const queryClient = useQueryClient();
  const requestbyView = {
    todo: useGetTasks().data,
    done: useGetTasks().data?.filter((task) => task.status === true),
    priority: useGetTasksByPriority().data,
    date: useGetTasks().data?.sort((a, b) =>
      compareDesc(new Date(a.deadLine), new Date(b.deadLine))
    ),
    search: useGetTasks().data?.filter((task) =>
      task.taskName.includes(search)
    ),
  };

  useEffect(() => {
    queryClient.resetQueries(GET_TASKS_KEY);
    queryClient.refetchQueries(GET_TASKS_KEY);
    queryClient.resetQueries(GET_TASKS_PRIORITY_KEY);
    queryClient.refetchQueries(GET_TASKS_PRIORITY_KEY);
  }, [search])

  const editTaskMutation = useChangeTaskStatus();
  const deleteTaskMutation = useDeleteTask();

  function handleChangeStatus(id: number) {
    editTaskMutation.mutate(id);
    queryClient.resetQueries(GET_TASKS_KEY);
    queryClient.refetchQueries(GET_TASKS_KEY);
    queryClient.resetQueries(GET_TASKS_PRIORITY_KEY);
    queryClient.refetchQueries(GET_TASKS_PRIORITY_KEY);
  }

  function handleDeleteTask(id: number) {
    deleteTaskMutation.mutate(id);
    queryClient.resetQueries(GET_TASKS_KEY);
    queryClient.refetchQueries(GET_TASKS_KEY);
    queryClient.resetQueries(GET_TASKS_PRIORITY_KEY);
    queryClient.refetchQueries(GET_TASKS_PRIORITY_KEY);
  }

  return (
    <>
      {requestbyView[view]?.map((task) => (
        <VStack mt="6" key={task.idTask}>
          <MobileTask
            name={task.taskName}
            dueDate={task.deadLine}
            priority={task.priority}
            isSelected={task.status}
            onChange={() => handleChangeStatus(task.idTask)}
            onDelete={() => handleDeleteTask(task.idTask)}
          />
        </VStack>
      ))}

      {/* Desktop */}
      <Table
        display={["none", "none", "table"]}
        colorScheme="orange"
        size="sm"
        px="10"
        mt="8"
      >
        <Thead>
          <Tr>
            <Th color="orange">Name</Th>
            <Th color="orange" textAlign="center">
              Priority
            </Th>
            <Th color="orange" textAlign="center">
              Expires in
            </Th>
            <Th color="orange" textAlign="center">
              Is Done
            </Th>
            <Th color="orange" isNumeric>
              Remove
            </Th>
          </Tr>
        </Thead>
        <Tbody fontWeight="semibold">
          {requestbyView[view]?.map((task) => (
            <Tr key={task.idTask}>
              <Td>{task.taskName}</Td>
              <Td textAlign="center" fontWeight="semibold" color="red.600">
                {task.priority === 0
                  ? "Low"
                  : task.priority === 1
                  ? "Medium"
                  : "High"}
              </Td>
              <Td textAlign="center">
                {format(new Date(task.taskDate), "dd/MM")}
              </Td>
              <Td textAlign="center">
                <Checkbox
                  isChecked={task.status}
                  onChange={() => handleChangeStatus(task.idTask)}
                />
              </Td>
              <Td isNumeric>
                <IconButton
                  variant="ghost"
                  aria-label="remove"
                  icon={<IoMdTrash />}
                  onClick={() => handleDeleteTask(task.idTask)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th color="orange">Name</Th>
            <Th color="orange" textAlign="center">
              Priority
            </Th>
            <Th color="orange" textAlign="center">
              Expires in
            </Th>
            <Th color="orange" textAlign="center">
              Is Done
            </Th>
            <Th color="orange" isNumeric>
              Remove
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}
