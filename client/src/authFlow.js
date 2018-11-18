import React, { Component } from "react";
import axios from 'axios';




class CarRequest extends React.Component {
  constructor() {
    super()

    this.data = {}
  }

  state = {
    "url": null
  };


  handleCar = async () => {

    //Sends Script To API and get Id


    // Performing a GET request
    const response = await axios.get('https://polar-mesa-35819.herokuapp.com/car', {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000" //the token is a variable which holds the token
      }
    });
    const json = await response.json()
    console.log(json); // ex.: { user: 'Your User'}
    // ex.: 200

    this.setState({
      url: json.authUrl
    });


  }



  render() {
    return (
      <div className="App">

        <button onClick={this.handleCar}> Start Quest</button>

      </div>
    )
  }
};

export default CarRequest