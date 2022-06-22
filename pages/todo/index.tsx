import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Todo = () => {

  const [text, setText] = useState<string>("");

  const handleOnChange = (e: any) => {
    setText(e.target.value);
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setText("");
  }

  return (
    <>
      <Box>
        <Text m={"5%"} fontSize={"4xl"}>
          To-Do
        </Text>
      </Box>
      <form
        onSubmit={handleOnSubmit}
      >
        <FormControl ml={"5%"}>
          <FormLabel htmlFor="todo" fontSize={"sm"}>
            To-Do
          </FormLabel>
          <Input
            w={"30%"}
            borderColor={"black"}
            id="todo"
            type={"text"}
            value={text}
            onChange={handleOnChange}
          ></Input>
          <FormHelperText>write down your to-do list</FormHelperText>
          <Button mt={"2%"} backgroundColor={"blackAlpha.500"} type={"submit"}>
            ADD
          </Button>
        </FormControl>
      </form>
      <Box>
        <UnorderedList id="list" m={"5%"}></UnorderedList>
      </Box>
    </>
  );
};

export default Todo;
