import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import MenuSelect from './Menu';
import ChangePassword from './component/changePassword';
import Information from './component/information';
import ManagePost from './component/managePost';
import Notifycation from './component/notifycation';
import Statistic from './component/statictis';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div>
            <MenuSelect />
          </div>
          <div style={{ width: '100%', background: '#f0f2f5' }}>
            <Route path="/dashboard/profile" component={Information} />
            <Route path="/dashboard/motel-post" component={ManagePost} />
            <Route path="/dashboard/user" component={ChangePassword} />

            <Route path="/dashboard/notification" component={Notifycation} />
            <Route path="/dashboard/static" component={Statistic} />
            <Redirect to="/dashboard/profile" />
          </div>
        </div>
      </div>
    );
  }
}
