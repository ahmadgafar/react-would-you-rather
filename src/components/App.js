import "../index.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import {handleInitialData} from "../actions/shared"
import {answerQuestion} from "../actions/questions"

function App (props) {
  const {dispatch} = props;
  useEffect(() => {
    dispatch(handleInitialData());

  }, [dispatch]);

  const handleClick = () =>{
    dispatch(answerQuestion('tylermcginnis', '6ni6ok3ym7mf1p33lnez', 'optionOne'));
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>

        <button onClick= {handleClick }>
          test
        </button>        
      </div>
    </div>
  );
}

export default connect()(App);
