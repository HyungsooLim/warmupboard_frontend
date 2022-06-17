import { createStore } from "redux";

const counterReducer = (state = 0, action: any) => {

    if(action.type === "INCREMENT") {
        state++;
    }else if(action.type === "DECREMENT") {
        state--;
    }

  return state;
};

const counterStore = createStore(counterReducer);

counterStore.dispatch({ type: "INCREMENT" });
counterStore.dispatch({ type: "DECREMENT" });
