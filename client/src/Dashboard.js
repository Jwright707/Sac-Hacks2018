import React, { Component } from "react";
import Cookies from "universal-cookie";

class Dashboard extends React.Component {
  // Initialize the state

  componentDidMount() {
    async event => {
      // //will return with ID, With Settings For Post Request
      // const settings = {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     "script": this.script
      //   }),
      // };

      //Sends Script To API and get Id
      const response = await fetch("/callback");
      const json = await response.json();
      console.log(json);

      return alert("Must Have Valid Input");
    };
  }

  requireAuth = () => {
    if (!localStorage.getItem("token")) {
      // go to login route
    }
  };
  // stay on this route since the user is authenticated

  verifyAuth = () => {
    if (localStorage.getItem("token")) {
      // go to your dashboard or home route
    }
    // stay on this route since the user is not authenticated
  };

  render() {
    return <div>Dash</div>;
  }
}
export default Dashboard;
