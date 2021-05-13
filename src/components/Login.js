import "../index.css";
import { connect } from "react-redux";
import React, { Component, useEffect } from "react";
import { setAuthedUser } from "../actions/authedUser";

function User(props) {
  const { users, dispatch } = props;
  // useEffect(() => {
  //   dispatch(handleInitialData());
  // }, [dispatch]);

  // const handleClick = () => {
  //   dispatch(saveQuestion("optionOneText", "optionTwoText", "tylermcginnis"));
  // };
  const changefunction = (event) => {
    dispatch(
      setAuthedUser(
        users.filter((user) => user.id === event.target.value)[0].id
      )
    );
  };

  return (
    <div>
      <select value={null} onChange={changefunction}>
        {users
          ? props.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          : "loading    "}
      </select>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  if (JSON.stringify(users) !== "{}")
    return {
      users: Object.values(users).sort(
        (b, a) =>
          a.questions.length +
          Object.keys(a.answers).length -
          (b.questions.length + Object.keys(b.answers).length)
      ),
    };
}

export default connect(mapStateToProps)(User);
