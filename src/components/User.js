import "../index.css";
import { connect } from "react-redux";
import React from "react";

function User(props) {
  const { user } = props;

  return (
    <div>
      <div>
        <img src={user.avatarURL} alt="" width="40" height="40"></img> {user.id}
        <p></p>Total score:{" "}
        <b style={{ color: "red" }}>
          {Object.keys(user.answers).length + user.questions.length}
        </b>
      </div>
      <div>Questions asked: {user.questions.length}</div>
      <div>Questions answered: {Object.keys(user.answers).length}</div>
      <p></p>
    </div>
  );
}

export default connect()(User);
