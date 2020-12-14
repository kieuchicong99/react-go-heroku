/* eslint-disable max-len */
import { Col, Row } from 'antd';
import React, { Component } from 'react';

import Filter from './components/Filter';
import MotelBrief from './components/MotelBrief';

import './motel.css';

const data = [
  {
    title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',
    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567',
  },
  {
    title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',

    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567',
  },
  {
    title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',

    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567',
  },
  {
    title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',

    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567',
  },
  {
    title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
    cost: '3',
    area: '25 m²',
    address: 'Cầu Giấy,Hà Nội',
    description:
      'Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.',
    phone: '01234567',
  },
];
export default class Motel extends Component {
  log = (route) => {
    // eslint-disable-next-line no-console
    console.log('Motel.props', this.props, route);
    this.props.history.push(route);
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={18} style={{}}>
            {data.map((item) => (
              <MotelBrief itemdata={item} log={this.log} />
            ))}
          </Col>
          <Col span={6}>
            <Filter />
          </Col>
        </Row>
      </div>
    );
  }
}
