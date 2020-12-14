import { HomeOutlined, DollarCircleOutlined, AreaChartOutlined, PhoneOutlined, HeartFilled } from '@ant-design/icons';
import { Col, Row, Button, Tooltip } from 'antd';
import React, { Component } from 'react';
import './MotelBrief.css';
global.colorH = '';
export default class MotelBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFavourite: 0,
      colorIcon: 'blue',
      notify: 'Bấm để bỏ lưu tin',
    };
  }
  render() {
    const data = this.props.itemdata;
    const styles = {
      containerStyle: {
        color: this.state.colorIcon,
        fontSize: '20px',
      },
      notify: this.state.notify,
    };
    return (
      <div>
        <Row
          style={{
            border: '1px solid #C0C0C0',
            marginBottom: '2%',
            padding: '1%',
            borderRadius: '2px',
            height: '220px',
          }}>
          <Col span={5} style={{}}>
            <img
              src="https://file4.batdongsan.com.vn/crop/350x232/2020/11/29/20201129161227-1580_wm.jpg"
              style={{ width: '98%', height: '99%', backgroundColor: 'red' }}
            />
          </Col>
          <Col span={19} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              className="MotalInfor"
              title="Xem Chi tiết"
              onClick={() => {
                this.props.log('nha-tro-detail');
              }}>
              <div style={{ fontWeight: 'bold' }}>{data.title}</div>
              <div style={{ display: 'flex', marginTop: '1%' }}>
                <div style={{ color: 'red', marginLeft: '1%' }}>
                  <DollarCircleOutlined style={{ marginRight: '5px' }} />
                  {data.cost} triệu/tháng
                </div>
                <div style={{ marginLeft: '1%' }}>
                  <AreaChartOutlined style={{ margin: '0 5px 0 40px' }} />
                  {data.area}
                </div>
                <div style={{ marginLeft: '5%' }}>
                  <HomeOutlined style={{ marginRight: '5px' }} />
                  {data.address}
                </div>
              </div>
              <div style={{ margin: '2% 0 0 1%', textAlign: 'left' }}>{data.description}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <Button type="primary" style={{ width: '30%', margin: '2% 0 0 30%' }}>
                Liên hệ
                <PhoneOutlined style={{ marginLeft: '15%' }} />
                {data.phone}
              </Button>
              <div className="icon-favourite" style={{ margin: '20px 0 0 250px' }}>
                <Tooltip title={styles.notify} placement="bottom">
                  <HeartFilled
                    style={styles.containerStyle}
                    onClick={() => {
                      const { addFavourite } = this.state;
                      this.setState({
                        addFavourite: addFavourite + 1,
                      });
                      if (this.state.addFavourite % 2 === 0) {
                        this.setState({
                          colorIcon: '',
                          notify: 'Bấm để lưu tin',
                        });
                      } else {
                        this.setState({
                          colorIcon: 'blue',
                          notify: 'Bấm để bỏ lưu tin',
                        });
                      }
                    }}
                  />
                </Tooltip>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
