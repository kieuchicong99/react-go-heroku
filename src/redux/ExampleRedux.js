import produce from 'immer';

import { PREFIX, typesWithPrefix } from './config';

const _types = typesWithPrefix(PREFIX.APP);
const types = {
  SET_PAGE: _types('SET_PAGE'),
};

export const actions = {
  setPage: (payload) => ({
    type: types.SET_PAGE,
    meta: { prefix: [PREFIX.APP, PREFIX.API_CALLING] },
    payload,
  }),
};

const initialState = {
  currentPage: [''],
  title: '',
};

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SET_PAGE:
      const { pageName, title } = action.payload;
      draft.currentPage = [pageName];
      draft.title = title;
      break;
    default:
  }
}, initialState);
