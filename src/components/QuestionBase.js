import "../index.css";
import React from "react";
import QuestionAnswer from "./QuestionAnswer";
import QuestionView from "./QuestionView";

function QuestionBase(props) {
  const { question, answered } = props;
  return (
    <div>
      {!answered ? (
        <QuestionAnswer question={question} />
      ) : (
        <QuestionView question={question} />
      )}
    </div>
  );
}

export default QuestionBase;
