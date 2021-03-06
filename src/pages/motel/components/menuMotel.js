import { HeartOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import React, { Component } from 'react';
const Items = [
  {
    link: 'https://react-slideshow.herokuapp.com/assets/images/slide_2.jpg',
    title: 'Dự án D2 Giảng Võ, Phố Giảng Võ.....',
    address: 'Cầu Giấy, Hà Nội',
  },
  {
    link: 'https://react-slideshow.herokuapp.com/assets/images/slide_2.jpg',
    title: 'Dự án D2 Giảng Võ, Phố Giảng Võ.....',
    address: 'Cầu Giấy, Hà Nội',
  },
];
const menu = (
  <Menu style={{ width: '400px', borderRadius: '7px' }}>
    <div
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        margin: '10px 0 -10px 0',
      }}>
      <p>Tin đã lưu</p>
    </div>
    {Items.map((value) => (
      <Menu.Item key="0" style={{ paddingTop: '0px' }}>
        <div style={{ display: 'flex', borderTop: '1px solid #E0E0E0', paddingTop: '10px' }}>
          <img src={value.link} style={{ width: '80px', height: '60px', borderRadius: '5px' }} />
          <div style={{ marginLeft: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>{value.title}</p>
            <p style={{ marginTop: '-10px' }}>{value.address}</p>
          </div>
        </div>
      </Menu.Item>
    ))}
    <Menu.Divider style={{ paddingTop: '0px' }} />
    <div
      onClick={() => {
        window.location = '/home/nha-tro-favorite';
      }}
      style={{
        cursor: 'pointer',
        textAlign: 'center',
        color: '#6666FF',
        fontWeight: 'bold',
        margin: '10px 0 0 0',
      }}>
      <p>Xem tất cả</p>
    </div>
  </Menu>
);
export default class MenuMotel extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <HeartOutlined style={{ fontSize: 30, paddingRight: '20px' }} />
        </a>
      </Dropdown>
    );
  }
}
