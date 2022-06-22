import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};

const counterReducer = (state: any = ["hello", "nice"], action: any) => {
  switch (action.type) {
    case ADD:
      state = [{ text: action.text, id: Date.now() }, ...state];
      break;
    case DELETE:
      state = state.filter((todo: string) => {
        todo !== action.id;
      });
      break;
  }
  return state;
};

const counterStore = createStore(counterReducer);

export const actionCreators = {
    addTodo,
    deleteTodo
}

export default counterStore;
