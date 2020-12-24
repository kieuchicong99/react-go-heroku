/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-console */
import { PhoneOutlined, ArrowLeftOutlined, HeartFilled, CloseOutlined } from '@ant-design/icons';
import { Button, Col, Row, Tooltip, Checkbox } from 'antd';
import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MotelInfor.scss';
import placeholder from '../../../assets/placeholder.png';
import { API_URLS } from '../../../configs/api';
import { apiCall } from '../../../utilities/api';

export default class Motel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      addFavourite: 0,
      colorIcon: 'blue',
      notify: 'Bấm để bỏ lưu tin',
      motelData: {},
    };
  }
  getByCode = async (code) => {
    const api = API_URLS.MOTEL.getByCode(code);
    const { response, error } = await apiCall({ ...api });
    if (!error && (response.status === 200 || response.status === 201)) {
      console.log('response:', response);
      this.setState({ motelData: response.data.Data });
    } else {
    }
    return { response, error };
  };
  componentDidMount() {
    const motelCode = this.props.history.location.pathname.replace('/home/nha-tro-detail/', '');
    console.log('motelCode:', motelCode);
    this.getByCode(motelCode);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const styles = {
      containerStyle: {
        color: this.state.colorIcon,
        fontSize: '20px',
        marginLeft: '10px',
      },
      notify: this.state.notify,
    };
    const { motelData } = this.state;

    const fullscreen = document.getElementById('fullscreen');
    const root = document.getElementById('root');
    const fullSlideShow = document.getElementById('fullSlideShow');
    return (
      <div style={{ width: '100%' }}>
        <Button
          icon={
            <ArrowLeftOutlined
              style={{ fontSize: '25px' }}
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          }
        />

        <Row>
          <Col span={18}>
            <div
              id="fullSlideShow"
              style={{
                backgroundColor: '#A0A0A0',
              }}>
              {this.state.flag ? (
                <CloseOutlined
                  style={{ fontSize: 20 }}
                  onClick={() => {
                    root.style.display = '';
                    // root.style.zIndex = 10;
                    fullscreen.innerHTML = '';
                    fullSlideShow.style.height = '500px';
                    console.log(fullSlideShow);
                    // fullscreen.display = 'none';
                    // fullscreen.style.zIndex = -10;
                  }}
                />
              ) : (
                <></>
              )}
              <Slider asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
                {motelData != undefined ? (
                  motelData?.Images?.map((item) => (
                    <div style={{ border: '1px solid green' }} className="ParentImage">
                      <img
                        style={{ maxHeight: '500px' }}
                        src={item}
                        onClick={() => {
                          fullSlideShow.style.height = '100%';
                          this.setState({ flag: true });
                          console.log('fullscreen', fullscreen);
                          console.log('fullSlideShow', fullSlideShow);
                          const a = fullSlideShow;
                          fullscreen.appendChild(a);
                          root.style.display = 'none';
                          fullscreen.style.zIndex = 10;
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <img style={{ maxHeight: '500px' }} className="ParentImage" src={placeholder} />
                )}
              </Slider>
              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={3}
                swipeToSlide
                focusOnSelect
                centerMode
                style={{ margin: '10px 30px 5px 30px' }}>
                {motelData?.Images?.map((item) => (
                  <div>
                    <img className="ChildImage" src={item} />
                  </div>
                ))}
              </Slider>
            </div>
            <div style={{ margin: '30px 0 0 0' }}>
              <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '18px' }}>{motelData?.Title}</div>
              <div style={{ width: '800px', textAlign: 'left' }}>{motelData?.Address}</div>

              <div>
                <Row
                  style={{
                    borderBottom: '1px solid #E0E0E0',
                    borderTop: '1px solid #E0E0E0',
                    marginTop: '20px',
                    paddingTop: '10px',
                  }}>
                  <Col span={6} style={{ textAlign: 'left' }}>
                    <div className="title">Mức giá:</div>
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{motelData?.Cost}</div>
                  </Col>
                  <Col span={12} style={{ textAlign: 'left' }}>
                    <div className="title">Diện tích:</div>
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{motelData?.Acreage}</div>
                  </Col>
                  <Col span={6} style={{}}>
                    <div className="title" style={{ cursor: 'pointer' }}>
                      Lưu tin
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
                  </Col>
                </Row>
                <div>
                  <div className="title">MÔ TẢ</div>
                  <div>{motelData?.Description}</div>
                  <div className="title">CÁC THÔNG TIN KHÁC</div>
                  <div>
                    <div>Giá điện</div>
                    <Checkbox checked={this.state.checked} disabled={this.state.disabled} onChange={this.onChange}>
                      Điều hòa
                    </Checkbox>
                    <div>Phòng tắm</div>
                    <div>Ban công:</div> <Checkbox checked={motelData?.HasAirCondition}>Điều hòa</Checkbox>
                    <div>Giá nước: {motelData?.WaterPrice}</div>
                    <div>Phòng ăn: {motelData?.kitchen}</div>
                    <div>Phòng ngủ: 3 </div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6} style={{}}>
            <div
              style={{
                border: '1px solid #C0C0C0',
                width: '50%',
                height: '65%',
                marginLeft: '5%',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Button
                style={{
                  width: '80%',
                  height: '10%',
                  backgroundColor: '#009900',
                  margin: '80px auto 0 auto',
                  borderRadius: '2px',
                  color: 'white',
                }}>
                <PhoneOutlined />
                0123456789
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
