import { combineReducers } from 'redux';

import { reducer as authReducer } from './ExampleRedux';
import { reducer as motelReducer } from './motelRedux';
export default combineReducers({
  authReducer,
  motelReducer,
});
