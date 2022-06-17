import React from "react";
import { Box } from "@chakra-ui/react";
import { DefaultButton } from "../../components/Buttons";

const Counter = () => {
    
  return (
    <>
      <DefaultButton>+</DefaultButton>
      <DefaultButton>-</DefaultButton>
      <Box>0</Box>
    </>
  );
};

export default Counter;
