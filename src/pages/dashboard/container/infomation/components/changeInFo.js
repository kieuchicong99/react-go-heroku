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
export default class ChangeInfo extends Component {
  state = { Avatar: this.props.Avatar };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.Avatar !== prevState.Avatar) {
      return {
        Avatar: nextProps.Avatar,
      };
    }

    return null;
  }
  changeinfoUser = async (payload, meta) => {
    const api = API_URLS.USER.changeinfo(payload);
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
    const Avatar = this.state.Avatar;
    this.changeinfoUser(
      { ...values, Avatar },
      {
        onSuccess: () => {
          notification.open({
            message: 'Success',
            description: 'Cập nhật thông tin thành công! ',
            type: 'success',
          });
          // setTimeout(() => {
          //   window.location.href = '/login';
          // }, 2000);
        },
        onError: (errorCode) => {
          notification.open({
            message: 'Error',
            description: `${'Cập nhật thông tin thất bại!'}`,
            type: 'error',
          });
          // console.log('erorr');
        },
      },
    );
  };

  onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div style={{ maxWidth: '500px' }}>
        <div style={{ margin: '30px 0 0 10px' }}>
          <Form {...layout} name="basic" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item label="Họ và tên" name="FullName" rules={[{ required: true, message: 'Hãy nhập tên của bạn' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: 'Hãy nhập địa chỉ email của bạn', type: 'email' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="Phone"
              rules={[{ required: true, message: 'Hãy nhập số điện thoại của bạn!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Số CCCD/CMND"
              name="CMND"
              rules={[{ required: true, message: 'Haỹ nhập số CMND/CCCD của bạn!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="Address"
              rules={[{ required: true, message: 'Hãy nhập địa chỉ của bạn!' }]}>
              <Input />
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
