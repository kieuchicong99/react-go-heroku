import {
  SearchOutlined,
  HeartOutlined,
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
} from '@ant-design/icons';
import { Button, Col, Layout, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';

import cash from '../assets/cash.svg';
import installment from '../assets/installment.svg';
import internet_banking from '../assets/internet-banking.svg';
import jcb from '../assets/jcb.svg';
import logo from '../assets/logo.webp';
import mastercard from '../assets/mastercard.svg';
import visa from '../assets/visa.svg';
import bg from '../logo.svg';
import Page1 from '../pages/nhatro/nhatro';
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
          <Route path="/home/nha-tro" component={Page1} />
          <Route path="/home/thongke" component={Page2} />
          <Route path="/home/bieudo" component={Page3} />

          <Route extract path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

function AppHeader() {
  const history = useHistory();
  return (
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
          <Link to="/home">Home</Link> | <Link to="/about">About</Link>
        </Col>
        <Col span={8}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: '10px' }}> Đăng ký</Button>
            <Button
              onClick={() => {
                history.push('/login');
              }}>
              Đăng nhập
            </Button>
          </div>
        </Col>
      </Row>
    </Header>
  );
}

function AppFooter() {
  return (
    <Footer>
      <Row>
        <Col span={6}>
          <div className="title">hỗ trợ khách hàng</div>
          <div>
            <Link to="">
              <span style={{ color: 'rgb(196, 1, 26)', fontWeight: '500' }}>
                Hotline chăm sóc khách hàng : 1900-6035
              </span>
              <br /> (1000đ/phút, 8-21h kể cả T7,CN)
            </Link>
            <Link to=""> Chính sách bảo mật thanh toán</Link>
            <Link to=""> Điều khoản sử dụng</Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="title">các chính sách </div>
          <div>
            <Link to=""> Chính sách bảo mật thông tin cá nhân</Link>
            <Link to=""> Chính sách bảo mật thanh toán</Link>
            <Link to=""> Điều khoản sử dụng</Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="title">hợp tác và liên kết</div>
          <div>
            <Link to=""> Quy chế hoạt động </Link>
            <Link to=""> Đăng ký trở thành chủ trọ</Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="title">kết nối với chúng tôi</div>

          <FacebookFilled style={{ fontSize: 25, paddingRight: '20px' }} />
          <YoutubeFilled style={{ fontSize: 25, paddingRight: '20px' }} />
          <InstagramFilled style={{ fontSize: 25, paddingRight: '20px' }} />

          <div className="title" style={{ marginTop: '20px' }}>
            phương thức thanh toán
          </div>
          <div className="payment">
            <img src={visa} />
            <img src={mastercard} />
            <img src={jcb} />

            <img src={cash} />
            <img src={internet_banking} />
            <img src={installment} />
          </div>
        </Col>
      </Row>
      <hr />
      <div style={{ paddingTop: '20px' }}>Tìm phòng trọ | Group10 ©2020</div>
    </Footer>
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
