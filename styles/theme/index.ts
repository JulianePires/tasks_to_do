import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const overrides = {
  config,
  styles,
};

export default extendTheme(overrides);
