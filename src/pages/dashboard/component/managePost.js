import { PageHeader } from 'antd';
import React, { Component } from 'react';

import PostInfor from '../../motel/components/PostInfor.js';
export default class ManagePost extends Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{ border: ' 1px solid #f0f0f0', background: 'white' }}
          title="QUẢN LÍ BÀI ĐĂNG"
          onBack={() => window.history.back()}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
          }}
        />
        <div style={{ padding: '20px' }}>
          <PostInfor />
        </div>
      </div>
    );
  }
}
