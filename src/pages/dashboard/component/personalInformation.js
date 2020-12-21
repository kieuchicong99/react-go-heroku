import React, { Component } from 'react';

import Title from './title';
export default class Information extends Component {
  render() {
    return (
      <div>
        <Title name="THÔNG TIN CÁ NHÂN" />
        <div style={{ marginTop: '10px' }}>Xem thông tin cá nhân</div>
      </div>
    );
  }
}
