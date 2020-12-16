import React, { Component } from 'react';
import { Modal, Button, Upload, Form, Input, InputNumber, DatePicker, Space, Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { API_URLS } from '../configs/api';
import { apiCall } from '../utilities/api';
import "./Upload.css"
var dragula = require('react-dragula');

export default class UploadImage extends Component {
  state = {
    dataImages: [``],
  };

  upload = () => {
    const fileUpload = document.getElementById('file-upload').files[0];
    const api = API_URLS.MEDIA.imageUpload();
    const formData = new FormData();
    formData.append('fileName', fileUpload);
    apiCall({
      ...api,
      payload: formData,
    }).then((res) => {
      if (res.response.status === 200 && res.response.data.success === true) {
        console.log('result:', res.response.data.data);
        const uri = `http://149.28.157.34:8081/api/v1/file/static/${res.response.data.data.id}`;
        const { dataImages } = this.state;
        dataImages.push(uri);
        this.setState({ dataImages });
      }
    });
  };

  componentDidMount = () => {
    dragula([document.getElementById("left"), document.getElementById("main"), document.getElementById("deputy")])

  }
  render() {
    //dragula([document.getElementById("left"), document.getElementById("main"), document.getElementById("deputy")])
      
    return (
      <div>
        <div id="left">
          {this.state.dataImages?.map((item) => (
            <img src={item} width={100} height={100} />
          ))}
        </div>
        <form name="uploadForm" style={{display:"flex", marginTop:"10px"}}>
          <div>
            <label class="custom-file-upload">
              Choose file
              <input id="file-upload" type="file" name="myFiles" multiple={false} />
            </label>
          </div>
          <div style={{marginLeft:"10px"}}>
            <Button icon={<UploadOutlined />} onClick={() => {
              this.upload();
            }}>Upload</Button>
          </div>
        </form>
        <div style={{display:"flex", marginTop:"10px"}}>
          <div>
            <div id="main" class="image-frame"></div>
            <p class="title-frame">Ảnh chính</p>
          </div>
          <div>
            <div id="deputy" class="image-frame"></div>
            <p class="title-frame">Ảnh bổ sung</p>
          </div>
        </div>
      </div>
    );
  }
}
