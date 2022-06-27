import { Button, ListItem } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../stores/Counter";


function mapDispatchToProps(dispatch: any, ownProps: any) {
  console.log(ownProps.id);
  return {
    onDeleteBtnClick: () => {
      dispatch(actionCreators.deleteTodo(ownProps.id));
    }
  };
}

const Todo = ({ text, id, onDeleteBtnClick }: any, props: any) => {
  return (
    <ListItem>
      {text}
      <Button
        m={"2%"}
        backgroundColor={"blackAlpha.500"}
        type={"button"}
        onClick={onDeleteBtnClick}
      >
        DELETE
      </Button>
    </ListItem>
  );
};



export default connect(null, mapDispatchToProps)(Todo);
