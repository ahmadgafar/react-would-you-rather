import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function NavBar(props) {
  const { dispatch, authedUserName, authedUseravatarURL } = props;

  const logoutClick = () => {
    dispatch(setAuthedUser(null));
  };
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink
            to={{
              pathname: "/login",
              state: { from: "app" },
            }}
            exact
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={logoutClick}
            to="/logout"
            exact
            activeClassName="active"
          >
            logout
          </NavLink>
        </li>
      </ul>
      <i>
        {authedUserName === "" ? (
          <div>Please Login </div>
        ) : (
          <div>
            Welcome <b>{authedUserName} </b> ! &nbsp;
            <img src={authedUseravatarURL} alt="" width="40" height="40"></img>
          </div>
        )}
      </i>
      <p></p>
    </nav>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  if (JSON.stringify(users) !== "{}" && authedUser !== null) {
    if (authedUser === "")
      return {
        authedUserName: "",
        authedUseravatarURL: "",
      };
    else
      return {
        authedUserName: users[authedUser].name,
        authedUseravatarURL: users[authedUser].avatarURL,
      };
  } else if (authedUser === null)
    return {
      authedUserName: "",
      authedUseravatarURL: "",
    };
  else return {};
};

export default connect(mapStateToProps)(NavBar);
