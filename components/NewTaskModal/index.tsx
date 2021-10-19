import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  VStack,
  FormControl,
  FormErrorMessage,
  Button,
  Select,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCreateTask } from "../../hooks/useManageTasks";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormikTask {
  taskName: string;
  task: string;
  deadLine: string;
  priority: 0 | 1 | 2;
}

export function NewTaskModal({ isOpen, onClose }: NewTaskModalProps) {
  const { mutate, isLoading } = useCreateTask();

  const formik = useFormik<FormikTask>({
    initialValues: {
      taskName: "",
      task: "",
      deadLine: "",
      priority: 0,
    },

    validationSchema: yup.object().shape({
      taskName: yup
        .string()
        .min(3, "Minimal Characters 3")
        .max(20, "Maximal Characters 20")
        .required("Task name is required"),
      task: yup
        .string()
        .min(4, "Min Characters 4")
        .max(25, "Max Characters 25")
        .required("Task description is required"),
      deadLine: yup.string().required("Deadline is required"),
      priority: yup
        .number()
        .lessThan(3)
        .moreThan(-1)
        .required("Priority is required"),
    }),

    onSubmit: (values, actions) => {
      mutate(values, {
        onSuccess: () => {
          onClose();
        },
        onError: () => {
          actions.setFieldError("priority", "Ocorreu um erro ao criar a task");
        },
      });
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="80%" pt="8">
        <ModalBody>
          <VStack spacing={6}>
            <FormControl
              id="taskName"
              isRequired
              isInvalid={!!formik.errors.taskName}
            >
              <Input
                type="text"
                placeholder="Task name"
                onChange={formik.handleChange("taskName")}
                value={formik.values.taskName}
              />
              <FormErrorMessage>{formik.errors.taskName}</FormErrorMessage>
            </FormControl>
            <FormControl id="task" isRequired isInvalid={!!formik.errors.task}>
              <Input
                placeholder="Description"
                type="text"
                onChange={formik.handleChange("task")}
                value={formik.values.task}
              />
              <FormErrorMessage>{formik.errors.task}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="deadLine"
              isRequired
              isInvalid={!!formik.errors.deadLine}
            >
              <Input
                type="date"
                onChange={formik.handleChange("deadLine")}
                value={formik.values.deadLine}
              />
              <FormErrorMessage>{formik.errors.deadLine}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="priority"
              isRequired
              isInvalid={!!formik.errors.priority}
            >
              <Select
                placeholder={
                  formik.values.priority === 0
                    ? "Low"
                    : formik.values.priority === 1
                    ? "Medium"
                    : "High"
                }
              >
                <option onClick={() => formik.setFieldValue("priority", 2)}>
                  High
                </option>
                <option onClick={() => formik.setFieldValue("priority", 1)}>
                  Medium
                </option>
                <option onClick={() => formik.setFieldValue("priority", 0)}>
                  Low
                </option>
              </Select>
              <FormErrorMessage>{formik.errors.priority}</FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isLoading}
              variant="solid"
              onClick={() => formik.handleSubmit()}
            >
              Create Task
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
