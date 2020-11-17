import React, { Component } from 'react';

export default class PageNotFound extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '70px',
          height: '100vh',
        }}>
        404 Not Found{' '}
      </div>
    );
  }
}
