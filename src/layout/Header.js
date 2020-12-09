import { Link } from 'react-router-dom';
import React from 'react';
import { Col, Row, Layout, Button } from 'antd';
import { useHistory } from 'react-router';
const { Header } = Layout;

const AppHeader = () => {
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
            <Button
              style={{ marginRight: '10px' }}
              onClick={() => {
                history.push('/register');
              }}>
              {' '}
              Đăng ký
            </Button>
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
};
export default AppHeader;
