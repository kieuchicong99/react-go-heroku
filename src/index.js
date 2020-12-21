import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';

class Root extends React.Component {
  render() {
    // console.log('store', store);
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Switch>
            <Route extract path="/home" component={App} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* <Route path="/*" component={PageNotFound} /> */}
            <Redirect to="/home">
              <App />
            </Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
