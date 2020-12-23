import React, { Component } from 'react';
import { Button, PageHeader, Table } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

export default class Notifycation extends Component {
  dataSource = [
    {
      key: '1',
      timestamp: "10 phút trước",
      status: "Đã phê duyệt",
      post: 'Căn hộ Hoàng Quốc Việt',
    },
    {
      key: '2',
      timestamp: '20 phút trước',
      status: "Bị từ chối",
      post: 'Nhà trọ đẹp giá rẻ',
    },
    {
      key: '3',
      timestamp: '3 ngày trước',
      status: "Đã phê duyệt",
      post: 'Căn hộ Hoàng Quốc Việt',
    },
    {
      key: '4',
      timestamp: '15 ngày trước',
      status: "Đã phê duyệt",
      post: 'Căn hộ mini, Xuân Thủy, Cầu Giấy',
    },
    {
      key: '5',
      timestamp: '15 ngày trước',
      status: "Đã phê duyệt",
      post: 'Nhà trọ 35m2, ở Hồ Tùng Mậu',
    },
    {
      key: '6',
      timestamp: '15 ngày trước',
      status: "Đã phê duyệt",
      post: 'Căn hộ Hoàng Quốc Việt',
    },
  ];
  columns = [
   
    {
      title: 'Bài viết',
      dataIndex: 'post',
      key: 'post',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
     {
      title: 'Thời gian',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
  ];
  pagination = {
    current: 1,
    pageSize: 10,
    total: 200,
  };
  render() {
    return (
      <div>
        <PageHeader
          style={{ border: ' 1px solid #f0f0f0', background: 'white', position: 'sticky', top: '0', zIndex: 10 }}
          title="QUẢN LÍ THÔNG BÁO"
          onBack={() => window.history.back()}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
          }}
        />
        <div style={{ padding: '20px' }}>
          <div style={{ background: 'white', padding: '20px' }}>
            <Button type="primary" icon={<CheckCircleOutlined />}>
              Đánh dấu đã đọc
            </Button>
            <Table dataSource={this.dataSource} columns={this.columns} pagination={this.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
