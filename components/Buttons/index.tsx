import { Button } from "@chakra-ui/react";
import React from "react";

// type ButtonProps = {
//     children?: any;
// }

export const DefaultButton = ({ ...props }) => {

  return (
    <>
      <Button
      borderColor={"black"}
      borderWidth={"thin"}
      onClick={props.onClick}
      >{props.children}</Button>
    </>
  );
};
