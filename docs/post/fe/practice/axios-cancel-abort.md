# axios封装重复请求abort

## 实现原理

1. xxx

```js
import qs from 'qs';

export default class CancelRequest {
  constructor(map) {
    this.cancelReqMap = this.isMap(map) ? map : new Map();
  }

  // 判断是否是map数据格式
  isMap(data) {
    if (Object.prototype.toString.call(data) === '[object Map]') return true;
  }

  // 根据请求配置信息`config`进行拼接，生成由`url、method、params、data`组成的字符串
  generateCancelReqKey(config) {
    const { url, method, params, data } = config;
    return [url, method, qs.stringify(params), qs.stringify(data)].join('&');
  }

  // 添加请求信息和对应的取消方法到cancelReqMap属性
  addCancelReqKey(config, CancelToken) {
    const cancelReqKey = this.generateCancelReqKey(config);
    config.cancelToken =
      config.cancelToken ||
      new CancelToken((cancel) => {
        if (!this.cancelReqMap.has(cancelReqKey)) {
          this.cancelReqMap.set(cancelReqKey, cancel);
        }
      });
  }

  // 根据当前的请求信息调用对应的取消方法
  cancelReq(config) {
    const cancelReqKey = this.generateCancelReqKey(config);
    if (this.cancelReqMap.has(cancelReqKey)) {
      const cancel = this.cancelReqMap.get(cancelReqKey);
      cancel(cancelReqKey);
      this.removeRequestKey(config);
    }
  }

  // 删除cancelReqMap属性上的值
  removeRequestKey(config) {
    const cancelReqKey = this.generateCancelReqKey(config);
    this.cancelReqMap.delete(cancelReqKey);
  }
}

```

```js
import axios from 'axios';
import { ElMessage } from 'element-plus';
import CancelRequest from './cancel-request';
// import store from '@/store';
// import { getToken } from '@/utils/auth';

// 实例化取消请求对象
const cancelRequest = new CancelRequest();

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 300000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken();
    // }
    // 检查之前是否存在相同的请求，如果存在则取消。
    cancelRequest.cancelReq(config);
    // 记录当前请求
    cancelRequest.addCancelReqKey(config, axios.CancelToken);
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    // 移除成功请求记录
    cancelRequest.removeRequestKey(response.config);

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200 || res.msg !== 'OK') {
      switch (res.code) {
        case 1001:
          location.href = '/sys/forbidden';
          break;
      }
      ElMessage({
        message: res.msg || res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });

      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    // 移除失败的请求记录
    cancelRequest.removeRequestKey(error.config || {});
    if (axios.isCancel(error)) {
      console.log(`重复请求信息：${error.message}`);
    } else {
      ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
      });
    }
    console.log(`err-${error}`); // for debug

    return Promise.reject(error);
  }
);

export default service;

```
