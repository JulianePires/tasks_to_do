import {
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { ChangeEventHandler, useState } from "react";
import { IconType } from "react-icons";
import {
  MdLock,
  MdMail,
  MdPerson,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

type InputTypes =
  | "email"
  | "password"
  | "name"
  | "title"
  | "description"
  | "date";

type InputInfoType = {
  leftIcon: IconType;
  placeholder: string;
  type: string;
  rightIcon?: IconType;
};

interface InputProps {
  type: InputTypes;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | undefined;
}

function switchInputType(type: InputTypes, isVisible: boolean = false) {
  let InputInfo: InputInfoType = {
    leftIcon: MdPerson,
    placeholder: "Username",
    type: "text",
  };
  switch (type) {
    case "email":
      InputInfo = {
        leftIcon: MdMail,
        placeholder: "E-mail",
        type: "email",
      };
      return InputInfo;
    case "password":
      InputInfo = {
        leftIcon: MdLock,
        placeholder: "Password",
        type: "password",
        rightIcon: isVisible ? MdVisibility : MdVisibilityOff,
      };
      return InputInfo;
    default:
      return InputInfo;
  }
}

export function Input({ type, onChange, value }: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleChangeVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <InputGroup>
      <InputLeftAddon bg="orange.500">
        <Icon color="whiteAlpha.900" as={switchInputType(type).leftIcon} />
      </InputLeftAddon>
      <ChakraInput
        colorScheme="orange"
        placeholder={switchInputType(type).placeholder}
        type={switchInputType(type).type}
        onChange={onChange}
        value={value}
      />
      {type === "password" && (
        <InputRightAddon bg="orange.500">
          <Icon
            color="whiteAlpha.900"
            onClick={handleChangeVisibility}
            as={switchInputType(type, isVisible).rightIcon}
          />
        </InputRightAddon>
      )}
    </InputGroup>
  );
}
