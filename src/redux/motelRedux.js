import produce from 'immer';

import { API_URLS } from '../configs/api';
import { apiCall } from '../utilities/api';
import { isCallingApi, isSuccessfulApiCall, isFailedApiCall } from './actionDedicate';
import { PREFIX, typesWithPrefix } from './config';
const _types = typesWithPrefix(PREFIX.MOTEL);
const { API_CALLING, API_CALLED_SUCCESS, API_CALLED_FAILURE, MOTEL } = PREFIX;

const TYPE = {
  GET_LIST_MOTEL: _types('GET_LIST_MOTEL'),
};

export const actions = {
  getListMotel: (params) => async (dispatch) => {
    dispatch(actions.gettingListMotel);
    const api = API_URLS.MOTEL.getAll(params);
    const { response, error } = await apiCall(api);
    if (!error && response.status === 200) {
      const data = response.data.Data;
      console.log('Motel Redux: => getListMotel:', data);
      dispatch(actions.getListMotelSuccess(data));
    } else {
      dispatch(actions.getListMotelFailure());
    }
  },
  gettingListMotel: () => ({
    type: TYPE.GET_LIST_MOTEL,
    meta: { prefix: [MOTEL, API_CALLING] },
  }),
  getListMotelSuccess: (payload) => ({
    type: TYPE.GET_LIST_MOTEL,
    meta: { prefix: [MOTEL, API_CALLED_SUCCESS] },
    payload,
  }),
  getListMotelFailure: () => ({
    type: TYPE.GET_LIST_MOTEL,
    meta: { prefix: [MOTEL, API_CALLED_FAILURE] },
  }),
};

const initialState = {
  data: [],
  isFetching: false,
};

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case TYPE.GET_LIST_MOTEL:
      if (isCallingApi(action)) {
        draft.isFetching = true;
      }
      if (isSuccessfulApiCall(action)) {
        draft.isFetching = false;
        draft.data = action.payload;
      }
      break;
    default:
  }
}, initialState);
