import { Button, ListItem } from "@chakra-ui/react";
import React from "react";

const Todo = ({text, id}: any, props: any) => {

  return (
    <ListItem>
      {text}
      {/* <Button mt={"2%"} backgroundColor={"blackAlpha.500"} type={"button"}>
        DELETE
      </Button> */}
    </ListItem>
  );
};

export default Todo;
