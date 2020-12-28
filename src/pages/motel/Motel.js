/* eslint-disable max-len */
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Col, Row, Table, List, PageHeader, Select, Menu, Dropdown, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as motelActions } from '../../redux/motelRedux';
import Filter from './components/Filter';
import MotelBrief from './components/MotelBrief';

import './motel.css';
import 'antd/dist/antd.css';

const { Option, OptGroup } = Select;

class Motel extends Component {
  state = {
    total: 0,
    current: 1,
    pageSize: 10,
    flag: false,
    flag1: false,
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
  handleChange = () => {};
  menu = () => (
    <Menu>
      <Menu.Item>
        Điều Hòa
        <Select style={{ minWidth: '100px' }}>
          <Option value="true"> Có</Option>
          <Option value="false"> không</Option>
        </Select>
      </Menu.Item>
      <Menu.Item>
        Ban công
        <Select style={{ minWidth: '100px' }}>
          <Option value="true"> Có</Option>
          <Option value="false"> không</Option>
        </Select>
      </Menu.Item>
      <Menu.Item>
        Nóng lạnh
        <Select style={{ minWidth: '100px' }}>
          <Option value="true"> Có</Option>
          <Option value="false"> không</Option>
        </Select>
      </Menu.Item>
      <Menu.Item>
        Bếp
        <Select style={{ minWidth: '100px' }}>
          <Option value="true"> Có</Option>
          <Option value="false"> không</Option>
        </Select>
      </Menu.Item>
    </Menu>
  );
  showDropDown = () => {
    const { flag } = this.state;
    this.setState({ flag: !flag });
  };
  chooseCost = (value) => {
    switch (value) {
      case '1-3':
        this.setState({ from_cost: 1, to_cost: 3 });
        break;
      case '3-5':
        this.setState({ from_cost: 3, to_cost: 5 });
        break;
      case '5-7':
        this.setState({ from_cost: 5, to_cost: 7 });
        break;
      case '7-10':
        this.setState({ from_cost: 7, to_cost: 10 });
        break;
      case '10-':
        this.setState({ from_cost: 10, to_cost: 100 });
        break;
    }
    this.setState({});
  };
  chooseArea = (value) => {
    this.setState({ addres: value });
  };
  chooseCondition = (value) => {
    this.setState({ addres: value });
  };
  render() {
    const data = this.props.listMotels;
    const pagination = {
      current: 1,
      pageSize: 5,
      total: data?.length,
    };
    const { flag } = this.state;
    return (
      <div>
        <div>
          <Row style={{}}>
            <Select
              handleChange={this.chooseArea}
              showSearch
              style={{ width: 200 }}
              placeholder="Tìm theo tỉnh thành"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }>
              <Option value="Hà Nội">Hà Nội</Option>
              <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
              <Option value="Đà Nẵng">Đà Nẵng</Option>
              <Option value="Huế">Huế</Option>
              <Option value="Thái Bình">Thái Bình</Option>
              <Option value="Quảng Ninh">Quảng Ninh</Option>
              <Option value="Bắc Giang">Bắc Giang</Option>
              <Option value="Ninh Bình">Ninh Bình</Option>
              <Option value="Thái Nguyên">Thái Nguyên</Option>
              <Option value="Thanh Hóa">Thanh Hóa</Option>
              <Option value="Nghệ An">Nghệ An</Option>
              <Option value="Hà Tĩnh">Hà Tĩnh</Option>
            </Select>
            <div style={{ padding: '10px', minWidth: '200px', marginLeft: '15px' }}>
              <div
                style={{ textTransform: 'uppercase', fontSize: '16px' }}
                onClick={() => {
                  console.log('hi');
                  this.showDropDown();
                }}>
                Cơ sở vật chất <DownOutlined />
              </div>
              <Dropdown overlay={this.menu} visible={this.state.flag}>
                <div />
              </Dropdown>
            </div>
            <div style={{ padding: '10px', minWidth: '100px', display: 'flex' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '16px' }}>Giá tiền </div>
              <Select style={{ minWidth: '100px', marginTop: '-10px', marginLeft: '15px' }} onChange={this.chooseCost}>
                <Option value="1-3">Từ 1 đến 3</Option>
                <Option value="3-5">Từ 3 đến 5</Option>
                <Option value="5-7">Từ 5 đến 7</Option>
                <Option value="7-10">Từ 7 đến 10</Option>
                <Option value="10-">Trên 10</Option>
              </Select>
            </div>
            <div>
              <Button
                icon={
                  <SearchOutlined
                    style={{ fontSize: '20px' }}
                    onClick={() => {
                      const {
                        from_cost,
                        to_cost,
                        addres,
                        has_air_condition,
                        has_water_header,
                        has_balcony,
                      } = this.state;
                      this.props.getListMotel({
                        from_cost,
                        to_cost,
                        addres,
                        has_air_condition,
                        has_water_header,
                        has_balcony,
                      });
                    }}
                  />
                }
              />
            </div>
          </Row>
        </div>
        <PageHeader style={{ textTransform: 'uppercase' }} title="Danh sách phòng trọ" />

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
