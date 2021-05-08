import "../index.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";

function App (props) {
  useEffect(() => {
    props.dispatch({ type: "FETCH_DATA_REQUESTED" });
  }, [props]);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default connect()(App);
