import { PageHeader } from 'antd';
import React, { Component } from 'react';

import Info from './components/info';
export default class Information extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <PageHeader
          style={{ border: ' 1px solid #f0f0f0', background: 'white', position: 'sticky', top: '0' }}
          title="THÔNG TIN CÁ NHÂN"
          onBack={() => window.history.back()}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
          }}
        />
        <div style={{ padding: '20px' }}>
          <Info />
        </div>
      </div>
    );
  }
}
