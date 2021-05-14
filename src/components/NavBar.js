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
            New Tweet
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" exact activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
      <i> welcome <b>{props.authedUserName} </b> !</i>
    </nav>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  if (JSON.stringify(users) !== "{}" && authedUser !== null) {
    console.log(JSON.stringify(authedUser));
    console.log(users);
    console.log(users[authedUser].name);
    return { authedUserName: users[authedUser].name };
  }
};

export default connect(mapStateToProps)(NavBar);
