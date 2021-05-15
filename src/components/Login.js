import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { setAuthedUser } from "../actions/authedUser";

function Login(props) {
  const { dispatch } = props;

  const changefunction = (e) => {
    e.preventDefault();
    if (e.target.value === "Select user:") return;
    dispatch(
      setAuthedUser(
        props.users.filter((user) => user.id === e.target.value)[0].id
      )
    );
  };

  return (
    <div>
      <select onChange={changefunction}>
        <option value="Select user:">Select user:</option>

        {props.users !== undefined
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

function mapStateToProps({ users }) {
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

export default connect(mapStateToProps)(Login);
