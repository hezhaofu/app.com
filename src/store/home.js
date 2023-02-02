import { reqCategorry } from "../api/index";

//开启命名空间
const actions = {
  // promis绝决
  async categoryList(context, vaule) {
    let result = await reqCategorry();
    // console.log(result.data);
    // console.log(context);
    if (result.code === 200) {
      // console.log(context);
      context.commit("CATEGORYLIST", result.data);
    }
  },
};
// ---------------------------------
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // console.log(categoryList);
    state.categoryList = categoryList;
  },
};
const getters = {};
const state = {
  categoryList: [],
};
export default {
  actions,
  mutations,
  getters,
  state,
};
