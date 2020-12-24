/* eslint-disable no-console */
import { Modal, Button, Form, Input, InputNumber, DatePicker, Space, Col, Row, Checkbox, Switch } from 'antd';
import React, { useState } from 'react';
import UploadImage from '../../../components/Upload';
import EditorInformation from './Editor';
import { API_URLS } from '../../../configs/api';
import { apiCall } from '../../../utilities/api';
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
  const [isMainImage, setIsMainImage] = useState('');
  
  const callImage = (mainImage) => {
    setIsMainImage(mainImage);
  };
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
  const patchAvailalePost = async () => {
    const api = API_URLS.MOTEL.patchAvailalePost(props.code, { "Available": false });
    const { response } = await apiCall({ ...api });
    if (response.status === 200 || response.status === 201) {

    }
    return { response };
  };
  const returnJson = () => {
    const dataSource = {
      Address: '',
      Cost: 0,
      Description: '',
      Image: '',
      Images: [''],
      Latitude: '21.0286755',
      Longitude: '105.7558943,13z',
      Status: true,
      Tags: ['hanoi'],
      Title: '',
    };

    dataSource.Address = document.getElementById('Motel-address').value;
    dataSource.Cost = Number(document.getElementById('Motel-cost').value);
    dataSource.Title = document.getElementById('Motel-title').value;
    dataSource.Image = isMainImage;
    dataSource.Status = true;
    return dataSource;
  };
  const handleAdd = () => {
    axios
      .post('https://go-react-heroku.herokuapp.com/api/v1/motel', returnJson())
      .then(function (response) {
        console.log(response);
        props.reGet();
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(handleOk(), 10000);
  };

  const handleEdit = () => {
    axios
      .patch(`/api/v1/motel/${props.code}`, returnJson())
      .then(function (response) {
        console.log(response);
        props.reGet();
      })

      .catch(function (error) {
        console.log(error);
      });
    setTimeout(handleOk(), 10000);
  };
  const handleCallback=() => {
    props.modal(patchAvailalePost);
  }
 
  const handleEvent = () => {
    if (props.event === 'edit') handleEdit();
    else handleAdd();
  };
  return (
    <div id="post-modal">
      <Button type="primary" onClick={() =>{
        showModal();
        handleCallback();
      }}>
        {props.button}
      </Button>
      <Modal title={props.name} visible={isModalVisible} onOk={handleEvent} onCancel={handleCancel} width={900}>
        <div style={{ marginLeft: '50px' }}>
          <div>
            <Row>
              <Col span={3}>
                <span>{'   '}Ảnh: </span>
              </Col>
              <Col span={21}>
                <UploadImage call={callImage} />
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
                  <span>Phòng tắm:</span>
                </Col>
                <Col span={19}>
                  <Checkbox>Có nóng lạnh</Checkbox>
                  <Checkbox>KHEP_KIN</Checkbox>
                  <Checkbox>CHUNG</Checkbox>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Nhà bếp:</span>
                </Col>
                <Col span={19}>
                  <Checkbox>Khu bếp chung</Checkbox>
                  <Checkbox>Khu bếp riêng</Checkbox>
                  <Checkbox>Không nấu ăn</Checkbox>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Có điều hòa:</span>
                </Col>
                <Col span={19}>
                  <Checkbox></Checkbox>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Có ban công:</span>
                </Col>
                <Col span={19}>
                  <Checkbox></Checkbox>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Giá điện:</span>
                </Col>
                <Col span={19}>
                  <InputNumber min={0} max={1000} id="Motel-area" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col span={3}>
                  <span>Giá nước:</span>
                </Col>
                <Col span={19}>
                  <InputNumber min={0} max={1000} id="Motel-area" />
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
                  <span>Có người thuê</span>
                </Col>
                <Col span={3}>
                  <Switch defaultChecked onChange={patchAvailalePost} />
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
