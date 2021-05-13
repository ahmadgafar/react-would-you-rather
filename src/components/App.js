import "../index.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { saveQuestion } from "../actions/questions";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(saveQuestion("optionOneText", "optionTwoText", "tylermcginnis"));
  };

  return (
    <div className="App">
      {/* <button onClick={handleClick}>test</button> */}
      <Login></Login>{" "}
    </div>
  );
}

export default connect()(App);
