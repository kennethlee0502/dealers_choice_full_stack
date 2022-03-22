import React from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import Create from "./Create";

const Users = ({ users }) => {
  return (
    <div>
      <h1>EVIL COMPANY HR DEPARTMENT</h1>
      <div>
        <Route component={Create} />
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default connect((state) => state)(Users);
