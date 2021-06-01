import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function QuestionView(props) {
  let { answered } = props;
  if (props.question) {
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
      <Link
        to={{
          pathname: `/question/${props.question.id}`,
          state: { answered },
        }}
      >
        {" "}
        <div>
          {/* {props.user.id} */}
          <b>{props.question.author}</b> asked: would you rather ?<p></p>
          <div style={option1_style}>
            {props.question["optionOne"].text}{" "}
            {option1_percentage >= 50 ? (
              <b style={{ color: "green" }}> {option1_percentage} % </b>
            ) : (
              <b style={{ color: "red" }}> {option1_percentage} % </b>
            )}
          </div>
          <p></p>
          <div>
            {props.question["optionTwo"].text}{" "}
            {option2_percentage >= 50 ? (
              <b style={{ color: "green" }}> {option2_percentage} % </b>
            ) : (
              <b style={{ color: "red" }}> {option2_percentage} % </b>
            )}
          </div>
          <p></p>
        </div>
      </Link>
    );
  } else return <div>loading</div>;
}

const mapStateToProps = (state, ownProps) => {
  const { authedUser, questions } = state;
  let { question, answered } = ownProps;

  if (authedUser !== null && JSON.stringify(questions) !== "{}") {
    if (ownProps.match)
      if (ownProps.match.params)
        if (ownProps.match.params.id) {
          question = questions[ownProps.match.params.id];

          if (ownProps.location.state) {
            ownProps.answered = ownProps.location.state.answered;
          }
        }
    return { authedUser, question, answered };
  } else return {};
};

export default withRouter(connect(mapStateToProps)(QuestionView));
