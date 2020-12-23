import { PageHeader } from 'antd';
import React, { Component } from 'react';

import Title from './title';
export default class Notifycation extends Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{ border: ' 1px solid #f0f0f0' }}
          title="QUẢN LÍ THÔNG BÁO"
          onBack={() => window.history.back()}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
          }}
        />
        <div style={{ padding: '20px' }}>Xem thông báo</div>
      </div>
    );
  }
}
