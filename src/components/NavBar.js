import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function NavBar(props) {
  const { dispatch } = props;

  const logoutClick = () => {
    dispatch(setAuthedUser(""));
  };
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/home" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" exact activeClassName="active">
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
        {props.authedUserName === "" ? (
          <div>Please Login </div>
        ) : (
          <div>
            Welcome <b>{props.authedUserName} </b> ! &nbsp;
            <img
              src={props.authedUseravatarURL}
              alt=""
              width="40"
              height="40"
            ></img>
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
};

export default connect(mapStateToProps)(NavBar);
