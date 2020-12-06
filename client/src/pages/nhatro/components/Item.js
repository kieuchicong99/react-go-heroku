import { Col, Row, Checkbox, Button } from 'antd';
import React, { Component } from 'react';
import {
  HomeOutlined,
  DollarCircleOutlined,
  AreaChartOutlined,
  PhoneOutlined
} from '@ant-design/icons';


export default class Item extends Component {
  render() {
    let data = this.props.itemdata;
    return (
      <div>
        <Row style={{ border: "1px solid #C0C0C0", marginBottom: "2%", padding: "1%", borderRadius: "2px", height: "220px" }}>
          <Col span={5} style={{}}>
            <img src="https://file4.batdongsan.com.vn/crop/350x232/2020/11/29/20201129161227-1580_wm.jpg" style={{ width: "98%", height: "99%", backgroundColor: "red" }}></img>
          </Col>
          <Col span={19} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: "bold" }} >{data.title}</div>
            <div style={{ display: "flex", marginTop: "1%" }} >
              <div style={{ color: "red", marginLeft: "1%" }}>
                <DollarCircleOutlined style={{ marginRight: "5px" }} />
                {data.cost} triệu/tháng
              </div>
              <div style={{ marginLeft: "1%" }}>
                <AreaChartOutlined style={{ margin:"0 5px 0 40px" }} />
                {data.area}
              </div>
              <div style={{ marginLeft: "5%" }}>
                <HomeOutlined style={{ marginRight: "5px" }} />
                {data.address}
              </div>
            </div>
            <div style={{ margin: "2% 0 0 1%",textAlign:"left"}} >{data.description}</div>
            <Button type="primary" style={{width:"30%", margin:"1% 0 0 70%"}}>
              Liên hệ
            <PhoneOutlined style={{ marginLeft:"15%" }}/>
              {data.phone}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
