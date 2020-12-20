import { UploadOutlined } from '@ant-design/icons';
import { Modal, Button, Upload, Form, Input, InputNumber, DatePicker, Space, Col, Row } from 'antd';
import React, { useState } from 'react';
import UploadImage from '../../../components/Upload';
import EditorInformation from './Editor';

import './Modal.scss';
const axios = require('axios').default;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ModalMenu = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMainImage, setIsMainImage]=useState("")
  
  const callImage = (mainImage) => {
    setIsMainImage(mainImage)
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
     console.log(values);
  };
  const returnJson = () => {
    let dataSource = {
      "Address": "",
      "Cost": 0,
      "Description": "",
      "Image": "",
      "Images": [
        ""
      ],
      "Latitude": "21.0286755",
      "Longitude": "105.7558943,13z",
      "Status":true,
      "Tags": [
        "hanoi"
      ],
      "Title": ""
    }

    dataSource.Address = document.getElementById("Motel-address").value;
    dataSource.Cost = Number(document.getElementById("Motel-cost").value);
    dataSource.Title = document.getElementById("Motel-title").value;
    dataSource.Image = isMainImage;
    dataSource.Status=true;
    return dataSource;
  }
  const handleAdd = () => {// api thêm nhà trọ
    axios.post('https://go-react-heroku.herokuapp.com/api/v1/motel', returnJson() )
      .then(function (response) {
        console.log(response);
        props.reGet();
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(handleOk(), 10000); 
  }
  
  const handleEdit = () => {// api sửa nhà trọ
     axios.patch( `/api/v1/motel/${props.code}`, returnJson())
      .then(function (response) {
        console.log(response);
        props.reGet();
      })
    
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(handleOk(), 10000); 
    

  }

  const handleEvent =() => {
     if(props.event=="edit") handleEdit();
     else handleAdd();
  }
  return (
    <div id="post-modal">
      <Button type="primary" onClick={showModal}>
        {props.button}
      </Button>
      <Modal
        title={props.name}
        visible={isModalVisible}
        onOk={handleEvent}
        onCancel={handleCancel} width={900}>
        <div style={{ marginLeft: '50px' }}>
          <div>
            <Row>
              <Col span={3}>
                <span>{'   '}Ảnh: </span>
              </Col>
              <Col span={21}>
                <UploadImage call={callImage}/>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div style={{ marginTop: '-20px' }}>
            <Form {...layout} name="nest-messages" onFinish={onFinish}>
              <Row>
                <Col span={3}>
                  <span>Tên bài đăng:</span>
                </Col>
                <Col span={19}>
                  <Input id="Motel-title" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Địa chỉ:</span>
                </Col>
                <Col span={19}>
                  <Input id="Motel-address" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Diện tích (m2):</span>
                </Col>
                <Col span={19}>
                  <InputNumber min={10} max={1000} id="Motel-area" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Giá thuê (USD):</span>
                </Col>
                <Col span={3}>
                  <InputNumber min={0} max={1000} id="Motel-cost" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Mô tả: </span>
                </Col>
                <Col span={19} id="editor">
                  <Form.Item>
                    <div>
                      <EditorInformation id="Motel-description" />
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <div>
            <Row>
              <Col span={3}>
                <span>Ngày đăng : </span>
              </Col>
              <Col span={21}>
                <Space direction="vertical" size={12}>
                  <DatePicker format={dateFormatList} />
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ModalMenu;
