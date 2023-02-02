// 引入vue
import Vue from "vue";
//引用路由
import VueRouter from "vue-router";
// 使用路由
Vue.use(VueRouter);
//引入组件
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
// 重写push和replace;
// 解决编程式路由导航报错问题
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {},
    
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
      meta: {
        isshow: true,
      },
    },
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: {
        isshow: false,
      },
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: {
        isshow: false,
      },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: {
        isshow: true,
      },
      props($route) {
        return {
          keyword: $route.query.keyword,
        };
      },
    },
    {
      path: "*",
      redirect: {
        name: "Home",
      },
    },
  ],
});
