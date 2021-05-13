import "../index.css";
import { connect } from "react-redux";
import React, { Component, useEffect } from "react";
import User from "./User";

function Dashboard(props) {
  // useEffect(() => {
  //   dispatch(handleInitialData());
  // }, [dispatch]);

  // const handleClick = () => {
  //   dispatch(saveQuestion("optionOneText", "optionTwoText", "tylermcginnis"));
  // };
  return (
    <div>
      <h3>users</h3>
      <ul>
      {(props.users) ? props.users.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        )) : "loading    "}
      </ul>
    </div>
  );
}

function mapStateToProps({ users }) {
  if (JSON.stringify(users) !== "{}")
    return {
      users: Object.values(users).sort(
        (b, a) => 
          (a.questions.length +
            Object.keys(a.answers).length) -
          (b.questions.length + Object.keys(b.answers).length)
      ),
    };
}
export default connect(mapStateToProps)(Dashboard);
