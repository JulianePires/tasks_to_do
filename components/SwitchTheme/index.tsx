import { useColorMode, IconButton } from "@chakra-ui/react";
import { MdBrightness4 } from "react-icons/md";

export function SwitchTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="switch theme"
      colorScheme="orange"
      variant="outline"
      color={colorMode === "dark" ? "white" : "orange.500"}
      icon={<MdBrightness4  />}
      onClick={toggleColorMode}
    />
  );
}
