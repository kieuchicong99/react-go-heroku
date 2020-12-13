import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button, Upload, Form, Input, InputNumber, DatePicker, Space, Col, Row } from 'antd';
import EditorInformation from "./Editor"
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import "./Modal.css"
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = value => {
  return `custom format: ${value.format(dateFormat)}`;
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const ModalMenu = (props) => {
  const fileList = [
    {
      uid: '-1',
      status: 'done',
      url: props.defaultImage,
      thumbUrl: props.defaultImage,
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  }
  function close() {
    props.handleAdds();
    setTimeout(handleOk(), 10000)
  }
  return (
    <>
      <Button type="primary" onClick={showModal} >
        {props.button}
      </Button>
      <Modal
        title={props.name}
        visible={isModalVisible}
        onOk={close}
        onCancel={handleCancel}
        width={900}
      >
        <div style={{marginLeft:"50px"}}>
          <div >
            <Row>
              <Col span={3} ><span>{"   "}Ảnh: </span></Col>
              <Col span={21} >
                <Upload style={{ paddingLeft: "125px" }}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  //defaultFileList={[...fileList]}
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div style={{marginTop:'-20px'}}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} >
              <Row>
                <Col span={3} >
                  <span>Tên bài đăng:</span>
                </Col>
                <Col span={19}>
                  <Input />
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col span={3} >
                  <span>Địa chỉ:</span>
                </Col>
                <Col span={19} >
                  <Input />
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col span={3} >
                  <span>Diện tích (m2):</span>
                </Col>
                <Col span={19} >
                <InputNumber min={10} max={1000} />
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col span={3} >
                  <span>Giá thuê (USD):</span>
                </Col>
                <Col span={3} >
                <InputNumber min={0} max={1000} />

                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col span={3} >
                  <span>Mô tả: </span>
                </Col>
                <Col span={18} >
                  <Form.Item>
                    <div >
                      <EditorInformation ></EditorInformation>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <div >
            <Row>
              <Col span={3} >
                <span>Ngày đăng : </span>
              </Col>
              <Col span={21}>
                <Space direction="vertical" size={12} >
                  <DatePicker format={dateFormatList}  />
                </Space>
              </Col>
            </Row>
          </div>
        </div>

      </Modal>
    </>
  );
}
export default ModalMenu;