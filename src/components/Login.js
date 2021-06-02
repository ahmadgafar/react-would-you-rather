import "../index.css";
import { connect } from "react-redux";
import React from "react";
import { setAuthedUser } from "../actions/authedUser";
import { useHistory } from "react-router-dom";

function Login(props) {
  const { dispatch, users } = props;
  const history = useHistory();

  const changefunction = (e) => {
    e.preventDefault();
    if (e.target.value === "Select user:") return;
    dispatch(
      setAuthedUser(users.filter((user) => user.id === e.target.value)[0].id)
    );
    console.log(props);

    console.log(window.history.length);
    if (history.length <= 2) history.push('/');
    else history.goBack();
  };

  return (
    <div>
      <p></p>
      <select onChange={changefunction}>
        <option value="Select user:">Select user:</option>

        {users !== undefined
          ? users.map((user) => (
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
  else return {};
}

export default connect(mapStateToProps)(Login);
