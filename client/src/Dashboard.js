import React, { Component } from "react";

class Dashboard extends React.Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    console.log("function to send to back end");
  };

  render() {


    return (
      <div>
        This is the DashBoard
      </div>

    );
  }
}

export default Dashboard;