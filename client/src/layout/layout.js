import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Row } from 'antd';
import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import bg from '../logo.svg';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import './layout.scss';

const { Footer, Header, Content } = Layout;

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
        <Col span={8} />
        <Col span={8}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/thi-nghiem">Thí nghiệm </Link>
            <Link to="/thongke">Thống kê </Link>
            <Link to="/bieudo">Biểu đồ</Link>
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

      <div style={{ paddingTop: '20px' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/thi-nghiem" component={Page1} />
          <Route path="/thongke" component={Page2} />
          <Route path="/bieudo" component={Page3} />
        </Switch>
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Header
            style={{
              background: '#ffffff',
              fontSize: '16px',
              fontWeight: 'bolder',
              textAlign: 'center',
              padding: '10px 20px 0px 10px',
              postion: 'sticky',
              top: '0',
            }}>
            <Row>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  fontFamily: 'Helvetica Neue',
                  color: '#999999',
                  fontSize: '14px',
                }}>
                <div style={{ paddingRight: '20px' }}>Chào mừng bạn đến với Tìm phòng trọ</div>
                <div>Liên hệ với chúng tôi: 123-456-789</div>
              </Col>
              <Col span={8}>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
              </Col>
              <Col span={8}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button style={{ marginRight: '10px' }}> Đăng ký</Button>
                  <Button> Đăng nhập</Button>
                </div>
              </Col>
            </Row>
          </Header>
          <Content style={{ background: '#ffffff', padding: '10px' }}>
            <ContentLayout />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}>
            Tìm phòng trọ | Group10 ©2020
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default AppLayout;
