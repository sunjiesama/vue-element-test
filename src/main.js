import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import elementUI from "element-ui";
import i18n from "./i18n/index";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import "./mock/index";
import "element-ui/lib/theme-chalk/index.css";
import "../public/style/public.css";
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  NProgress.start();
  let token = localStorage.getItem("Token");
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

Vue.use(elementUI);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
