import React, { Component } from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import store, { loadUsers } from "./store";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Users from "./Users";
import User from "./User";

const Home = () => {
  return (
    <div className="home">
      <h1>
        <Link to="/users">Bring me to HR!</Link>
      </h1>
    </div>
  );
};

const App = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      bootstrap: async () => {
        dispatch(loadUsers());
      },
    };
  }
)(
  class App extends Component {
    componentDidMount() {
      this.props.bootstrap();
    }
    render() {
      return (
        <Router>
          <div>
            <Route component={Nav} />
            <Route component={Home} exact path="/" />
            <Route component={Users} exact path="/users" />
            <Route component={User} exact path="/users/:id" />
          </div>
        </Router>
      );
    }
  }
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
