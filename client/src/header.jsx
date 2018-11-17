import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Header">Website Header</h1>
        <hr className="LineBreak" />
      </div>
    );
  }
}

export default Header;
