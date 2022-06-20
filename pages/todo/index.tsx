import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { FormEvent, useEffect } from "react";
import { createStore } from "redux";

const Todo = () => {
  const ADD_TODO = "ADD_TODO";
  const DELETE_TODO = "DELETE_TODO";

  let list: any;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    list = document.getElementById("list");
  }, []);

  const todoReducer = (state: any = [], action: any) => {
    switch (action.type) {
      case ADD_TODO:
        state = [...state, { text: action.text, id: Date.now() }];
        break;
      case DELETE_TODO:
        state = [];
        break;
    }

    return state;
  };

  const todoStore = createStore(todoReducer);

  const addTodo = (todo: any) => {
    todoStore.dispatch({ type: ADD_TODO, text: todo });
  };

  todoStore.subscribe(() => {
    console.log(todoStore.getState());
  });

  const paintTodos = () => {
    const toDos = todoStore.getState();
    toDos.forEach((toDo: any) => {
      list?.append((<ListItem>{toDo}</ListItem>) as unknown as Node);
    });
  };

  return (
    <>
      <Box>
        <Text m={"5%"} fontSize={"4xl"}>
          To-Do
        </Text>
      </Box>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log(e);
          let todo = e.target[0].value;
          console.log(todo);
          addTodo(todo);
        }}
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
            onChange={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          ></Input>
          <FormHelperText>write down your to-do list</FormHelperText>
          <Button mt={"2%"} backgroundColor={"blackAlpha.500"} type={"submit"}>
            ADD
          </Button>
        </FormControl>
      </form>
      <Box>
        <UnorderedList id="list" m={"5%"}>
            <ListItem>test</ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default Todo;
