import axiosMiddleware from 'redux-axios-middleware';
import { getAppClient } from '../utils/client';

const appClient = getAppClient();

const middlewareConfig = {
  interceptors: {
    request: [
      {
        success(store, req) {
          req.headers.authorization =
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTczNTc0NTYyOH0.nooL91B-O412CtOdpSOsorHOJwwFwazgvKFC6OkkYI0';

          return req;
        },
      },
    ],
    response: [
      {
        success(store, res) {
          return Promise.resolve(res);
        },
        error(store, res) {
          return Promise.reject(res);
        },
      },
    ],
  },
};

export default axiosMiddleware(appClient, middlewareConfig);
