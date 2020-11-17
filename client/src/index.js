import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/login/Login';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';

class Root extends React.Component {
  render() {
    console.log('store', store);
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Switch>
            <Route extract path="/home" component={App} />
            <Route path="/login" component={Login} />
            {/* <Route path="/*" component={PageNotFound} /> */}
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
