import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class ChangeInfo extends Component {
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
          <Form {...layout} name="basic" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item
              label="Full Name"
              name="FullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Phone" name="Phone" rules={[{ required: true, message: 'Please input your email!' }]}>
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
