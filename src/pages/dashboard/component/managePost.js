import React, { Component } from 'react';

import PostInfor from '../../motel/components/PostInfor.js';
import Title from './title';
export default class ManagePost extends Component {
  render() {
    return (
      <div>
        <Title name="QUẢN LÍ BÀI ĐĂNG" />
        <div style={{ marginTop: '10px' }}>
          <PostInfor />
        </div>
      </div>
    );
  }
}
