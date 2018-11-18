import React, { Component } from "react";
import { Cookies } from 'react-cookie';




class Dashboard extends React.Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined
    };
  }

  // handleRequest = async (event) => {
  //   // this.data = window.json
  //   console.log(`data ${data}`)
  //   if (this.script.length >= 1) {
  //     //will return with ID, With Settings For Post Request 
  //     const settings = {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         "Cookie": localStorage.getItem(key),
  //         "Type": Location
  //       }),
  //     };

  //     //Sends Script To API and get Id
  //     const response = await fetch(this.url, settings)
  //     const json = await response.json()
  //     this.setState({
  //       script: json.script
  //     });

  //     this.scriptID = json.id
  //     console.log(this.scriptID)
  //   } else {
  //     return alert('Must Have Valid Input')
  //   }







  onLogout = () => {

  }

  render() {
    if (!this.state.userId) {
      return console.log('this is not logged in ');

    }
    <div> console</div>

  }
};


export default Dashboard;