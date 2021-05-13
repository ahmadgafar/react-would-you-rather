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
  console.log(props)
  return (
    <div>
    {props.user.id}
    </div>
  );
}


export default connect()(User);
