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
  return (
    <div>
    </div>
  );
}

function mapStateToProps({authedUser , users }) {
    if (JSON.stringify(users) !== "{}")
      return {
        users: Object.values(users).sort(
          (b, a) => 
            (a.questions.length +
              Object.keys(a.answers).length) -
            (b.questions.length + Object.keys(b.answers).length)
        ),
      };
  }

export default connect(mapStateToProps)(User);
