import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { answerQuestion } from "../actions/questions";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

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
    <Link to={`/question/${props.question.id}`} className="tweet">
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
    </Link>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { authedUser, questions, users } = state;
  let {question} = ownProps;
  if(ownProps.match.params.id)
    question = questions[ownProps.match.params.id];
  const avatarURL = users[question.author].avatarURL
  if (authedUser !== null && JSON.stringify(questions) !== "{}") {
    return { authedUser,question, avatarURL };
  }
};

export default withRouter(connect(mapStateToProps)(QuestionAnswer));
