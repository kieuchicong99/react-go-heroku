import { SearchOutlined } from '@ant-design/icons';
import { Col, Layout } from 'antd';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import logo from '../assets/logo.webp';
import Motel from '../pages/motel/Motel';
import Page2 from '../pages/Page2';
import MotelInfor from '../pages/motel/components/MotelInfor';
import MotelFavorite from '../pages/motel/components/MotelFavorite';
import MenuMotel from '../pages/motel/components/menuMotel';

import './layout.scss';
import AppFooter from './Footer';
import AppHeader from './Header';
const { Header, Content } = Layout;

function Home() {
  return (
    // <img
    //   src={bg}
    //   style={{
    //     width: '100%',
    //     height: 'auto',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //   }}
    // />
    <Redirect to="/home/nha-tro">
      <Motel></Motel>
    </Redirect>
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
              style={{ fontSize: 25, padding: '5px 20px 0 0' }}
              title="Tìm kiếm bài viết"
            />
            <MenuMotel />
          </div>
        </Col>
      </div>

      <div style={{ padding: '30px 60px 50px' }}>
        <Switch>
          <Route path="/home/nha-tro" component={Motel} />
          <Route path="/home/thongke" component={Page2} />
          <Route path="/home/nha-tro-detail" component={MotelInfor} />
          <Route path="/home/nha-tro-favorite" component={MotelFavorite} />
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
