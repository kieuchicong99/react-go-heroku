import React, { Component } from 'react';

import { API_URLS } from '../configs/api';
import { apiCall } from '../utilities/api';

export default class UploadImage extends Component {
  state = {
    dataImages: [`http://149.28.157.34:8081/api/v1/file/static/5fd735e6dea32ad58a5b7856`],
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

  render() {
    return (
      <div>
        <form name="uploadForm">
          <div>
            <input id="file-upload" type="file" name="myFiles" multiple={false} />
          </div>
          <div>
            <input
              value="Send file"
              onClick={() => {
                this.upload();
              }}
            />
          </div>
        </form>
        {this.state.dataImages?.map((item) => (
          <img src={item} width={100} height={100} />
        ))}
      </div>
    );
  }
}
