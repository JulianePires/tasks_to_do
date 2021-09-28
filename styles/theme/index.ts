import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";
import { Button } from "../components/button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const overrides = {
  components: {
    Button,
  },
  config,
  styles,
};

export default extendTheme(overrides);
