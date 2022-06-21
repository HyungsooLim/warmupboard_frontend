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
  let list: any;

  useEffect(() => {
    list = document.getElementById("list");
    console.log("useEffect() : ", list);
  }, []);

  const ADD_TODO = "ADD_TODO";
  const DELETE_TODO = "DELETE_TODO";

  const addTodo = (text: any) => {
    return { type: ADD_TODO, text };
  };

  const deleteTodo = (id: any) => {
    return { type: DELETE_TODO, id };
  };

  const todoReducer = (state: any = [], action: any) => {
    switch (action.type) {
      case ADD_TODO:
        state = [{ text: action.text, id: Date.now() }, ...state];
        break;
      case DELETE_TODO:
        state = state.filter((state: any) => state.id !== action.id);
        break;
    }

    return state;
  };

  const todoStore = createStore(todoReducer);

  const dispatchAddTodo = (text: any) => {
    todoStore.dispatch(addTodo(text));
  };

  const dispatchDeleteTodo = (e: any) => {
    const id = parseInt(e.target.parentNode.id);
    todoStore.dispatch(deleteTodo(id));
  };

  const paintTodos = () => {
    const toDos = todoStore.getState();
    list.innerHTML = "";
    toDos.forEach((toDo: any) => {
      const li = document.createElement("li");
      li.id = toDo.id;
      li.innerText = toDo.text;
      list.appendChild(li);
      const btn = document.createElement("button");
      btn.addEventListener("click", dispatchDeleteTodo);
      // btn css -------------------------------------
      btn.style.backgroundColor = "#0000005c";
      btn.style.margin = "2%";
      btn.style.width = "10%";
      btn.style.borderRadius = "0.375rem";
      // ---------------------------------------------
      btn.innerText = "DELETE";
      li.appendChild(btn);
    });
    console.log(list);
  };

  todoStore.subscribe(paintTodos);

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
          dispatchAddTodo(todo);
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
        <UnorderedList id="list" m={"5%"}></UnorderedList>
      </Box>
    </>
  );
};

export default Todo;
