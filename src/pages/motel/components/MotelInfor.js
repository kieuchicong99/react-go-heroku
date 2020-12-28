/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-console */
import { PhoneOutlined, ArrowLeftOutlined, HeartFilled, CloseOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Row, Tooltip, Checkbox, Tabs, Comment, Avatar, Form, List, Input, Rate } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MotelInfor.scss';
import placeholder from '../../../assets/placeholder.png';
import { API_URLS } from '../../../configs/api';
import { actions as motelActions } from '../../../redux/motelRedux';
import { apiCall } from '../../../utilities/api';
import MotelBrief from './MotelBrief';

import './MotelInfo.scss';

const { TabPane } = Tabs;
const { TextArea } = Input;

const desc = ['rất tệ', 'tệ', 'bình thường', 'tốt', 'tuyệt vời'];

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Thêm bình luận
      </Button>
    </Form.Item>
  </>
);

const RatingEditor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Thêm đánh giá
      </Button>
    </Form.Item>
  </>
);
class MotelInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      addFavourite: 0,
      colorIcon: 'blue',
      notify: 'Bấm để bỏ lưu tin',
      motelData: {},

      comments: [],
      submitting: false,
      value: '',
      ratingValue: 3,
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
    this.props.getListMotel();
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Kiều Chí Công',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleChangeRating = (value) => {
    this.setState({ ratingValue: value });
  };
  render() {
    const { comments, submitting, value } = this.state;
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
          <Col span={24}>
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
                          // fullSlideShow.style.height = '100%';
                          // this.setState({ flag: true });
                          // console.log('fullscreen', fullscreen);
                          // console.log('fullSlideShow', fullSlideShow);
                          // const a = fullSlideShow;
                          // fullscreen.appendChild(a);
                          // root.style.display = 'none';
                          // fullscreen.style.zIndex = 10;
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
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{motelData?.Cost}tr</div>
                  </Col>
                  <Col span={12} style={{ textAlign: 'left' }}>
                    <div className="title">Diện tích:</div>
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{motelData?.Acreage}m2</div>
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
                  <div className="MotelInfoTitle" style={{ marginTop: '20px' }}>
                    MÔ TẢ
                  </div>
                  <div style={{ padding: '10px' }}>{motelData?.Description}</div>
                  <div className="MotelInfoTitle" style={{ marginTop: '20px' }}>
                    CÁC THÔNG TIN KHÁC
                  </div>
                  <div style={{ padding: '10px' }}>
                    <div>Giá điện: {motelData?.ElectricityPrice ? motelData?.ElectricityPrice : 'chưa có'} </div>

                    <div>
                      Điều hòa: <Checkbox checked={motelData?.HasAirCondition} />
                    </div>
                    <div>
                      Nóng lạnh: <Checkbox checked={motelData?.Bathroom?.HasWaterHeater} />
                    </div>
                    <div>
                      Ban công: <Checkbox checked={motelData?.HasBalcony} />
                    </div>
                    <div>Giá nước: {motelData?.WaterPrice ? motelData?.WaterPrice : 'chưa có'}</div>
                    <div>Phòng ăn: {motelData?.kitchen}</div>
                    <div>Phòng ngủ: 3 </div>
                    <div />
                  </div>
                </div>
              </div>
              <div className="right" style={{}}>
                <div className="MotelInfoTitle" style={{ textAlign: 'center' }}>
                  Liên hệ{' '}
                </div>
                <div style={{ border: '1px solid #C0C0C0', padding: '10px', borderRadius: '5px' }}>
                  <div>
                    <Button
                      style={{
                        width: '200px',
                        height: '30px',
                        backgroundColor: '#009900',
                        borderRadius: '2px',
                        color: 'white',
                      }}>
                      <PhoneOutlined />
                      {motelData?.PhoneNumber ? motelData.PhoneNumber : '0123456789'}
                    </Button>
                  </div>

                  <div>
                    <Button
                      style={{
                        width: '200px',
                        height: '30px',
                        backgroundColor: '#009900',
                        borderRadius: '2px',
                        color: 'white',
                        marginTop: '10px',
                      }}>
                      <MailOutlined />
                      {motelData?.Email ? motelData.Email : 'ownermail@gmail.com'}
                    </Button>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '30px' }}>
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <div style={{ textTransform: 'uppercase', fontWeight: '900', fontSize: '18px' }}>Bình luận </div>
                    }
                    key="1">
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                      avatar={
                        <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          alt="Kiều Chí Công"
                        />
                      }
                      content={
                        <Editor
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          submitting={submitting}
                          value={value}
                        />
                      }
                    />
                  </TabPane>
                  <TabPane
                    tab={
                      <div style={{ textTransform: 'uppercase', fontWeight: '900', fontSize: '18px' }}>Đánh giá</div>
                    }
                    key="2">
                    <div>
                      <Rate tooltips={desc} onChange={this.handleChangeRating} value={this.state.ratingValue} />
                      {this.state.ratingValue ? (
                        <span className="ant-rate-text">{desc[this.state.ratingValue - 1]}</span>
                      ) : (
                        ''
                      )}
                    </div>
                    <Comment
                      avatar={
                        <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          alt="Kiều Chí Công"
                        />
                      }
                      content={
                        <RatingEditor
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          submitting={submitting}
                          value={value}
                        />
                      }
                    />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <div style={{ textTransform: 'uppercase', fontWeight: '900', fontSize: '18px' }}>Nhà trọ trương tự</div>
          <List
            itemLayout="vertical"
            grid={{}}
            dataSource={this.props.listMotels}
            renderItem={(item) => (
              <div style={{ padding: '20px' }}>
                <MotelBrief itemdata={item} log={this.log} />
              </div>
            )}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ motelReducer }) => ({
  listMotels: motelReducer.data,
  isFetching: motelReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getListMotel: (params) => dispatch(motelActions.getListMotel(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MotelInfor);
