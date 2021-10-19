import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { IoMdLogOut } from "react-icons/io";

import { Logo } from "../Logo";
import { SwitchTheme } from "../SwitchTheme";
import { logout } from "../../services/authenticated";
import { useRouter } from "next/router";
import { Paths } from "../../constants/paths";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push(Paths.START);
  }

  return (
    <HStack
      maxH="28"
      w="100%"
      p="10"
      justifyContent="space-between"
      bgColor="blackAlpha.400"
    >
      <IconButton
        aria-label="menu"
        onClick={handleLogout}
        fontSize="xl"
        icon={<IoMdLogOut />}
      />

      <HStack spacing="4">
        <Logo w="32" />
        <SwitchTheme />
      </HStack>

      <HStack spacing="4" display={["none", "none", "flex"]}>
        <Text>{`Welcome back, ${name}`}</Text>
        <Avatar name="Juliane Pires" />
      </HStack>
    </HStack>
  );
}
