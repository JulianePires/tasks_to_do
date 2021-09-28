import { HStack, Text, Icon } from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";

interface CheckTextProps {
  label: string;
}

export function CheckText({ label }: CheckTextProps) {
  return (
    <HStack w="40" spacing="auto">
      <Text fontWeight="semibold" fontSize="xl">{label}</Text>
      <Icon fontSize="xl" color="green" as={GiCheckMark} />
    </HStack>
  );
}
