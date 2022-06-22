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
import { connect } from "react-redux";
import { actionCreators } from "../../stores/Counter";
import Todo from "../../components/Todo";

const TodoPage = ({ ...stores }: any, props: any) => {
  const [text, setText] = useState<string>("");

  const handleOnChange = (e: any) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    stores.addTodo(text);
    setText("");
  };
  // ================= Redux =====================
  console.log("props : ", props);
  console.log("stores : ", stores);
  console.log("todos : ", stores.todos);

  return (
    <>
      <Box>
        <Text m={"5%"} fontSize={"4xl"}>
          To-Do
        </Text>
      </Box>
      <form onSubmit={handleOnSubmit}>
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
        <UnorderedList id="list" m={"5%"}>
          {stores.todos.map((value: any, index: number) => {
            return <Todo text={value} key={index} />;
          })}
        </UnorderedList>
      </Box>
    </>
  );
};

function mapStateToProps(state: any, ownProps: any) {
  return { todos: state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    addTodo: (text: string) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
