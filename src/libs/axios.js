/* eslint-disable eqeqeq */
/* eslint-disable no-tabs */
import axios from "axios"; // 引入 axios库
import qs from "qs"; // 引入 node中自带的qs模块（数据格式转换）
import Vue from "vue";
// import { Toast } from 'vant';
import { getQueryVariable } from "@/libs/utils.js";
import store from "@/store";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.timeout = 60000; // 请求超时时间1分钟
axios.defaults.responseType = "json";
axios.defaults.withCredentials = true; // 是否允许带cookie这些

/* 3.设置拦截器 */
/* 如果不是用创建实例的方式配置，那么下面的Axios都要换成axios,也就是文件开头你用import引入axios
时定义的变量 */
axios.interceptors.request.use(
  (config) => {
    // Vue.$loading.show(config.url);
    // if(config.url.indexOf("/cloud-storage/oss/")>=0){
    //     axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
    // }else{
      console.log(config,'----------------config');
    axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
    // }
    // const token = store.state.home.userId || getQueryVariable("userId")

    // if(token && token!='false'){
    //     config.headers['token'] = token
    // }else{
    //     if(config.url.indexOf('/sso/oauth2') < 0){
    //         Toast.fail("无登陆信息");
    //         return Promise.reject(new Error('无登陆信息，中断请求'))
    //     }

    // }

    /// 需要上传文件类型的，config.type === 'formData' 作为过滤判断
    if (config.headers["Content-Type"] === "application/json") {
      return config;
    }
    if (config.type !== "formData" && config.method === "post") {
      // post 请求默认转成 application/x-www-form-urlencoded 方式
      config.data = qs.stringify(config.data);
    }

    if (config.method === "get") {
      config.url = serialize(config);
    }
    return config;

    //  	if (config.method == "post") {
    //   /*数据转换: axios post方式默认是json格式提交数据，如果使用application/x-www-form-urlencoded数据格式提交，要用qs.stringify()进行转换,个人建议不在拦截器中全局配置，因为不够灵活，还有一点是，如果
    // 设置了重新请求的配置，那么重新请求时，请求体中的config里面的传参就会被再次进行qs.stringify()转
    // 换，会使得参数丢失，造成请求失败。*/
    //  		config.data = qs.stringify(config.data)
    //  	}
    // 	return config;
  },
  (error) => {
    // Vue.$loading.hide();
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    // Vue.$loading.hide();
    let res = response.data;
    // 请求响应后拦截
    switch (res.code) {
      case 200:
        return Promise.resolve(res.result);

      case 400:
        // Toast.fail("数据返回错误");
        return Promise.reject(new Error("错误请求"));
      case 401:
        // Toast.fail("数据返回错误");
        return Promise.reject(new Error("未授权，请重新登录"));
      default:
        // Toast.fail("数据返回错误");
        return Promise.reject(new Error("未知错误"));
    }
  },
  (error) => {
    // Vue.$loading.hide();
    const response = error.response;
    const data = response && response.data;
    const message = !data ? error.message : data.msg;
    // if (data && (data.status == 403)) {
    //     localStorage.removeItem('Authorization');
    //     return Promise.reject(new Error('登录状态已过期，请重新登录'))
    // }
    if (data && (data.status == 404 || data.status == 403)) {
      // 后端校验失败
      console.error(error.config.url + ":" + error.message);
    }
    if (data && data.status == 415) {
      // 前端请求媒体类型错误
      console.error("请求体错误");
    }
    // Toast.fail("数据返回错误");
    return Promise.reject(new Error(message));
  }
);

// 格式化序列
function serialize(obj) {
  if (obj.data != undefined) {
    let params = [];
    Object.keys(obj.data).forEach((key) => {
      if (nullCheck(obj.data[key])) params.push(`${key}=${obj.data[key]}`);
    });
    return `${obj.url}?${params.join("&")}`;
  } else return obj.url;
}

function nullCheck(obj) {
  // 校验是否为空对象、空数组、null、undefined
  if (obj === null || obj === undefined) return false;
  if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0)
    return false;
  else if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) return false;
  else return true;
}

export default axios;
