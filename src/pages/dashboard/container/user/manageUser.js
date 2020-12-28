import { PlusOutlined } from '@ant-design/icons';
import { Button, PageHeader, Table } from 'antd';
import React, { Component } from 'react';

export default class ManageUser extends Component {
  dataSource = [
    {
      key: '1',
      name: 'Kiều Chí Công ',
      age: 22,
      address: 'Cầu Giấy, Hà Nội',
    },
    {
      key: '2',
      name: 'Test Admin',
      age: 42,
      address: 'Xuân Thủy, Cầu Giấy, Hà Nội',
    },
    {
      key: '3',
      name: 'Nguyễn Văn Long',
      age: 50,
      address: 'Đống Đa, Hà Nội',
    },
    {
      key: '2',
      name: 'Test',
      age: 32,
      address: 'Hồ Chí Minh',
    },
  ];
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  pagination = {
    current: 1,
    pageSize: 10,
    total: 200,
  };
  render() {
    return (
      <div style={{ height: '100%' }}>
        <PageHeader
          style={{ border: ' 1px solid #f0f0f0', background: 'white', position: 'sticky', top: '0', zIndex: 10 }}
          title="QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG"
          onBack={() => window.history.back()}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
          }}
        />
        <div style={{ padding: '20px' }}>
          <div style={{ background: 'white', padding: '20px' }}>
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm Tài khoản
            </Button>
            <Table dataSource={this.dataSource} columns={this.columns} pagination={this.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
