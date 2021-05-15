import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function NavBar(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/Dashboard" exact activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" exact activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
      <i>
        Welcome <b>{props.authedUserName} </b> !
        <img src={props.authedUseravatarURL} alt="" width="40" height="40"></img>
      </i>
    </nav>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  if (JSON.stringify(users) !== "{}" && authedUser !== null) {
    return { authedUserName: users[authedUser].name ,
      authedUseravatarURL: users[authedUser].avatarURL };
  }
};

export default connect(mapStateToProps)(NavBar);
