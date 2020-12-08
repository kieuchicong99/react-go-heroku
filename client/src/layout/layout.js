import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import { Col, Layout } from 'antd';
import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import logo from '../assets/logo.webp';
import bg from '../logo.svg';
import Motel from '../pages/motel/Motel';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import MotelInfor from '../pages/motel/components/MotelInfor';
import Register from '../pages/login/Register';
import './layout.scss';
import AppFooter from './Footer';
import AppHeader from './Header';

const { Header, Content } = Layout;

function Home() {
  return (
    <img
      src={bg}
      style={{
        width: '100%',
        height: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );
}

function ContentLayout() {
  return (
    <div style={{ padding: '0px 30px' }}>
      <div
        className="page-title"
        style={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid  #f0f0f0',
        }}>
        <Col span={8}>
          <img src={logo} style={{ width: '50px', heigh: '50px' }} />
        </Col>
        <Col span={8}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/home/nha-tro">Nhà trọ </Link>
            <Link to="/home/thongke">Thống kê </Link>
            <Link to="/home/bieudo">Biểu đồ</Link>
          </div>
        </Col>

        <Col span={8}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SearchOutlined
              style={{ fontSize: 25, paddingRight: '20px' }}
              title="Tìm kiếm bài viết"
            />
            <HeartOutlined style={{ fontSize: 25 }} title="Bài viết yêu thích" />
          </div>
        </Col>
      </div>

      <div style={{ padding: '30px 60px 50px' }}>
        <Switch>
          <Route path="/home/nha-tro" component={Motel} />
          <Route path="/home/thongke" component={Register} />
          <Route path="/home/nha-tro-detail" component={MotelInfor} />
          <Route extract path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader></AppHeader>

        <Content style={{ background: '#ffffff', padding: '10px' }}>
          <ContentLayout />
        </Content>

        <AppFooter></AppFooter>
      </Layout>
    </div>
  );
}

export default AppLayout;
