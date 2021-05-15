import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { setAuthedUser } from "../actions/authedUser";

function Login(props) {
  const { dispatch } = props;

  const changefunction = (event) => {
    dispatch(
      setAuthedUser(
        props.users.filter((user) => user.id === event.target.value)[0].id
      )
    );
  };

  return (
    <div>
      <select value="" onChange={changefunction}>
        { (props.users) !== undefined
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
