import React, { Component } from 'react'
import Title from "./title"
import PostInfor from '../../motel/components/PostInfor.js'
export default class ManagePost extends Component {
    render() {
        return (
            <div>
                <Title name="QUẢN LÍ BÀI ĐĂNG" />
                <div style={{ marginTop: "10px" }}>
                    <PostInfor />
                </div>

            </div>
        )
    }
}