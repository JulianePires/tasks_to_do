import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { IoIosArrowRoundBack } from "react-icons/io";
export function BackButton() {
  const { back } = useRouter();
  return (
    <IconButton
      aria-label="get back"
      variant="outline"
      onClick={back}
      fontSize="2xl"
      fontWeight="semibold"
      icon={<IoIosArrowRoundBack />}
    />
  );
}
