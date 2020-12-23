import { Form, Input, Button, notification } from 'antd';
import React, { Component } from 'react';

import { API_URLS } from './../../../../../configs/api';
import { apiCall } from './../../../../../utilities/api';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class ChangePassword extends Component {
  changePassWordUser = async (payload, meta) => {
    const api = API_URLS.USER.changepassword(payload);
    const { response, error } = await apiCall({ ...api, payload });
    if (!error && (response.status === 200 || response.status === 201)) {
      if (meta && meta.onSuccess) {
        // console.log('res:', response.data.Data);
        if (response.data.Data != null && response.data.Data.length > 20) {
          localStorage.setItem('motelFinderToken', response.data.Data);
        }

        meta.onSuccess();
      }
    } else if (meta && meta.onError) {
      meta.onError(error);
    }
    return { response, error };
  };

  onFinish = (values) => {
    // console.log('Success:', values);
    this.changePassWordUser(values, {
      onSuccess: () => {
        notification.open({
          message: 'Success',
          description: 'Đổi mật khẩu thành công',
          type: 'success',
        });
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      },
      onError: (errorCode) => {
        notification.open({
          message: 'Error',
          description: `${'Đổi mật khẩu thất bại'}`,
          type: 'error',
        });
        // console.log('erorr');
      },
    });
  };

  onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
    setTimeout(() => {
      window.location.href = '/changePassword';
    }, 1000);
  };

  render() {
    return (
      <div style={{ maxWidth: '500px' }}>
        <div style={{ margin: '30px 0 0 10px' }}>
          <Form name="basic" {...layout} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item
              label="Old PassWord"
              name="OldPass"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="New Password"
              name="NewPass"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
