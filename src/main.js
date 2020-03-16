import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import elementUI from "element-ui";
import i18n from "./i18n/index";
import axios from "axios";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import "./mock/index";
import "element-ui/lib/theme-chalk/index.css";
import "../public/style/public.css";

Vue.config.productionTip = false;

Vue.use(elementUI);
new Vue({
  router,
  store,
  elementUI,
  i18n,
  render: h => h(App)
}).$mount("#app");
router.beforeEach((to, from, next) => {
  NProgress.start();
  let token = document.cookie;
  if (token) {
    NProgress.done();
    next();
  } else {
    if (to.path !== "/login") {
      NProgress.done();
      next({
        path: "/login"
      });
    } else {
      NProgress.done();
      next();
    }
  }
});

axios.interceptors.response.use(function(config) {
  //如果数据没有请求到，并且返回到结果为校监失败
  if (config.data.code !== 200) {
    //token失效，移除token
    document.cookie =
      "COOKIE_USER_TOKEN_CODE=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  } else {
    console.log(config.data.code);
  }
  return config;
});
