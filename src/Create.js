import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "./store";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.save = this.save.bind(this);
  }
  save(ev) {
    ev.preventDefault();
    const user = {
      name: this.state.name,
    };
    this.props.createUser(user);
  }
  render() {
    const { name } = this.state;
    const { save } = this;
    return (
      <form onSubmit={save}>
        <input
          onChange={(ev) => this.setState({ name: ev.target.value })}
          name="name"
          placeholder="name"
          value={name}
        />
        <button disabled={!name}>Find me this minion</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createUser: async (user) => {
      await dispatch(createUser(user, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(Create);
