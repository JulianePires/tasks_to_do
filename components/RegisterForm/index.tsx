import {
  Button,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as yup from "yup";

import { Paths } from "../../constants/paths";
import { useRegister } from "../../hooks/useAuthentication";
import { Input } from "../Input";

type FormikRegister = {
  username: string;
  email: string;
  passwordHash: string;
};

export function RegisterForm() {
  const { mutate } = useRegister();
  const router = useRouter();

  const formik = useFormik<FormikRegister>({
    initialValues: {
      username: "",
      email: "",
      passwordHash: "",
    },

    validationSchema: yup.object().shape({
      username: yup
        .string()
        .min(6, "Min lenght is 6")
        .max(28, "Max lenght is 8")
        .required("Username required"),
      email: yup.string().email("Invalid email").required("Email required"),
      passwordHash: yup
        .string()
        .min(6, "Min lenght is 6")
        .max(28, "Max lenght is 8")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          router.push(Paths.LOGIN);
        },
      });
    },
  });
  return (
    <VStack spacing={6}>
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
        isInvalid={!!formik.errors.passwordHash}
      >
        <Input
          type="password"
          onChange={formik.handleChange("passwordHash")}
          value={formik.values.passwordHash}
        />
        <FormErrorMessage>{formik.errors.passwordHash}</FormErrorMessage>
      </FormControl>
      <Button variant="solid" onClick={() => formik.handleSubmit()}>
        Create
      </Button>
    </VStack>
  );
}
