export const HEADERS = {
  DEFAULT_HEADER: () => ({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  }),
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
  },
  MEDIA: {
    imageUpload: () => ({
      endPoint: `/api/v1/file/files`,
      method: 'POST',
      headers: HEADERS.file_header(),
    }),
  },
};
