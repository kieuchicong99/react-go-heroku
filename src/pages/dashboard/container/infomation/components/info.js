import { InstagramOutlined } from '@ant-design/icons';
import { Button, Tabs, Spin } from 'antd';
import React, { Component } from 'react';

import ChangeInfo from './changeInFo';
import ChangePassword from './changePassword';
import { API_URLS } from "../../../../../configs/api"
import { apiCall } from "../../../../../utilities/api";

import './info.scss';
const { TabPane } = Tabs;
export default class Info extends Component {
  state = {
    fileUploadState: "",
    show: false,
    infor : {
      FullName: <Spin size="small" />,
      Phone: <Spin size="small" />,
      Email: <Spin size="small" />,
      CMND: <Spin size="small" />,
      Address: <Spin size="small"  />,
      Avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
    }
  };

  

  updateInfo = () =>{
    const api = API_URLS.USER.changeinfo();
    const formData = new FormData();
    // formData.append('fileName', fileUpload);
    apiCall({
      ...api,
      payload: this.state.infor,
    }).then((res) => {
      console.log("changed")
    });
  }

  fileUploadButton = () => {
    document.getElementById('file-avt').click();
    document.getElementById('file-avt').onchange = () => {
      this.setState({
        fileUploadState: document.getElementById('file-avt').value
      });
      const fileUpload = document.getElementById('file-avt').files[0];
      const api = API_URLS.MEDIA.imageUpload();
      const formData = new FormData();
      formData.append('fileName', fileUpload);
      apiCall({
        ...api,
        payload: formData,
      }).then((res) => {
        if (res.response.status === 200 && res.response.data.success === true) {
          // console.log('result:', res.response.data.data);
          const uri = `http://149.28.157.34:8081/api/v1/file/static/${res.response.data.data.id}`;
          let temp = this.state.infor
          this.setState({ infor:{...temp, Avatar:uri} })
          console.log(this.state)
          this.updateInfo()
        }
      });

    }
  }
  getinfo = () => {
    const api = API_URLS.USER.getuserinfo();
    apiCall({
      ...api,
    }).then((res) => {
      if (res.response.status === 200) {
        console.log(res.response.data.Data)
        this.setState({infor:res.response.data.Data})
      }
    });
  }
  componentDidMount = () => {
    this.getinfo()
    console.log("state", this.state)
  }
  render() {
    return (
      <div style={{ background: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '190px' }}>
          <div
            className="profile_image"
            onClick={() => {
              const { show } = this.state;
              this.setState({
                show: !show,
              });
            }}
            onMouseDown={() => {
              document.getElementsByClassName('profile_image')[0].style.width = '175px';
              document.getElementsByClassName('profile_image')[0].style.height = '175px';
            }}
            onMouseUp={() => {
              document.getElementsByClassName('profile_image')[0].style.width = '180px';
              document.getElementsByClassName('profile_image')[0].style.height = '180px';
            }}>
            <img
              style={{ width: '100%', height: '100%', borderRadius: '50%', display: 'block' }}
              src={this.state.infor.Avatar}
            />
          </div>
        </div>

        {this.state.show ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              className="upload_box"
              style={{
                position: 'absolute',
                marginTop: '150px',
                background: 'white',
                width: '250px',
                height: '100px',
                padding: '20px',
                borderRadius: '6px',
              }}>
              <div>
                <input id="file-avt" type="file" name="myFiles" multiple={false} />
                <Button style={{ width: '100%' }} onClick={this.fileUploadButton} icon={<InstagramOutlined />}>
                  Update Profile image{' '}
                </Button>
              </div>

            </div>
          </div>
        ) : (
            <></>
          )}

        <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#055699' }}>{this.state.infor.FullName}</p>
        <div style={{ padding: '20px' }}>
          <div
            onClick={() => {
              this.setState({
                show: false,
              });
            }}
            style={{
              margin: '10px auto',
              backgroundColor: 'rgb(246, 248, 250)',
              width: '100%',
              height: '130px',
              borderRadius: '2px',
            }}>
            <div style={{ padding: '15px 30px 15px 30px' }}>
              <div>
                <div>
                  <span>Số điện thoại : </span>
                  <span style={{ fontWeight: 'bold' }}>{this.state.infor.Phone}</span>
                </div>
                <div>
                  <span>Email : </span>
                  <span style={{ fontWeight: 'bold' }}>{this.state.infor.Email}</span>
                </div>
                <div>
                  <span>CMND/CCCD số : </span>
                  <span style={{ fontWeight: 'bold' }}>{this.state.infor.CMND}</span>
                </div>
                <div>
                  <span>Địa chỉ thường trú: </span>
                  <span style={{ fontWeight: 'bold' }}>{this.state.infor.Address}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Thay đổi thông tin cá nhân" key="1">
                <ChangeInfo Avatar={this.state.infor.Avatar}></ChangeInfo>
              </TabPane>
              <TabPane tab="Đổi mật khẩu" key="2">
                <ChangePassword />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
