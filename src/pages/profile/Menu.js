import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  UserOutlined,
  NotificationOutlined,
  EyeOutlined 
} from '@ant-design/icons';
import { Route, Link, Switch, Router } from 'react-router-dom'

import React from 'react'
const { SubMenu } = Menu;

export default class MenuSelect extends React.Component {
  constructor(props){
      super(props)
      this.state={
        collapsed: false,
        index:0
      }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  senData = () => {
    this.props.index(this.state.index)
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="white"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<UserOutlined />} onClick={() =>{
            this.setState({
              index:1
            })
            setTimeout(() => this.senData(),100)
          }}>
             Thông tin cá nhân
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}  onClick={() =>{
            this.setState({
              index:2
            })
            setTimeout(() => this.senData(),100)
          }} >
            Quản lí bài đăng
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />} onClick={() =>{
            this.setState({
              index:3
            })
            setTimeout(() => this.senData(),100)
          }}>
           Thông báo
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />} onClick={() =>{
            this.setState({
              index:4
            })
            setTimeout(() => this.senData(),100)
          }}>
           Xem thống kê
          </Menu.Item>
          <Menu.Item key="5" icon={<EyeOutlined />} onClick={() =>{
            this.setState({
              index:5
            })
            setTimeout(() => this.senData(),100)
          }}>
           Đổi mật khẩu
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}