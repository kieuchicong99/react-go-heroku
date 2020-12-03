import { Col, Row } from 'antd';
import React, { Component } from 'react';
export default class Item extends Component {
  render() {
    let data = this.props.itemdata;
    return (
      <div style={{ border: '1px solid red' }}>
        <Row>
          <Col span={6} style={{ boder: '1px solid green' }}>
            <img src="https://file4.batdongsan.com.vn/crop/350x232/2020/11/29/20201129161227-1580_wm.jpg"></img>
          </Col>
          <Col span={18} style={{ boder: '1px solid green' }}>
            day la 1 componet
            <div>{data.title}</div>
            <div>{data.area}</div>
            <div>{data.cost}</div>
            <div>{data.description}</div>
          </Col>
        </Row>
      </div>
    );
  }
}
