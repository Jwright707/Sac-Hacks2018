import React, { Component } from "react";
import { Link } from "react-router-dom";
import { button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Api Request</h1>
        {/* Link to List.js */}
        <Link to={"./list"}>
          <button color="primary" size="lg" variant="raised">
            Create Quest
          </button>
        </Link>

        <Link to={"./list2"}>
          <button color="primary" size="lg" variant="raised">
            Search Quest
          </button>
        </Link>
      </div>
    );
  }
}
export default Home;
