import { ChakraProps } from "@chakra-ui/system";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props: ChakraProps) => ({
    body: {
      fontFamily: "Montserrat",
      letterSpacing: "tight",
      lineHeight: "short",
      bg: mode("whiteAlpha.800", "gray.900")(props),
      fontSize: {
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
        xl: "1rem",
      },
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    html: {
      boxSizing: "border-box",
      padding: "0",
      border: "0",
    },
  }),
};

export default styles;
