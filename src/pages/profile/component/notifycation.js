import React, { Component } from 'react';

import Title from './title';
export default class Notifycation extends Component {
  render() {
    return (
      <div>
        <Title name="THÔNG BÁO" />
        <div style={{ marginTop: '10px' }}>Xem thông báo</div>
      </div>
    );
  }
}
