import axios from 'axios';
import React, { Component } from 'react';
class PingComponent extends Component {
  constructor() {
    super();
    this.state = {
      accountList: [],
    };
  }

  componentWillMount() {
    axios
      .get('api/v1/accounts')
      .then((response) => {
        console.log('response:', response);
        this.setState(() => ({ accountList: response.data }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Account List</h1>
        {this.state.accountList.map((item) => (
          <div>{item.username}</div>
        ))}
      </>
    );
  }
}

export default PingComponent;
