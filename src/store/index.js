import Vue from "vue";
import Vuex from "vuex";

//使用vue

Vue.use(Vuex);

//创建Vuex实例

const store = new Vuex.Store({
  state: {
    count: 666666,
    userName: ""
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
    INCREMENT(state, n) {
      state.count++;
      console.log(n);
      state.userName = n.userName;
    },
    DECREMENT(state, n) {
      state.count -= n;
    },
    SETNAME(state, payload) {
      console.log(payload);
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
