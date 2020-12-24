/* eslint-disable no-console */
/* eslint-disable max-len */
import { Table, Button, Popconfirm, Form, Tooltip, notification, Switch } from 'antd';
import React, { useContext, useState, useEffect, useRef } from 'react';

import './PostInfor.css';
import { API_URLS } from '../../../../configs/api';
import { apiCall } from '../../../../utilities/api';
import ModalMenu from '../../../motel/components/Modal';

const EditableContext = React.createContext();
const meta = {
  onSuccess: () => {
    notification.open({
      message: 'Success',
      description: 'Success',
      type: 'success',
    });
  },
  onError: (errorCode) => {
    notification.open({
      message: 'Error',
      description: 'Error',
      type: 'error',
    });
  },
};
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
      deletedMotel: {},
      isModalVisible: false,
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
        render: () => <Switch />,
      },
      {
        title: 'Xóa',
        width: '5%',
        dataIndex: 'operation',
        render: (text, record) => (
          <Popconfirm title="Sure to delete?">
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
        render: (text, record) => {
          if (record.Status === true) {
            global.value = record.MotelCode;
            return (
              <ModalMenu
                name="Sửa bài đăng"
                button="Sửa"
                code={record.MotelCode}
                event="edit"
                function={(data) => {
                  this.setState({
                    modal: data,
                  });
                }}
                dataSource={this.state.dataSource}
                reGet={() => motel.componentDidMount()}
              />
            );
          }
        },
      },
    ];
  }

  getPost = async (meta) => {
    const api = API_URLS.MOTEL.getPostByOwner();
    const { response, error } = await apiCall({ ...api });
    if (!error && (response.status === 200 || response.status === 201)) {
      console.log('res:', response.data.Data);
      this.setState({
        dataSource: response.data.Data,
      });
      if (meta && meta.onSuccess) {
        meta.onSuccess();
      }
    } else if (meta && meta.onError) {
      meta.onError(error);
    }
    return { response, error };
  };
  componentDidMount() {
    this.getPost(meta);
  }
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
