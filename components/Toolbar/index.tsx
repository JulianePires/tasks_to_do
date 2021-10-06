import { Button, HStack, IconButton } from "@chakra-ui/react";
import { IoMdCalendar } from "react-icons/io";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPriorityHigh,
} from "react-icons/md";

import { Views } from "../../types";

interface ToolbarProps {
  currentView: Views;
  onChangeView: (view: Views) => void;
}

export function Toolbar({ currentView, onChangeView }: ToolbarProps) {
  return (
    <HStack
      w="100%"
      justifyContent="space-evenly"
      height="20"
      bg="blackAlpha.600"
    >
      <Button
        onClick={() => onChangeView("todo")}
        variant={currentView === "todo" ? "solid" : "toolbar"}
        display={["none", "none", "flex"]}
      >
        TODO
      </Button>
      <IconButton
        onClick={() => onChangeView("todo")}
        variant={currentView === "todo" ? "solid" : "toolbar"}
        display={["flex", "flex", "none"]}
        aria-label="a fazer"
        icon={<MdCheckBoxOutlineBlank />}
      />
      <Button
        onClick={() => onChangeView("done")}
        variant={currentView === "done" ? "solid" : "toolbar"}
        display={["none", "none", "flex"]}
      >
        DONE
      </Button>
      <IconButton
        onClick={() => onChangeView("done")}
        variant={currentView === "done" ? "solid" : "toolbar"}
        display={["flex", "flex", "none"]}
        aria-label="feitas"
        icon={<MdCheckBox />}
      />
      <Button
        onClick={() => onChangeView("priority")}
        variant={currentView === "priority" ? "solid" : "toolbar"}
        display={["none", "none", "flex"]}
      >
        ORDER BY PRIORITY
      </Button>
      <IconButton
        onClick={() => onChangeView("priority")}
        variant={currentView === "priority" ? "solid" : "toolbar"}
        display={["flex", "flex", "none"]}
        aria-label="a fazer"
        icon={<MdPriorityHigh />}
      />
      <Button
        onClick={() => onChangeView("date")}
        variant={currentView === "date" ? "solid" : "toolbar"}
        display={["none", "none", "flex"]}
      >
        ORDER BY DATE
      </Button>
      <IconButton
        onClick={() => onChangeView("date")}
        variant={currentView === "date" ? "solid" : "toolbar"}
        display={["flex", "flex", "none"]}
        aria-label="a fazer"
        icon={<IoMdCalendar />}
      />
    </HStack>
  );
}
