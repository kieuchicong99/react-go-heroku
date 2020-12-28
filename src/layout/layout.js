import { UserOutlined } from '@ant-design/icons';
import { Col, Layout } from 'antd';
import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';

import logo from '../assets/logo.webp';
import Motel from '../pages/motel/Motel';
import MotelFavorite from '../pages/motel/components/MotelFavorite';
import MotelInfor from '../pages/motel/components/MotelInfor';
import MenuMotel from '../pages/motel/components/menuMotel';
import './layout.scss';
import AppFooter from './Footer';
import AppHeader from './Header';
const { Content } = Layout;

function Home() {
  return (
    <Redirect to="/home/nha-tro">
      <Motel />
    </Redirect>
  );
}

function ContentLayout() {
  const history = useHistory();
  return (
    <div style={{ padding: '10px 30px' }}>
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
            <Link to="/home/thongke">Chung cư mini </Link>
            <Link to="/home/vp">Văn Phòng</Link>
            <Link to="/home/homestay">Home Stay</Link>
          </div>
        </Col>

        <Col span={8}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div id="wrap">
              <input id="search" name="search" type="text" placeholder="Tìm kiếm" />
              <input id="search_submit" value="Rechercher" type="submit" />
            </div>
            <MenuMotel />
            <UserOutlined
              style={{ fontSize: '30px' }}
              onClick={() => {
                history.push('/dashboard');
              }}
            />
          </div>
        </Col>
      </div>

      <div style={{ padding: '30px 60px 50px' }}>
        <Switch>
          <Route path="/home/nha-tro" component={Motel} />
          <Route path="/home/thongke" component={<></>} />
          <Route path="/home/bieudo" component />

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
        <AppHeader />

        <Content style={{ background: '#ffffff', padding: '10px' }}>
          <ContentLayout />
        </Content>

        <AppFooter />
      </Layout>
    </div>
  );
}

export default AppLayout;
