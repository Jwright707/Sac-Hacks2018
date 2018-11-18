import React, { Component } from "react";
import axios from "axios";
// import smartcar from 'smartcar';

class CarRequest extends React.Component {
  constructor() {
    super();
    // const smartcar = new Smartcar({
    //   clientId: '<your-client-id>',
    //   redirectUri: 'localhost:5000',
    //   scope: ['read_vehicle_info', 'read_odometer'],
    //   onComplete: function (err, code) {
    //     if (err) {
    //       // handle errors from the authorization flow (i.e. user denies access)
    //     }
    //     // handle the returned code by sending it to your back-end server
    //     sendToBackend(code);
    //   },
    // });

    this.data = {};
  }

  state = {
    url: null
  };

  handleCar = async () => {
    //Sends Script To API and get Id

    // Performing a GET request
    const response = await axios.get(
      "https://polar-mesa-35819.herokuapp.com/car",
      {
        headers: {
          "Access-Control-Allow-Origin":
            "https://polar-mesa-35819.herokuapp.com" //the token is a variable which holds the token
        }
      }
    );
    const json = await response;
    console.log(json); // ex.: { user: 'Your User'}
    // ex.: 200
    console.log(json.data[0]);
    this.setState({
      url: json.data[0].authUrl
    });

    window.location.href = this.state.url;
  }; //   const testURL = 'https://polar-mesa-35819.herokuapp.com/car';
  //   const myInit = {
  //     method: 'HEAD',
  //     mode: 'no-cors',
  //   };

  //   const myRequest = new Request(testURL, myInit);

  //   fetch(myRequest).then(function (response) {
  //     return console.log(response)
  //   }).then(function (response) {
  //     console.log(response);
  //   }).catch(function (e) {
  //     console.log(e);
  //   });

  // }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleCar}>
          {this.state.url === null ? "Start Quest" : "Log Out"}
        </button>
      </div>
    );
  }
}

export default CarRequest;
