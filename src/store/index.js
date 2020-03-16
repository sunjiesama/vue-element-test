import Vue from "vue";
import Vuex from "vuex";

//使用vue

Vue.use(Vuex);

//创建Vuex实例

const store = new Vuex.Store({
  state: {
    count: 666666
  },
  getters: {
    increase: state => {
      return state.count + 1;
    },
    decrease: state => {
      return state.count - 1;
    }
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state, n) {
      state.count -= n;
    }
  },
  actions: {
    DECREMENT(context, n) {
      context.commit("DECREMENT", n);
    },
    INCREMENT(context) {
      context.commit("INCREMENT");
    }
  }
});

export default store;
