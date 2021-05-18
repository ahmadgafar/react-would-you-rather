import "../index.css";
import { connect } from "react-redux";
import React from "react";

function User(props) {
  return (
    <div>
      <div>
        {props.user.id} Total score:{" "}
        <b style={{ color: "red" }}>
          {Object.keys(props.user.answers).length + props.user.questions.length}
        </b>
      </div>
      <div>Questions asked: {props.user.questions.length}</div>
      <div>Questions answered: {Object.keys(props.user.answers).length}</div>
      <p></p>
    </div>
  );
}

export default connect()(User);
