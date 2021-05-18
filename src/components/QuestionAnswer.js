import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { answerQuestion } from "../actions/questions";


function QuestionAnswer(props) {
  const { dispatch } = props;

  const handleClick = (e, temp) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(
      answerQuestion(props.authedUser, props.question.id, e.target.value)
    );
  };

  return (
    <div>
      <img src={props.avatarURL} alt="" width="40" height="40"></img>
      &nbsp; {props.question.author} asks you <p></p>
      <b>Would you rather ?</b>
      <p></p>
      <button onClick={handleClick} value="optionOne">
        {props.question["optionOne"].text}
      </button>
      <p></p>
      <button onClick={handleClick} value="optionTwo">
        {props.question["optionTwo"].text}
      </button>
      <p></p>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  if (authedUser !== null) {
    return { authedUser };
  }
};

export default connect(mapStateToProps)(QuestionAnswer);
