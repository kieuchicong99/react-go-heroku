import { DesktopOutlined, ContainerOutlined, UserOutlined, NotificationOutlined, EyeOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';
import MENU_CONFIG from './config-menu/config-menu';
const { Sider } = Layout;
export default class MenuSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  IconName(name) {
    const TagName = name;
    return name ? <TagName /> : null;
  }

  renderMenuItem = ({ key, to, icon, content }) => (
    <Menu.Item key={key} onClick={this.menuItemSelected}>
      <Link to={to}>
        {this.IconName(icon)}
        <span style={{ marginRight: '10px' }}>{content}</span>
      </Link>
    </Menu.Item>
  );
  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        style={{ background: '#001529', minHeight: '200vh' }}
        collapsible
        onCollapse={this.onCollapse}
        collapsed={collapsed}
        theme="dark">
        <div
          id="Menu"
          style={{
            margin: 24,
            textAlign: 'center',
          }}>
          <Link to="/">
            <img src={collapsed ? '/logo.webp' : '/logo.webp'} style={{ width: '100%' }} alt="" />
          </Link>
        </div>
        <Menu style={{ background: '#001529', border: 'none' }} theme="dark" mode="inline">
          {MENU_CONFIG['ADMIN'].map((item) => (item.children ? this.renderSubMenu(item) : this.renderMenuItem(item)))}
        </Menu>
      </Sider>
    );
  }
}
