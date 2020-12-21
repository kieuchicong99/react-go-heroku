import { Col } from 'antd';
import React, { Component } from 'react';

import MenuSelect from './Menu';
import ChangePassword from './component/changePassword';
import ManagePost from './component/managePost';
import Notifycation from './component/notifycation';
import Information from './component/personalInformation';
import Statistic from './component/statictis';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  callbackFunction = (indexScreen) => {
    this.setState({
      index: indexScreen,
    });
  };
  render() {
    let screen = <Information />;
    switch (this.state.index) {
      case 1:
        screen = <Information />;
        break;
      case 2:
        screen = <ManagePost />;
        break;
      case 3:
        screen = <Notifycation />;
        break;
      case 4:
        screen = <Statistic />;
        break;
      case 5:
        screen = <ChangePassword />;
        break;
    }

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Col span={6}>
            <div
              style={{
                backgroundColor: '#055699',
                fontWeight: 'bold',
                color: 'white',
                height: '30px',
                textAlign: 'center',
                paddingTop: '5px',
              }}>
              TRANG CÁ NHÂN
            </div>
            <div>
              <MenuSelect index={this.callbackFunction} />
            </div>
          </Col>
          <Col span={18}>{screen}</Col>
        </div>
      </div>
    );
  }
}
