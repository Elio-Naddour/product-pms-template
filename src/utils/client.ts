import axios from 'axios';

export const getAppClient = () => {
  const options = {
    baseURL: process.env.REACT_APP_BASE_API_URL ?? '',
    timeout: 60000,
    headers: {},
  };

  return axios.create(options);
};

export const handleError = (e, t) => {
  try {
    if (e.response) {
      if (e.response.data.data && e.response.data.data.message) {
        return e.response.data.data.message;
      }
      return e.response.data.error
        ? {
            errorMsg: e.response.data.data.message.message,
            errorStatus: e.response.data.status,
          }
        : 'something went wrong';
    }
    return e.response.data.error
      ? {
          errorMsg: e.response.data.data.message.message,
          errorStatus: e.response.data.status,
        }
      : 'something went wrong';
  } catch {
    return 'something went wrong';
  }
};
