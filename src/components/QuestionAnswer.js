import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { answerQuestion } from "../actions/questions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function QuestionAnswer(props) {
  let { dispatch, avatarURL, error } = props;
  const history = useHistory();
  if (error) history.push("/error");
  if (props.question) {
    const handleClick = (e, temp) => {
      e.preventDefault();
      dispatch(
        answerQuestion(props.authedUser, props.question.id, e.target.value)
      );
      props.handler(true);
    };
    return (
      <Link
        to={{
          pathname: `/question/${props.question.id}`,
          state: { answered: false },
        }}
      >
        <div>
          {avatarURL ? (
            <div>
              <img src={avatarURL} alt="" width="40" height="40"></img>
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
          ) : (
            "loading.."
          )}
        </div>
      </Link>
    );
  } else return <div>loading</div>;
}

const mapStateToProps = (state, ownProps) => {
  const { authedUser, questions, users } = state;
  let { question } = ownProps;

  if (authedUser !== null && JSON.stringify(questions) !== "{}") {
    if (ownProps.match)
      if (ownProps.match.params)
        if (ownProps.match.params.id) {
          question = questions[ownProps.match.params.id];
        }
    if (question === null || question === undefined) return { error: true };
    const avatarURL = users[question.author].avatarURL;
    return { authedUser, question, avatarURL };
  } else return {};
};

export default withRouter(connect(mapStateToProps)(QuestionAnswer));
