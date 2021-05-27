import "../index.css";
import { connect } from "react-redux";
import React from "react";

function QuestionView(props) {
  let option1_percentage =
    (props.question["optionOne"].votes.length /
      (props.question["optionOne"].votes.length +
        props.question["optionTwo"].votes.length)) *
    100;
  option1_percentage = Math.round(option1_percentage * 10) / 10;
  let option2_percentage =
    (props.question["optionTwo"].votes.length /
      (props.question["optionTwo"].votes.length +
        props.question["optionOne"].votes.length)) *
    100;
  option2_percentage = Math.round(option2_percentage * 10) / 10;

  let option1_style = {
    border: "2px solid green", // it is not work.
  };
  return (
    <div>
      {/* {props.user.id} */}
      <b>{props.question.author}</b> asked: would you rather ?<p></p>
      <div
        style={option1_style}
      >
        {props.question["optionOne"].text}{" "}
        {option1_percentage >= 50 ? (
          <b style={{ color: "green" }}> {option1_percentage} % </b>
        ) : (
          <b style={{ color: "red" }}> {option1_percentage} % </b>
        )}
      </div>
      <p></p>
      <div>
        {props.question["optionTwo"].text} with{" "}
        {option2_percentage >= 50 ? (
          <b style={{ color: "green" }}> {option2_percentage} % </b>
        ) : (
          <b style={{ color: "red" }}> {option2_percentage} % </b>
        )}
      </div>
      <p></p>
    </div>
  );
}

export default connect()(QuestionView);
