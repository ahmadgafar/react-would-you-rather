import "../index.css";
import React, { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import QuestionView from "./QuestionView";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function QuestionBase(props) {
  const { question, answered, authedUser } = props;
  const [temp, setanswered] = useState(answered);
  const history = useHistory();

  if (props.location !== undefined)
    if (props.location.state !== undefined && temp === undefined)
      setanswered(props.location.state.answered);
  const handler = (value) => {
    setanswered(value);
  };
  const handleNoAuthedUser = () => {
    alert("kindly login to access the website");
    history.push("/login");
  };
  return (
    <div>
      {authedUser === null || authedUser === undefined ? (
        handleNoAuthedUser()
      ) : (
        <div>
          {temp ? (
            <QuestionView handler={handler} question={question} />
          ) : (
            <QuestionAnswer handler={handler} question={question} />
          )}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({ authedUser }) => {
  if (authedUser !== null) {
    return { authedUser };
  } else return {};
};
export default connect(mapStateToProps)(QuestionBase);
