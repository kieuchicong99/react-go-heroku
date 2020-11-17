import React, { Component } from "react";
import axios from "axios";
class PingComponent extends Component {
  constructor() {
    super();
    this.state = {
      accountList: [],
    };
  }

  componentWillMount() {
    axios
      .get("api/v1/accounts")
      .then((response) => {
        console.log("response:", response);
        this.setState(() => {
          return { accountList: response.data };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Account List</h1>
        {this.state.accountList.map((item) => {
          return <div>{item.username}</div>;
        })}
      </>
    );
  }
}

export default PingComponent;
