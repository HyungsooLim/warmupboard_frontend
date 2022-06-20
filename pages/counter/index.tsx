import React from "react";
import { Box } from "@chakra-ui/react";
import { DefaultButton } from "../../components/Buttons";
import { createStore } from "redux";

const Counter = () => {
  const actionIncrement = "INCREMENT";
  const actionDecrement = "DECREMENT";

  const counterReducer = (state = 0, action: any) => {
    switch (action.type) {
      case actionIncrement:
        state++;
        break;
      case actionDecrement:
        state--;
        break;
      default:
        state;
        break;
    }
    return state;
  };

  const counterStore = createStore(counterReducer);

  const onChnageCounter = () => {
    
  };

  counterStore.subscribe(onChnageCounter);

  console.log(counterStore.getState());

  return (
    <>
      <DefaultButton
        onClick={() => {
          counterStore.dispatch({ type: actionIncrement });
          console.log(counterStore.getState());
        }}
      >
        +
      </DefaultButton>
      <DefaultButton
        onClick={() => {
          counterStore.dispatch({ type: actionDecrement });
          console.log(counterStore.getState());
        }}
      >
        -
      </DefaultButton>
      <Box id="number">{counterStore.getState()}</Box>
    </>
  );
};

export default Counter;
