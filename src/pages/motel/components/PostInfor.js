/* eslint-disable max-len */
import { Table, Button, Popconfirm, Form, Tooltip } from 'antd';
import React, { useContext, useState, useEffect, useRef } from 'react';

import './PostInfor.css';
import ModalMenu from './Modal';
import SwitchExample from './Switch';

const EditableContext = React.createContext();

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
    this.columns = [
      {
        title: 'Ảnh',
        width: '10%',
        render: () => (
          <div style={{}}>
            <Tooltip title="Xem chi tiết" placement="left">
              <img
                style={{ width: '100px', height: '80px', cursor: 'pointer' }}
                onClick={() => {
                  window.location = '/home/nha-tro-detail';
                }}
                src="https://react-slideshow.herokuapp.com/assets/images/slide_2.jpg"
              />
            </Tooltip>
          </div>
        ),
      },
      {
        title: 'Tên bài đăng',
        width: '35%',
        dataIndex: 'title',
      },
      {
        width: '15%',
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
      {
        width: '1%',
        title: 'Giá tiền',
        dataIndex: 'price',
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
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
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
          ) : null,
      },
      {
        title: 'Sửa',
        width: '5%',
        dataIndex: 'operation',
        render: () => (
          <ModalMenu
            name="Sửa bài đăng"
            button="Sửa"
            /*  defaultName="CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY"
          defaultAddress="Cầu Giấy, Hà Nội "
          defaultPrice={50}
          defaultArea={50}
          defaultDescription="CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY"
          defaultDate="12/12/2020"
          defaultImage="https://vcdn-thethao.vnecdn.net/2020/12/07/wij-1607359428-9512-1607359488.jpg" */
            handleAdds={() => {
              alert('button chưa được xử lí sự kiện');
            }}
          />
        ),
      },
    ];
    this.state = {
      dataSource: [
        // mảng chứa thông tin của các nhà trọ
        {
          key: '0',
          title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
          address: 'London, Park Lane no. 0',
          price: '20$',
          date: '12 /12 /2020',
        },
        {
          key: '1',
          title: 'CHO THUÊ PHÒNG ĐẸP VÀ RẺ NHẤT LOTTE Q7, ĐÃ NGHIỆM THU PCCC, GIÁ TỪ 3 TR, TÒA NHÀ 8 TẦNG MỚI XÂY',
          address: 'London, Park Lane no. 0',
          price: '20$',
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    let { dataSource } = this.state;
    dataSource = [...dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      //thông tin của nhà trọ khi được thêm vào
      key: count,
      title: `Edward King `,
      address: `London, Park Lane no. ${count}`,
      price: '20$',
      date: '21/12/2000',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const { dataSource } = this.state;
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
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
      <div>
        <ModalMenu handleAdds={() => this.handleAdd()} name="Thêm bài đăng" button="Add a motel" />
        <Table
          style={{ marginTop: '10px' }}
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
