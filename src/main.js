import Vue from "vue";
import App from "./App.vue";
import store from "../src/store/index";

// 注册全局组件
import TypeNav from "./components/TypeNav";
// 第一个参数 全局组件的名字  第二个参数 哪一个组件
Vue.component(TypeNav.name, TypeNav);
// 引入路由
import router from "@/router";
// import axios from "axios";
// import { reqCategorry } from "@/api";
// reqCategorry();

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
