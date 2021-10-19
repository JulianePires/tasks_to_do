import { useFormik } from "formik";
import {
  VStack,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Input } from "./input";
import * as yup from "yup";
import { useLogin, useRegister } from "../../hooks/useAuthentication";

type FormTypes = "login" | "createUser" | "createTask";
type TaskPriority = 0 | 1 | 2;

type FormikType = {
  username?: string;
  email?: string;
  password?: string;
  taskName?: string;
  task?: string;
  deadLine?: Date;
  priority?: TaskPriority;
};

interface FormProps {
  type: FormTypes;
}

export function Form({ type }: FormProps) {
  const loginMutation = useLogin();
  const createMutation = useRegister();

  const formik = useFormik<FormikType>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      taskName: "",
      task: "",
      priority: 0,
      deadLine: new Date(),
    },

    validationSchema: yup.object().shape({
      username: yup
        .string()
        .min(6, "Min lenght is 6")
        .max(28, "Max lenght is 8")
        .required("Username required"),
      email: yup.string().email("Invalid email").required("Email required"),
      password: yup
        .string()
        .min(6, "Min lenght is 6")
        .max(28, "Max lenght is 8")
        .required("Password required"),
      taskName: yup
        .string()
        .min(4, "Min lenght is 4")
        .max(20, "Max lenght is 20")
        .required("Task Name required"),
      task: yup
        .string()
        .min(6, "Min lenght is 6")
        .max(28, "Max lenght is 28")
        .required("Task required"),
      priority: yup.number().required("Priority required"),
      deadLine: yup.date().required("DeadLine required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      if (type === "login") {
        loginMutation.mutate(
          {
            email: values.email!,
            passwordHash: values.password!,
          },
          {
            onSuccess: (data) => {
              console.log(data);
            },
          }
        );
      } else if (type === "createUser") {
        
        createMutation.mutate(
          {
            username: values.username!,
            email: values.email!,
            passwordHash: values.password!,
          },
          {
            onSuccess: (data) => {
              console.log(data);
            },
            onError: (err) => {
              console.log(err)
            }
          }
        );
      }
    },
  });

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      formik.handleSubmit(e);
    }}>
    <VStack spacing={6}>
      {type === "login" ? (
        <>
          <FormControl id="email" isRequired isInvalid={!!formik.errors.email}>
            <Input
              type="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            id="password"
            isRequired
            isInvalid={!!formik.errors.password}
          >
            <Input
              type="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
        </>
      ) : type === "createUser" ? (
        <>
          <FormControl
            id="username"
            isRequired
            isInvalid={!!formik.errors.username}
          >
            <Input
              type="name"
              onChange={formik.handleChange("username")}
              value={formik.values.username}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isRequired isInvalid={!!formik.errors.email}>
            <Input
              type="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            id="password"
            isRequired
            isInvalid={!!formik.errors.password}
          >
            <Input
              type="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
        </>
      ) : (
        <>
          <Input
            type="name"
            onChange={formik.handleChange("taskName")}
            value={formik.values.taskName}
          />
          <Input
            type="name"
            onChange={formik.handleChange("task")}
            value={formik.values.task}
          />
        </>
      )}
      <Button variant="solid" type="submit">
        {type === "login" ? "Login" : "Criar"}
      </Button>
    </VStack>
    </form>
  );
}
