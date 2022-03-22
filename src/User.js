import React from "react";
import { connect } from "react-redux";
import { removeUser } from "./store";
import { Link } from "react-router-dom";

const User = ({ user, removeUser }) => {
  if (!user.id) {
    return null;
  }
  return (
    <div>
      <h1>what you want to do with this minion, {user.name}</h1>
      <button onClick={() => removeUser(user)}> you are Fired!</button>
      <Link to="/users">
        <button> you can Stay!</button>
      </Link>
    </div>
  );
};

export default connect(
  (state, otherProps) => {
    const user =
      state.users.find((user) => user.id === otherProps.match.params.id * 1) ||
      {};
    return {
      user,
    };
  },
  (dispatch, { history }) => {
    return {
      removeUser: (user) => dispatch(removeUser(user, history)),
    };
  }
)(User);
