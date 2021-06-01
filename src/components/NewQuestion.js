import { saveQuestion } from "../actions/questions";
import "../index.css";
import { connect } from "react-redux";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewQuestion(props) {
  const { dispatch, authedUser } = props;
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (option1 === "" || option2 === "") {
      alert("please makes sure to put answers");
    } else {
      dispatch(saveQuestion(option1, option2, authedUser));
      setOption1("");
      setOption2("");
      alert("questions added");
      history.push("/home");
    }
  };

  const handleNoAuthedUser = () => {
    alert("kindly login to access the website");
    history.push("/login");
  };

  return (
    <div>
      {authedUser == null ? (
        handleNoAuthedUser()
      ) : (
        <div>
          <div>
            <p></p>
            Would you rather?!
          </div>
          <p></p>
          <form className="login-form">
            <b>Answer 1 : </b>
            <input
              size="125"
              type="text"
              placeholder="Option 1"
              value={option1}
              onChange={(event) => setOption1(event.target.value)}
            />
            <p></p>
            <b>Answer 2 : </b>
            <input
              size="125"
              type="text"
              placeholder="Option 2"
              value={option2}
              onChange={(event) => setOption2(event.target.value)}
            />
            <p></p>
            <button onClick={handleClick}>Add Question</button>
          </form>
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

export default connect(mapStateToProps)(NewQuestion);
