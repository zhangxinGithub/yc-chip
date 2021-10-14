/*
 * @desc:
 * @author: zhangxin
 * @Date: 2020-06-25 00:38:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-14 15:06:12
 */
import axios from 'axios';
import Utils from '@/common/utils';

const instance = axios.create();

// request拦截器
instance.interceptors.request.use(
  async (config) => {
    console.log('?????',Utils)
    config.headers['access-token'] = 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ4dWppbmd4aWFuZzEiLCJ1bmlxdWVWYWx1ZSI6Inh1amluZ3hpYW5nMSIsImV4cCI6MTY5MDcwMDE3NH0.DyppUeXN5lUWYHnuHYdJj72ulYU3GAgjWgeu41yn0B22J7cARYFzvTDFxEE_gj5SYXJ29Kh90Qg55gKAv3qKvGlIP4nyXhvVOA0ZEEzojYe-kzxXnmovY36oqb3WS30NzwCzXWS-7caXknLWuGhQWCwBqoQqZPsWeLJ_hGz4YIQ';
    return config;
  },
  (error) => {
  },
);
// eslint-disable-next-line import/prefer-default-export
export const ajax = (opts = {}) => new Promise((resolve, reject) => {
  const { url } = opts;
  const { callback } = opts;
  instance({
    url,
    method: opts.method || 'GET',
    headers: {
      'content-type': 'application/json',
      'Cache-Control': 'no-transform',
      ...opts.headers,
    },
    data: opts.data,
    params: opts.params,
  })
    .then((res) => {
      callback && callback(res);
      let data = null;

      if (res === undefined) {
        resolve({
          code: 9999,
          msg: '请求超时',
        });
        return;
      }
      data = res.data.records;
      if (res.data.code === 0) {
        resolve(data);
      } else {
        resolve({ ...data, msg: res.data.msg, code: res.data.code });
      }
    })
    .catch((e) => {
      // console.log(e)
      reject(e);
    });
});
