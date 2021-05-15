import "../index.css";
import { connect } from "react-redux";
import React from "react";
import User from "./User";

function Dashboard(props) {

  return (
    <div>
      <h3 className='center'>Users Ranking </h3>
      <ul className='center'>
        {props.users
          ? props.users.map((user) => (
              <li key={user.id}>
                <User user={user} />
              </li>
            ))
          : "loading    "}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  if (JSON.stringify(users) !== "{}")
    return {
      users: Object.values(users).sort(
        (b, a) =>
          a.questions.length +
          Object.keys(a.answers).length -
          (b.questions.length + Object.keys(b.answers).length)
      ),
    };
};
export default connect(mapStateToProps)(Dashboard);
