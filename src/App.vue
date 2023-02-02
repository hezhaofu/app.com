<template>
  <div>
    <Header></Header>
    <!-- 路由入口文件 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.isshow"></Footer>
  </div>
</template>

<script>
// 引入Header和Footer 静态组件
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style lang="less" scoped></style>
