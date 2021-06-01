import "../index.css";
import { connect } from "react-redux";
import React from "react";
import User from "./User";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const { users, authedUser } = props;
  const history = useHistory();

  const handleNoAuthedUser = () => {
    alert("kindly login to access the website");
    history.push("/login");
  };
  return (
    <div>
      {authedUser == null ? (
        handleNoAuthedUser()
      ) : (
        <div>
          <h3 className="center">Users Ranking </h3>
          <ul className="center">
            {users
              ? users.map((user) => (
                  <li key={user.id}>
                    <User user={user} />
                  </li>
                ))
              : "loading    "}
          </ul>{" "}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, authedUser }) => {
  if (JSON.stringify(users) !== "{}")
    return {
      authedUser,
      users: Object.values(users).sort(
        (b, a) =>
          a.questions.length +
          Object.keys(a.answers).length -
          (b.questions.length + Object.keys(b.answers).length)
      ),
    };
  else return {};
};
export default connect(mapStateToProps)(Dashboard);
