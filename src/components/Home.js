import "../index.css";
import { connect } from "react-redux";
import React, { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import QuestionView from "./QuestionView";

const UN_ANSWERED_QUESTIONS = "UN_ANSWERED_QUESTIONS";
const ANSWERED_QUESTIONS = "ANSWERED_QUESTIONS";

function Home(props) {
  const [currentView, setcurrentView] = useState(UN_ANSWERED_QUESTIONS);

  const handleClick = (e) => {
    e.preventDefault();
    if (currentView === UN_ANSWERED_QUESTIONS)
      setcurrentView(ANSWERED_QUESTIONS);
    else setcurrentView(UN_ANSWERED_QUESTIONS);
  };
  return (
    <div>
      {" "}
      {props.unansweredQuestions ? (
        <div>
          <button onClick={handleClick}>
            {" "}
            Switch to{" "}
            {currentView === UN_ANSWERED_QUESTIONS
              ? "answered questions"
              : "un-answered questions"}
          </button>
          {currentView === UN_ANSWERED_QUESTIONS ? (
            props.unansweredQuestions.length === 0 ? (
              <b style={{ color: "red" }}>no un-aswered questions</b>
            ) : (
              props.unansweredQuestions.map((question) => (
                <li key={question[0]}>
                  <QuestionAnswer
                    question={question[1]}
                    avatarURL={props.users[question[1].author].avatarURL}
                  />
                </li>
              ))
            )
          ) : (
            
            props.answeredQuestions.map((question) => (
              <li key={question[0]}>
                <QuestionView question={question[1]} user={props.users[props.authedUser]} />
              </li>
            ))
          )}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }) {
  if (
    JSON.stringify(questions) !== "{}" &&
    JSON.stringify(users) !== "{}" &&
    authedUser !== null
  ) {
    return {
      answeredQuestions: Object.entries(questions).filter(
        ([key, value]) => key in users[authedUser].answers
      ),

      unansweredQuestions: Object.entries(questions).filter(
        ([key, value]) => !(key in users[authedUser].answers)
      ),
      users,
      authedUser,
    };
  }
}

export default connect(mapStateToProps)(Home);
