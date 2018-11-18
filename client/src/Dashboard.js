import React, { Component } from "react";
import { Cookies } from 'react-cookie';




class Dashboard extends React.Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Fetch the list on first mount
  componentWillMount() {
    this.state = { userId: Cookies.load('userId') };

  }

  onLogin(userId) {
    this.setState({ userId });
    Cookies.save('userId', userId, { path: '/' });
  }

  onLogout() {
    Cookies.remove('userId', { path: '/' });
  }

  render() {
    if (!this.state.userId) {
      return console.log('this is not logged in ');
    }

    return <div userId={this.state.userId} />;
  }
};


export default Dashboard;