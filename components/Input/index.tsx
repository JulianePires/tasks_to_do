import {
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { ChangeEventHandler, useState } from "react";
import DatePicker from "react-datepicker";
import { IconType } from "react-icons";
import { IoMdCalendar } from "react-icons/io";
import {
  MdCreate,
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
  onChange: (date: string) => void;
  value: string | undefined;
}

function switchInputType(type: InputTypes, isVisible: boolean = false) {
  let InputInfo: InputInfoType = {
    leftIcon: MdPerson,
    placeholder: "Username",
    type: "text",
  };
  switch (type) {
    case "title":
      InputInfo = {
        leftIcon: MdCreate,
        placeholder: "Task Title",
        type: "text",
      };
      return InputInfo;
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
        type: isVisible ? "text" : "password",
        rightIcon: isVisible ? MdVisibility : MdVisibilityOff,
      };
      return InputInfo;

    case "date":
      InputInfo = {
        leftIcon: IoMdCalendar,
        placeholder: "DueDate",
        type: "date",
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
      {type === "date" ? (
        <DatePicker
          onChange={(date) => onChange(date?.toString()!)}
          value={value}
        />
      ) : (
        <ChakraInput
          colorScheme="orange"
          placeholder={switchInputType(type).placeholder}
          type={switchInputType(type).type}
          onChange={({ target }) => onChange(target.value)}
          value={value}
        />
      )}
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
