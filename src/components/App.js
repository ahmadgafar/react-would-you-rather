import "../index.css";
import { connect } from "react-redux";
import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_DATA_REQUESTED'});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
  }
}

export default connect()(App);
