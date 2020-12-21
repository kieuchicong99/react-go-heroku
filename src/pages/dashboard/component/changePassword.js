import { Col, Row, Input, Button } from 'antd';
import React, { Component } from 'react';

import Title from './title';
import './changePassword.css';
export default class ChangePassword extends Component {
  render() {
    return (
      <div>
        <div>
          <Title name="THAY ĐỔI MẬT KHẨU" />
        </div>
        <div style={{ margin: '30px 0 0 10px' }}>
          <Row>
            <Col span={4} class="first-collumn">
              Mật khẩu cũ
            </Col>
            <Col span={10}>
              <Input placeholder="Mật khẩu cũ" />
            </Col>
          </Row>
          <Row>
            <Col span={4} class="first-collumn">
              Mật khẩu mới
            </Col>
            <Col span={10}>
              <Input placeholder="Mật khẩu mới" />
            </Col>
          </Row>
          <Row>
            <Col span={4} class="first-collumn">
              Xác nhận lại mật khẩu
            </Col>
            <Col span={10}>
              <Input placeholder="Xác nhận lại mật khẩu" />
            </Col>
          </Row>
          <Row>
            <Col span={4} class="first-collumn" />
            <Col span={10}>
              <Button type="primary">Confirm</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
