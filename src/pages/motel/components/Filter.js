import React, { Component } from 'react';
import { Checkbox } from 'antd';
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
          <p class="FilterObject">Lọc theo khoảng giá</p>
          <div class="FilterList">
            <div class="FilterItems">
              <Checkbox>1 - 3 triệu</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>3 - 5 triệu</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>5 - 10 triệu</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>10 - 15 triệu</Checkbox>
            </div>
            <div class="FilterItems">
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
          <p class="FilterObject">Lọc theo diện tích</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '15%',
            }}>
            <div class="FilterItems">
              <Checkbox>10 - 20 m2</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>20 - 30 m2</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>30 - 50 m2</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>50 - 70 m2</Checkbox>
            </div>
            <div class="FilterItems">
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
          <p class="FilterObject">Lọc theo địa điểm</p>
          <div class="FilterList">
            <div class="FilterItems">
              <Checkbox>Hà Nội</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>TP Hồ Chí Minh</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Đà Lạt</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Hải Phòng</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Cần Thơ</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Đà Nẵng</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Nha Trang</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Phú Yên</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Sa Pa</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Bình Dương</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Đồng Nai</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Huế</Checkbox>
            </div>
            <div class="FilterItems">
              <Checkbox>Vũng Tàu</Checkbox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
