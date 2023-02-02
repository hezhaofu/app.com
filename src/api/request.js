// 对axios二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 利用axios对象中的create方法 去创建一个axios实例
// requests就是axios 只不过稍微配置了一下
const requests = axios.create({
  // 设置基础路径发送请求时会出现api
  baseURL: "/api",
  // 设置请求超时时间
  timeout: 5000,
});
// 设置请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});
// 设置相应拦截器
requests.interceptors.response.use(
  // 成功回调函数
  (res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    // 响应失败回调函数
    return Promise.reject(new Error("faile"));
  }
);
export default requests;
