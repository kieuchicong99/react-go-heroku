import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import './Login.scss';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="Login">
      <div style={{ minWidth: '400px', minHeight: '400px' }}>
        <Form
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}>
            <Input prefix={<UserOutlined style={{ fontSize: '25px' }} />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
            <Input
              prefix={<LockOutlined style={{ fontSize: '25px' }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="" style={{ color: 'blue', marginLeft: '1%' }}>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Row>
              <Col span={8}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ alignItems: 'center' }}>
                  Log in
                </Button>
              </Col>

              <Col span={16}>
                Or <a href="">register now!</a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
