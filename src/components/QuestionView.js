import "../index.css";
import { connect } from "react-redux";
import React from "react";


function QuestionView(props) {
  return (
    <div>
    {props.user.id}
      <p></p>
        <div>{props.question["optionOne"].text}</div>
      <p></p>
        <div>{props.question["optionTwo"].text}</div>
      <p></p>
    </div>
  );
}


export default connect()(QuestionView);
