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
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '2px',
            height: '220px',
          }}>
          <Col span={5} style={{}}>
            <img
              src={data.Image}
              style={{ width: '100%', height: '100%', backgroundColor: 'red', maxHeight: '200px' }}
            />
          </Col>
          <Col span={19} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              className="MotalInfor"
              title="Xem Chi tiết"
              onClick={() => {
                this.props.log(`nha-tro-detail/${data.MotelCode}`);
              }}>
              <div style={{ fontWeight: 'bold', paddingLeft: '10px' }}>{data.Title}</div>
              <div style={{ display: 'flex', marginTop: '1%' }}>
                <div style={{ color: 'red', marginLeft: '1%' }}>
                  <DollarCircleOutlined style={{ marginRight: '5px' }} />
                  {data.Cost} triệu/tháng
                </div>
                <div style={{ marginLeft: '1%' }}>
                  <AreaChartOutlined style={{ margin: '0 5px 0 40px' }} />
                  {data.Acreage}
                </div>
                <div style={{ marginLeft: '5%' }}>
                  <HomeOutlined style={{ marginRight: '5px' }} />
                  {data.Address}
                </div>

                <div className="icon-favourite" style={{ marginLeft: '20px' }}>
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
              <div
                style={{
                  margin: '20px 0 0 10px',
                  textAlign: 'left',
                  maxHeight: '66px',
                  overflow: 'hidden',
                }}>
                {data.description}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <Button type="primary" style={{ width: '200px' }}>
                Liên hệ
                <PhoneOutlined style={{}} />
                {data.phone}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
