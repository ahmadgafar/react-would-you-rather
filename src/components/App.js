import "../index.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import NavBar from "./NavBar";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./Home";

function App(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <div>
          <Route path="/" component={NavBar} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={Dashboard} />
        </div>
      </div>
      <div></div>
    </Router>
  );
}

export default connect()(App);
