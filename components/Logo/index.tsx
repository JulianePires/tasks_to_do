import { Image } from "@chakra-ui/react";
import { Paths } from "../../constants";

export function Logo() {
  return <Image src={Paths.LOGODARKBKG} alt="Tasks To Do" />;
}
