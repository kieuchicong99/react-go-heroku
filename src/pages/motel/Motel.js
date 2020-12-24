/* eslint-disable max-len */
import { Col, Row, Table, List, PageHeader } from 'antd';
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
        <PageHeader style={{ textTransform: 'uppercase' }} title="Danh sách phòng trọ mới" />
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <List
            itemLayout="vertical"
            grid={{}}
            dataSource={data}
            renderItem={(item) => (
              <div style={{ padding: '20px' }}>
                <MotelBrief itemdata={item} log={this.log} />
              </div>
            )}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
          />

          {/* <Col span={6} style={{ marginTop: '20px' }}>
            <Filter />
          </Col> */}
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
