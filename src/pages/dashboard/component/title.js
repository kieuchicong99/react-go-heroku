import React, { Component } from 'react';
export default class Title extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: '#055699',
            fontWeight: 'bold',
            color: 'white',
            height: '30px',
            padding: '5px 0 0 15px',
          }}>
          {this.props.name}
        </div>
      </div>
    );
  }
}
