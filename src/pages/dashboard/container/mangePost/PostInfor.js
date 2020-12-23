/* eslint-disable no-console */
/* eslint-disable max-len */
import { Table, Button, Popconfirm, Form, Tooltip } from 'antd';
import React, { useContext, useState, useEffect, useRef } from 'react';

import './PostInfor.css';
import ModalMenu from '../../../motel/components/Modal';
import SwitchExample from '../../../motel/components/Switch';

const EditableContext = React.createContext();
const axios = require('axios').default;

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
let motel;
const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 10,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      />
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class PostInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      motelCode: '',
      deletedMotel: {},
    };

    motel = this;
    this.columns = [
      {
        title: 'Ảnh',
        width: '10%',
        dataIndex: 'Image',
        render: (text, record) => (
          <div>
            <Tooltip title="Xem chi tiết" placement="left">
              <img
                style={{ width: '100px', height: '80px', cursor: 'pointer' }}
                onClick={() => {
                  window.location = '/home/nha-tro-detail';
                }}
                src={record.Image}
              />
            </Tooltip>
          </div>
        ),
      },
      {
        title: 'Tên bài đăng',
        width: '35%',
        dataIndex: 'Title',
      },
      {
        width: '15%',
        title: 'Địa chỉ',
        dataIndex: 'Address',
      },
      {
        width: '1%',
        title: 'Giá tiền',
        dataIndex: 'Cost',
      },
      {
        width: '10%',
        title: 'Ngày đăng ',
        dataIndex: 'date',
      },
      {
        width: '5%',
        title: 'Có người thuê',
        render: () => <SwitchExample />,
      },
      {
        title: 'Xóa',
        width: '5%',
        dataIndex: 'operation',
        render: (text, record) => (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              global.value = record.MotelCode;
              this.handleEdit();
            }}>
            <Button
              style={{
                background: '#1890ff',
                borderColor: '#1890ff',
                textShadow: '-1px 0 rgba(0, 0, 0, 0.12)',
                color: 'white',
              }}>
              Delete
            </Button>
          </Popconfirm>
        ),
      },
      {
        title: 'Sửa',
        width: '5%',
        dataIndex: 'operation',
        render: (text, record) => (
          <ModalMenu
            name="Sửa bài đăng"
            button="Sửa"
            event="edit"
            code={record.MotelCode}
            dataSource={this.state.dataSource}
            reGet={() => motel.componentDidMount()}
          />
        ),
      },
    ];
  }
  returnJson = () => {
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
    dataSource.Status = false;
    return dataSource;
  };
  componentDidMount = () => {
    //lấy danh sách nhà trọ
    axios
      .get('https://go-react-heroku.herokuapp.com/api/v1/motel', {})
      .then(function (response) {
        console.log(response);
        motel.setState({
          dataSource: Object.values(response.data.Data),
        });
        motel.setState({ dataSource: motel.state.dataSource.filter((item) => item.Status === true) });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  handleEdit = () => {
    // sửa nhà trọ theo id
    axios
      .patch(`/api/v1/motel/${global.value}`, this.returnJson())
      .then(function (response) {
        console.log(response);
        motel.componentDidMount();
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div style={{ background: 'white' }}>
        <ModalMenu reGet={() => motel.componentDidMount()} name="Thêm bài đăng" button="Add a motel" event="insert" />
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default PostInfor;
