export const HEADERS = {
  DEFAULT_HEADER: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  header: () => ({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization: localStorage.getItem('jwt'),
  }),
  jsonHeader: () => ({
    'Content-Type': 'application/json; charset=UTF-8',
    Authorization: localStorage.getItem('jwt'),
  }),
  file_header: () => ({
    'Content-Type': 'multipart/form-data',
    Authorization: localStorage.getItem('jwt'),
  }),
};

export const API_URLS = {
  CUSTOMER: {
    sendPhone: (payload) => ({
      endPoint: 'customer/login/otp',
      method: 'POST',
      headers: HEADERS.DEFAULT_HEADER(),
      payload,
    }),
    login: (payload) => ({
      endPoint: 'customer/login',
      method: 'POST',
      headers: HEADERS.DEFAULT_HEADER(),
      payload,
    }),
  },
};
