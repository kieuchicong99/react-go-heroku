import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox, Row, Col, notification } from 'antd';
import React, { Component } from 'react';
import { API_URLS } from '../../configs/api';
import { apiCall } from '../../utilities/api';
import './Login.scss';


class Login extends Component {
  insertUser = async (payload, meta) => {
   
    const api = API_URLS.USER.login(payload);
    const { response, error } = await apiCall({ ...api, payload });
    if (!error && (response.status === 200 || response.status === 201)) {
      if (meta && meta.onSuccess) {
        meta.onSuccess();
      }
    } else if (meta && meta.onError) {
      meta.onError(error);
    }
    return { response, error };
  };

  OnClickUpdateSubmit = (value) => {

    //console.log("form value: ", value)
    this.insertUser(
      value,
      {

        onSuccess: () => {
          notification.open({
            message: 'Success',
            description: 'Login Success',
            type: 'success',
          });
          console.log('successs')
        
        },
        onError: (errorCode) => {
          const res = JSON.parse(errorCode.responseText);


          notification.open({
            message: 'Error',
            description: `${'Fail to signin'} - ${errorCode}`,
            type: 'error',
          });
          console.log('erorr')
        },
      },
    );
   
  }

  render() {
    return (
      <div className="Login">
        <div style={{ minWidth: '400px', minHeight: '400px' }}>
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={this.OnClickUpdateSubmit}>
            <Form.Item
              name="UserName"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}>
              <Input prefix={<UserOutlined style={{ fontSize: '25px' }} />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="PassWord"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
              <Input prefix={<LockOutlined style={{ fontSize: '25px' }} />} type="password" placeholder="Password" />
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
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ alignItems: 'center' }}>
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
  }
}

export default Login;
