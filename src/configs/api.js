export const HEADERS = {
  DEFAULT_HEADER: () => ({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  }),
  header: () => ({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization: localStorage.getItem('motelFinderToken'),
  }),
  jsonHeader: () => ({
    'Content-Type': 'application/json; charset=UTF-8',
    Authorization: localStorage.getItem('motelFinderToken'),
  }),
  file_header: () => ({
    'Content-Type': 'multipart/form-data',
  }),
};

export const API_URLS = {
  USER: {
    signup: (payload) => ({
      endPoint: 'api/v1/user',
      method: 'POST',
      headers: HEADERS.DEFAULT_HEADER(),
      payload,
    }),
    login: (payload) => ({
      endPoint: 'api/v1/user/login',
      method: 'POST',
      headers: HEADERS.DEFAULT_HEADER(),
      payload,
    }),
    changepassword: (payload) => ({
      endPoint: '/api/v1/user/change-pass',
      method: 'PATCH',
      headers: HEADERS.header(),
      payload,
    }),
    changeinfo: (payload) => ({
      endPoint: '/api/v1/user/info',
      method: 'PATCH',
      headers: HEADERS.header(),
      payload,
    }),
    getuserinfo: () => ({
      endPoint: '/api/v1/user/detail/by-token',
      method: 'GET',
      headers: HEADERS.header(),
    }),
  },
  MEDIA: {
    imageUpload: () => ({
      endPoint: `/api/v1/file/files`,
      method: 'POST',
      headers: HEADERS.file_header(),
    }),
  },
  MOTEL: {
    getAll: () => {},
  },
};
