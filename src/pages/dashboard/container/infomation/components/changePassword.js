import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class ChangePassword extends Component {
  onFinish = (values) => {
    // console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
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
