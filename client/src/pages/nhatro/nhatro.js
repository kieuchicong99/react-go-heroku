import React, { Component } from 'react';
import Item from './components/Item';
import FormPost from './components/FormPost';
import nhatro from './nhatro.css'
import { Checkbox, Col, Row } from 'antd';
const data = [
  {
    title:
      'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',
    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567'
  },
  {
    title:
      'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',

    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567'

  },
  {
    title:
      'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',

    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567'

  },
  {
    title:
      'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',

    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567'

  },
  {
    title:
      'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',
    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567'

  },
];
export default class componentName extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={18} style={{}}>
            {data.map((item) => (
              <Item itemdata={item}></Item>
            ))}
          </Col>
          <Col span={6} >
            <div style={{ marginLeft: "6%" }}>
              <div style={{ width: "70%", height: "220px", border: "1px solid red", borderRadius: "5px" }}>
                <p class="FilterObject">Lọc theo khoảng giá</p>
                <div class="FilterList">
                  <div class="FilterItems"><Checkbox>1 - 3 triệu</Checkbox></div>
                  <div class="FilterItems"><Checkbox>3 - 5 triệu</Checkbox></div>
                  <div class="FilterItems"><Checkbox>5 - 10 triệu</Checkbox></div>
                  <div class="FilterItems"><Checkbox>10 - 15 triệu</Checkbox></div>
                  <div class="FilterItems"><Checkbox>15 - 20 triệu</Checkbox></div>
                </div>
              </div>
              <div style={{ width: "70%", height: "220px", border: "1px solid red", borderRadius: "5px", marginTop: "6%" }}>
                <p class="FilterObject">Lọc theo diện tích</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "15%" }}>
                  <div class="FilterItems"><Checkbox>10 - 20 m2</Checkbox></div>
                  <div class="FilterItems"><Checkbox>20 - 30 m2</Checkbox></div>
                  <div class="FilterItems"><Checkbox>30 - 50 m2</Checkbox></div>
                  <div class="FilterItems"><Checkbox>50 - 70 m2</Checkbox></div>
                  <div class="FilterItems"><Checkbox>70 - 100 m2</Checkbox></div>
                </div>
              </div>
              <div style={{ width: "70%", height: "460px", border: "1px solid red", borderRadius: "5px", marginTop: "6%" }}>
                <p class="FilterObject">Lọc theo địa điểm</p>
                <div class="FilterList">
                  <div class="FilterItems"><Checkbox>Hà Nội</Checkbox></div>
                  <div class="FilterItems"><Checkbox>TP Hồ Chí Minh</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Đà Lạt</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Hải Phòng</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Cần Thơ</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Đà Nẵng</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Nha Trang</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Phú Yên</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Sa Pa</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Bình Dương</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Đồng Nai</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Huế</Checkbox></div>
                  <div class="FilterItems"><Checkbox>Vũng Tàu</Checkbox></div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
