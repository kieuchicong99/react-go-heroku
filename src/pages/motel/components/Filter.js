import { Checkbox } from 'antd';
import React, { Component } from 'react';
import './Filter.css';
export default class Filter extends Component {
  render() {
    return (
      <div style={{ marginLeft: '6%' }}>
        <div
          style={{
            width: '70%',
            height: '220px',
            border: '1px solid #C0C0C0',
            borderRadius: '5px',
          }}>
          <p className="FilterObject">Lọc theo khoảng giá</p>
          <div className="FilterList">
            <div className="FilterItems">
              <Checkbox>1 - 3 triệu</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>3 - 5 triệu</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>5 - 10 triệu</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>10 - 15 triệu</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>15 - 20 triệu</Checkbox>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '70%',
            height: '220px',
            border: '1px solid #C0C0C0',
            borderRadius: '5px',
            marginTop: '6%',
          }}>
          <p className="FilterObject">Lọc theo diện tích</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '15%',
            }}>
            <div className="FilterItems">
              <Checkbox>10 - 20 m2</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>20 - 30 m2</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>30 - 50 m2</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>50 - 70 m2</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>70 - 100 m2</Checkbox>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '70%',
            height: '460px',
            border: '1px solid #C0C0C0',
            borderRadius: '5px',
            marginTop: '6%',
          }}>
          <p className="FilterObject">Lọc theo địa điểm</p>
          <div className="FilterList">
            <div className="FilterItems">
              <Checkbox>Hà Nội</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>TP Hồ Chí Minh</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Đà Lạt</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Hải Phòng</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Cần Thơ</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Đà Nẵng</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Nha Trang</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Phú Yên</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Sa Pa</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Bình Dương</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Đồng Nai</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Huế</Checkbox>
            </div>
            <div className="FilterItems">
              <Checkbox>Vũng Tàu</Checkbox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
