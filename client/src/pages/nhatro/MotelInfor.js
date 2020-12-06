import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MotelInfor.css"
import { Col, Row } from "antd";
import {
    HomeOutlined,
    DollarCircleOutlined,
    AreaChartOutlined,
    PhoneOutlined,
    HeartOutlined
} from '@ant-design/icons';
const displayImage = [
    "https://react-slideshow.herokuapp.com/assets/images/slide_2.jpg",
    "https://react-slideshow.herokuapp.com/assets/images/slide_4.jpg",
    "https://react-slideshow.herokuapp.com/assets/images/slide_5.jpg",
    "https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg"
]
export default class Motel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        return (
            <div style={{ width: "100%" }}>
                <Row>
                    <Col span={16}>
                        <div style={{ marginLeft: "300px", backgroundColor: "#A0A0A0" }}>
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                            >
                                {displayImage.map((item) =>
                                    <div><img class="ParentImage" src={item}></img></div>
                                )}
                            </Slider>
                            <Slider
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                style={{ margin: "0px 30px 5px 30px" }}
                            >
                                 {displayImage.map((item) =>
                                    <div><img class="ChildImage" src={item}></img></div>
                                )}
                            </Slider>
                        </div>
                        <div style={{ margin: "30px 0 0 300px" }}>
                            <div style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY</div>
                            <div style={{ width: "800px", textAlign: "left" }}>Dự án D2 Giảng Võ, Phố Giảng Võ, Phường Giảng Võ, Ba Đình, Hà Nội</div>
                            <div>

                            </div>
                            <div>
                                <Row style={{ height: "80px", borderBottom: "1px solid #E0E0E0", borderTop: "1px solid #E0E0E0", marginTop: "5%", paddingTop: "1%" }}>
                                    <Col span={6} style={{ textAlign: "left" }}>
                                        <p>Mức giá:</p>
                                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Thỏa thuận</p>
                                    </Col>
                                    <Col span={12} style={{ textAlign: "left" }}>
                                        <p>Diện tích:</p>
                                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>575 m2</p>
                                    </Col>
                                    <Col span={6} style={{}}>
                                        <div style={{ marginTop: "15%", fontWeight: "bold", fontSize: "18px" }}>
                                            Lưu tin <HeartOutlined />
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={8} style={{}}>
                        <div style={{ border: "1px solid #C0C0C0", width: '50%', height: "65%", marginLeft: "5%", borderRadius: "5px" }}>
                            <div style={{ width: "80%", height: "10%", backgroundColor: "#009900", margin: "80px auto 0 auto", borderRadius: "2px", color: "white" }}>
                                <PhoneOutlined style={{ margin: "7% 4% 0 20%" }} />
                                 0123456789
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >

        );
    }
}