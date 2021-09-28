import { Image, useColorMode } from "@chakra-ui/react";
import { Paths } from "../../constants";

export function Logo() {
  const { colorMode } = useColorMode();
  return (
    <Image
      w={["48", "56", "60", "64", "96"]}
      src={colorMode === "dark" ? Paths.LOGODARKBKG : Paths.LOGOLIGHTBKG}
      alt="Tasks To Do"
    />
  );
}
