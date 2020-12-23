import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import MenuSelect from './Menu';
import Information from './container/infomation/information';
import ManagePost from './container/mangePost/managePost';
import Notification from './container/notification/notification';
import Statistic from './container/statistic/statistic';
import ManageUser from './container/user/manageUser';

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
            <Route path="/dashboard/user" component={ManageUser} />

            <Route path="/dashboard/notification" component={Notification} />
            <Route path="/dashboard/statistic" component={Statistic} />
            <Redirect to="/dashboard/user" />
          </div>
        </div>
      </div>
    );
  }
}
