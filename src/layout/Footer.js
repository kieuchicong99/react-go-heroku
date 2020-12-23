import { FacebookFilled, YoutubeFilled, InstagramFilled } from '@ant-design/icons';
import { Col, Row, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import cash from '../assets/cash.svg';
import installment from '../assets/installment.svg';
import internet_banking from '../assets/internet-banking.svg';
import jcb from '../assets/jcb.svg';
import mastercard from '../assets/mastercard.svg';
import visa from '../assets/visa.svg';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer>
    <Row>
      <Col span={6}>
        <div className="title">hỗ trợ khách hàng</div>
        <div>
          <Link to="">
            <span style={{ color: 'rgb(196, 1, 26)', fontWeight: '500' }}>Hotline chăm sóc khách hàng : 1900-6035</span>
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
    <div style={{ paddingTop: '20px' }}>Motel Finder | Group10 ©2020</div>
  </Footer>
);

export default AppFooter;
