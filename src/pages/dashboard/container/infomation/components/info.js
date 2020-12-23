import { InstagramOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import React, { Component } from 'react';

import ChangeInfo from './changeInFo';
import ChangePassword from './changePassword';
import './info.scss';
const { TabPane } = Tabs;
const infor = {
  name: 'Nguyễn Ngọc Lâm',
  postedMotel: 2,
  phone: '012345678',
  email: '1234@gmail.com',
  cccd: '001099014558',
  address: '35A, Ngách 12A, Phạm Văn Đồng, Cầu Giấy, Hà Nội',
};
export default class Info extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div style={{ background: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '190px' }}>
          <div
            className="profile_image"
            onClick={() => {
              const { show } = this.state;
              this.setState({
                show: !show,
              });
            }}
            onMouseDown={() => {
              document.getElementsByClassName('profile_image')[0].style.width = '175px';
              document.getElementsByClassName('profile_image')[0].style.height = '175px';
            }}
            onMouseUp={() => {
              document.getElementsByClassName('profile_image')[0].style.width = '180px';
              document.getElementsByClassName('profile_image')[0].style.height = '180px';
            }}>
            <img
              style={{ width: '100%', height: '100%', borderRadius: '50%', display: 'block' }}
              src="http://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg"
            />
          </div>
        </div>

        {this.state.show ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              className="upload_box"
              style={{
                position: 'absolute',
                marginTop: '150px',
                background: 'white',
                width: '250px',
                height: '100px',
                padding: '20px',
                borderRadius: '6px',
              }}>
              <Button style={{ width: '100%' }} icon={<InstagramOutlined />}>
                Update Profile image{' '}
              </Button>
            </div>
          </div>
        ) : (
          <></>
        )}

        <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#055699' }}>{infor.name}</p>
        <div style={{ padding: '20px' }}>
          <div
            onClick={() => {
              this.setState({
                show: false,
              });
            }}
            style={{
              margin: '10px auto',
              backgroundColor: 'rgb(246, 248, 250)',
              width: '100%',
              height: '130px',
              borderRadius: '2px',
            }}>
            <div style={{ padding: '15px 30px 15px 30px' }}>
              <div>
                <div>
                  <span>Tin đã đăng : </span>
                  <span style={{ fontWeight: 'bold' }}>{infor.postedMotel}</span>
                </div>
                <div>
                  <span>Số điện thoại : </span>
                  <span style={{ fontWeight: 'bold' }}>{infor.phone}</span>
                </div>
                <div>
                  <span>Email : </span>
                  <span style={{ fontWeight: 'bold' }}>{infor.email}</span>
                </div>
                <div>
                  <span>CMND/CCCD số : </span>
                  <span style={{ fontWeight: 'bold' }}>{infor.cccd}</span>
                </div>
                <div>
                  <span>Địa chỉ thường chú: </span>
                  <span style={{ fontWeight: 'bold' }}>{infor.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Thay đổi thông tin cá nhân" key="1">
                <ChangeInfo />
              </TabPane>
              <TabPane tab="Đổi mật khẩu" key="2">
                <ChangePassword />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
