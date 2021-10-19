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
import { useLogin } from "../../hooks/useAuthentication";
import { setToken } from "../../services/authenticated";
import { Input } from "../Input";

type FormikLogin = {
  email: string;
  passwordHash: string;
};

export function LoginForm() {
  const { mutate, isLoading } = useLogin();
  const router = useRouter();

  const formik = useFormik<FormikLogin>({
    initialValues: {
      email: "",
      passwordHash: "",
    },

    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid email").required("Email required"),
      passwordHash: yup
        .string()
        .min(6, "Min lenght is 6")
        .max(28, "Max lenght is 8")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (data) => {
          setToken(data);
          router.push(Paths.HOME);
        },
        onError: (data) => {
            console.log(data)
        }
      });
    },
  });
  return (
    <VStack spacing={6}>
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
      <Button
        isLoading={isLoading}
        variant="solid"
        onClick={() => formik.handleSubmit()}
      >
        Login
      </Button>
    </VStack>
  );
}
