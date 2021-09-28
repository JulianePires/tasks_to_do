import { useColorMode, IconButton } from "@chakra-ui/react";
import { MdBrightness4 } from "react-icons/md";

export function SwitchTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="switch theme"
      colorScheme="blue"
      variant="ghost"
      icon={<MdBrightness4 />}
      onClick={toggleColorMode}
    />
  );
}
