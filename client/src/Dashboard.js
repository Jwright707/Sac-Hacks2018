import React, { Component } from "react";
import Cookies from 'universal-cookie';






class Dashboard extends React.Component {


  //Call API with  Script Given to Send Script
  componentDidMount = async (event) => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Mode': 'no-cors'
      },
    };
    const response = await fetch("http://localhost:5000/request", settings)
    const json = await response
    console.log(json);
  }

  render() {
    return (
      <div>
        Dash
        </div>

    );

  }
}
export default Dashboard;