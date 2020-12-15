import React, { Component } from 'react';
const infor = {
    name: "Nguyễn Ngọc Lâm",
    postedMotel: 2,
    phone: "012345678",
    email:"1234@gmail.com"
}
export default class Information extends Component {
    render() {
        return (
            <div>
                <img style={{ margin: "20px auto", display: "block" }} src="http://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg" />
                <p style={{ textAlign: "center", fontWeight: "bold", color: "#055699" }}>{infor.name}</p>
                <div style={{ margin: "10px auto", backgroundColor: "#cbd9ca", width: "80%", height: "100px", borderRadius: "2px" }}>
                    <ul style={{ padding: "10px", listStyle: "none" }}>
                        <li>
                            <span >Tin đã đăng : </span>
                            <span style={{ fontWeight: "bold" }}>{infor.postedMotel}</span>
                        </li>
                        <li>
                            <span >Số điện thoại : </span>
                            <span style={{ fontWeight: "bold" }}>{infor.phone}</span>
                        </li>
                        <li>
                            <span >Email : </span>
                            <span style={{ fontWeight: "bold" }}>{infor.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}