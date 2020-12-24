/* eslint-disable max-len */
import { Col, Row, Table } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as motelActions } from '../../redux/motelRedux';
import Filter from './components/Filter';
import MotelBrief from './components/MotelBrief';

import './motel.css';

class Motel extends Component {
  state = {
    total: 0,
    current: 1,
    pageSize: 10,
  };
  getMotel = (params) => {
    this.props.getListMotel(params);
  };

  columns = [
    {
      title: <div style={{ textTransform: 'uppercase', fontWeight: '900' }}>Danh sách các phòng trọ</div>,
      dataIndex: 'post',
      key: 'post',
      render: (value, record) => (
        <>
          <MotelBrief itemdata={record} log={this.log} />
        </>
      ),
    },
  ];

  log = (route) => {
    this.props.history.push(route);
  };

  componentDidMount() {
    this.getMotel();
  }
  render() {
    const data = this.props.listMotels;
    const pagination = {
      current: 1,
      pageSize: 5,
      total: data?.length,
    };
    return (
      <div>
        <Row>
          <Col span={18} style={{}}>
            <Table dataSource={data} columns={this.columns} pagination={pagination} />
          </Col>

          <Col span={6} style={{ marginTop: '20px' }}>
            <Filter />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ motelReducer }) => ({
  listMotels: motelReducer.data,
  isFetching: motelReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getListMotel: (params) => dispatch(motelActions.getListMotel(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Motel);
