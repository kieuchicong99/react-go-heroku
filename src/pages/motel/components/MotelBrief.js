import {
  HomeOutlined,
  DollarCircleOutlined,
  AreaChartOutlined,
  PhoneOutlined,
  HeartFilled,
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import React, { Component } from 'react';
import './MotelBrief.scss';
global.colorH = '';

const IconText = ({ icon, text }) => (
  <Space style={{ paddingRight: '10px' }}>
    {React.createElement(icon)}
    {text}
  </Space>
);
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
        <div
          className="MotelBrief"
          style={{
            border: '1px solid #C0C0C0',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '5px',
            height: '420px',
            width: '350px',
            boxShadow: '2px 2px 15px 2px rgb(148, 148, 148)',
          }}>
          <div span={5} style={{}}>
            <img
              src={data.Image}
              style={{ width: '100%', height: '100%', backgroundColor: 'red', maxHeight: '200px' }}
            />
          </div>
          <div span={19} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              className="MotalInfor"
              title="Xem Chi tiết"
              onClick={() => {
                this.props.log(`nha-tro-detail/${data.MotelCode}`);
              }}>
              <div style={{ fontWeight: 'bold', paddingLeft: '10px', maxHeight: '70px' }}>{data.Title}</div>
              <div style={{ display: 'flex', marginTop: '1%' }}>
                <div style={{ color: 'red', marginLeft: '5px' }}>
                  <DollarCircleOutlined style={{ marginRight: '5px' }} />
                  {data.Cost} triệu/tháng
                </div>
                <div style={{ marginLeft: '5px' }}>
                  <AreaChartOutlined style={{ margin: '0 5px 0 30px' }} />
                  {data.Acreage} m2
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
            </div>
            <div>
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <Button type="primary" style={{ width: '200px' }}>
                Liên hệ
                <PhoneOutlined style={{}} />
                {data.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
