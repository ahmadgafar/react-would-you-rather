import "../index.css";
import React, { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import QuestionView from "./QuestionView";

function QuestionBase(props) {
  const { question, answered } = props;
  const [temp, setanswered] = useState(answered);

  const handler = (value) => {
    setanswered(value);
  };
  return (
    <div>
      {temp ? (
        <QuestionView handler={handler} answered={temp} question={question} />
      ) : (
        <QuestionAnswer handler={handler} answered={temp} question={question} />
      )}
    </div>
  );
}

export default QuestionBase;
