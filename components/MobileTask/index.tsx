import { HStack, Checkbox, Icon, Text, IconButton } from "@chakra-ui/react";
import { IoMdTrash } from "react-icons/io";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

interface MobileTaskProps {
  name: string;
  dueDate: string;
  priority: number;
  isSelected: boolean;
  onDelete: () => void;
  onChange: () => void;
}

const priorityIcons = [FcLowPriority, FcMediumPriority, FcHighPriority];

export function MobileTask({
  name,
  dueDate,
  priority,
  isSelected,
  onDelete,
  onChange,
}: MobileTaskProps) {
  return (
    <HStack w="100%" spacing="auto" display={["flex", "flex", "none"]}>
      <Checkbox isChecked={isSelected} onChange={onChange}>
        {name}
      </Checkbox>
      <Icon fontSize="xl" as={priorityIcons[priority]} />
      <Text>Expires in {dueDate}</Text>
      <IconButton
        onClick={onDelete}
        variant="ghost"
        aria-label="remove"
        icon={<IoMdTrash />}
      />
    </HStack>
  );
}
