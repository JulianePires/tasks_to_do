import { useFormik } from "formik";
import {
  VStack,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Input } from "./input";
import * as yup from "yup";

type FormTypes = "login" | "createUser" | "createTask";
type TaskPriority = "low" | "medium" | "high";

type FormikType = {
  username?: string;
  email?: string;
  password?: string;
  title?: string;
  description?: string;
  date?: Date;
  priority?: TaskPriority;
};

interface FormProps {
  type: FormTypes;
}

export function Form({ type }: FormProps) {
  const formik = useFormik<FormikType>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      title: "",
      description: "",
      priority: "low",
      date: new Date(),
    },
    onSubmit: () => {},
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <VStack spacing={6}>
        {type === "login" ? (
          <>
            <FormControl
              id="email"
              isRequired
              isInvalid={!!formik.errors.email}
            >
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
            <FormControl
              id="email"
              isRequired
              isInvalid={!!formik.errors.email}
            >
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
              onChange={formik.handleChange("username")}
              value={formik.values.username}
            />
            <Input
              type="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
            <Input
              type="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
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
