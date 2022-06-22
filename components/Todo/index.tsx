import { Button, ListItem } from "@chakra-ui/react";
import React from "react";

const Todo = ({...props}) => {

    console.log("=== Todo Component Mounted ===");
    console.log("component props : ", props);

  return (
    <ListItem>
      {props.text}
      {/* <Button mt={"2%"} backgroundColor={"blackAlpha.500"} type={"button"}>
        DELETE
      </Button> */}
    </ListItem>
  );
};

export default Todo;
