import { Image, useColorMode } from "@chakra-ui/react";
import { Paths } from "../../constants";

interface LogoProps {
  w?: string | string[];
}

export function Logo({w=["48", "56", "60", "64", "96"]}: LogoProps) {
  const { colorMode } = useColorMode();
  return (
    <Image
      w={w}
      src={colorMode === "dark" ? Paths.LOGODARKBKG : Paths.LOGOLIGHTBKG}
      alt="Tasks To Do"
    />
  );
}
