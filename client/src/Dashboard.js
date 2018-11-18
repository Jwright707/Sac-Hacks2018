import React, { Component } from "react";


class Dashboard extends React.Component {


  //Call API with  Script Given to Send Script
  componentDidMount = async (event) => {
    const settings = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Mode': 'no-cors'
      },
    };
    const response = await fetch("https://polar-mesa-35819.herokuapp.com/request", settings)
    const json = await response
    console.log(json);
  }

  render() {
    return <div>Dash</div>;
    return (
      <div>
        Dash
        </div>

    );
  }
}
export default Dashboard;
