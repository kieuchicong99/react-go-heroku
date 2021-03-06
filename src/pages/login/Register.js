import { Form, Input, Select, Button, notification, PageHeader } from 'antd';
import React from 'react';

import { API_URLS } from '../../configs/api';
import { apiCall } from '../../utilities/api';
const { Option } = Select;
class Register extends React.Component {
  insertUser = async (payload, meta) => {
    // console.log('dao vao');
    const api = API_URLS.USER.signup(payload);
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
    delete value.RePassWord;
    // console.log('form value: ', value);
    this.insertUser(value, {
      onSuccess: () => {
        notification.open({
          message: 'Success',
          description: 'Đăng ký thành công \n Bạn phải chờ Admin phê duyệt tài khoản',
          type: 'success',
        });
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      },
      onError: (errorCode) => {
        notification.open({
          message: 'Error',
          description: `${'Đăng ký thất bại'} \n ${'Tài khoản đã tồn tại'}`,
          type: 'error',
        });
        // console.log('erorr');
      },
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="Grid">
          <div
            className="Col"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <div>
              <PageHeader style={{ textAlign: 'center' }} title="ĐĂNG KÝ TÀI KHOẢN" />
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <img height="200px" width="200px" src="/logo.webp" />
              </div>
            </div>
          </div>
          <div className="Col" span={12} style={{ width: '100%' }}>
            <Form
              name="register"
              onFinish={this.OnClickUpdateSubmit}
              initialValues={{
                prefix: '86',
              }}
              scrollToFirstError>
              <Form.Item
                name="FullName"
                label="Tên đầy đủ"
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập tên của bạn!',
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="UserName"
                label="Tên tài khoản"
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập tên tài khoản! ',
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                name="PassWord"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập mật khẩu !',
                  },
                ]}
                hasFeedback>
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="RePassWord"
                label="Confirm Password"
                dependencies={['PassWord']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập xác nhận mật khẩu',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      // console.log('value:', value);
                      if (!value || getFieldValue('PassWord') === value) {
                        return Promise.resolve();
                      }

                      // eslint-disable-next-line prefer-promise-reject-errors
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}>
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="RoleCode"
                label="Tài khoản muốn đăng ký"
                rules={[
                  {
                    required: true,
                    message: 'Please select your habitual residence!',
                  },
                ]}>
                <Select
                  style={{ minWidth: '200px' }}
                  onChange={this.handleChangeRole}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }>
                  <Option value="ADMIN">ADMIN</Option>
                  <Option value="OWNER">OWNER</Option>
                  <Option value="CUSTOMER">CUSTOMER</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginLeft: '45%' }}>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
