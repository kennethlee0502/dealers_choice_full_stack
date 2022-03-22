import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link to="/">😈 Evil Company LLC 😈</Link>
      </h1>
    </nav>
  );
};

export default connect((state) => state)(Nav);
