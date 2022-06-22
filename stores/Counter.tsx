import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addTodo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};

const counterReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ADD:
      state = [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      state = state.filter((todo: string) => {
        todo !== action.id;
      });
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
