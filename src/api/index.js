// 当前模块：API进行统一管理
import requests from "../api/request";
// 三级联动接口
// /api/product/getBaseCategoryList  get 无参数
export const reqCategorry = () => {
  // 发送请求 默认是promise对象
  return requests({
    url: "/api/product/getBaseCategoryList",
    method: "get",
  });
};
