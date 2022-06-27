import { Button, ListItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../stores/Counter_react_redux";

const Todo = ({ text, id, onDeleteBtnClick }: any, props: any) => {

  return (
    <ListItem>
      {text}
      <Button
        m={"2%"}
        backgroundColor={"blackAlpha.500"}
        type={"button"}
        id={id}
        onClick={onDeleteBtnClick}
      >
        DELETE
      </Button>
    </ListItem>
  );
};

function mapDispatchToProps(dispatch: any, ownProps: any) {
  console.log("ownProps", ownProps);
  return {
    onDeleteBtnClick: () => {
      console.log("===== onDeleteBtn Clicked =====")
      console.log("clicked_ownProps", ownProps);
      dispatch(actionCreators.deleteTodo(ownProps.id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Todo);
