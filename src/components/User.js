import "../index.css";
import { connect } from "react-redux";
import React, { Component, useEffect } from "react";

function User(props) {
  // useEffect(() => {
  //   dispatch(handleInitialData());
  // }, [dispatch]);

  // const handleClick = () => {
  //   dispatch(saveQuestion("optionOneText", "optionTwoText", "tylermcginnis"));
  // };
  console.log(props);
  return (
    <div>
      <div>
        {props.user.id} Total score:{" "}
        {Object.keys(props.user.answers).length + props.user.questions.length}
      </div>
      <div>Questions asked: {props.user.questions.length}</div>
      <div>Questions answered: {Object.keys(props.user.answers).length}</div>
    </div>
  );
}

export default connect()(User);
