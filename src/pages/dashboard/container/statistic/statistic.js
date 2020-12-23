import { PageHeader } from 'antd';
import React, { Component } from 'react';

export default class Statistic extends Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{ border: ' 1px solid #f0f0f0', background: 'white', position: 'sticky', top: '0' }}
          title="THỐNG KÊ"
          onBack={() => window.history.back()}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
          }}
        />
        <div style={{ padding: '20px' }}>
          <div style={{ background: 'white', minHeight: '600px' }}>
            <div style={{ padding: '10px' }}>hi</div>
          </div>
        </div>
      </div>
    );
  }
}
