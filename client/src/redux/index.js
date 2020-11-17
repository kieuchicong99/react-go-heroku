import { combineReducers } from 'redux';

import { reducer as authReducer } from './ExampleRedux';

export default combineReducers({
  authReducer,
});
