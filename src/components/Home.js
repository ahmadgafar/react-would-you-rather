import "../index.css";
import { connect } from "react-redux";
import React, { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import QuestionView from "./QuestionView";
import { useHistory } from "react-router-dom";

const UN_ANSWERED_QUESTIONS = "UN_ANSWERED_QUESTIONS";
const ANSWERED_QUESTIONS = "ANSWERED_QUESTIONS";

function Home(props) {
  const [currentView, setcurrentView] = useState(UN_ANSWERED_QUESTIONS);
  const history = useHistory();
  const {authedUser, unansweredQuestions, answeredQuestions, users} = props

  const handleClick = (e) => {
    e.preventDefault();
    if (currentView === UN_ANSWERED_QUESTIONS)
      setcurrentView(ANSWERED_QUESTIONS);
    else setcurrentView(UN_ANSWERED_QUESTIONS);
  };

  const handleNoAuthedUser = () => {
    alert("kindly login to access the website");
    history.push("/login");
  };


  return (
    <div>
      { authedUser == null ? (
        handleNoAuthedUser()
      ) : (
        <div>
          {" "}
          { unansweredQuestions ? (
            <div>
              <button onClick={handleClick}>
                {" "}
                Switch to{" "}
                {currentView === UN_ANSWERED_QUESTIONS
                  ? "answered questions"
                  : "un-answered questions"}
              </button>
              {currentView === UN_ANSWERED_QUESTIONS ? (
                 unansweredQuestions.length === 0 ? (
                  <b style={{ color: "red" }}>no un-aswered questions</b>
                ) : (
                   unansweredQuestions.map((question) => (
                    <li key={question[0]}>
                      <QuestionAnswer
                        question={question[1]}
                      />
                    </li>
                  ))
                )
              ) : (
                 answeredQuestions.map((question) => (
                  <li key={question[0]}>
                    <QuestionView
                      question={question[1]}
                      user={ users[ authedUser]}
                    />
                  </li>
                ))
              )}
            </div>
          ) : (
            "loading"
          )}
        </div>
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
    let answeredQuestions = Object.entries(questions).filter(
      ([key, value]) => key in users[authedUser].answers
    );
    answeredQuestions = Object.values(answeredQuestions).sort(
      (b, a) => a[1].timestamp - b[1].timestamp
    );
    let unansweredQuestions = Object.entries(questions).filter(
      ([key, value]) => !(key in users[authedUser].answers)
    );
    unansweredQuestions = Object.values(unansweredQuestions).sort(
      (b, a) => a[1].timestamp - b[1].timestamp
    );
    return {
      answeredQuestions: answeredQuestions,
      unansweredQuestions: unansweredQuestions,
      users,
      authedUser,
    };
  }
}

export default connect(mapStateToProps)(Home);
