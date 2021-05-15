import "../index.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import NavBar from "./NavBar";
import { BrowserRouter as Router,Route } from "react-router-dom";

function App(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  // const handleClick = () => {
  //   dispatch(saveQuestion("optionOneText", "optionTwoText", "tylermcginnis"));
  // };

  return (
    <Router>
      <div className="container">
        {/* <NavBar /> */}
        <div>
          <Route path="/" component={NavBar} />
          <Route path="/login" component={Login} />
          <Route path="/new" component={NewQuestion} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </div>
      <div></div>
    </Router>
  );
}

export default connect()(App);
