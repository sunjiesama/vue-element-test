import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import elementUI from "element-ui";
import i18n from "./i18n/index";
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
  let token = document.cookie; /*  ? document.cookie : "aasdgsadasashgjyy"; */
  if (token) {
    console.log(token);
    next();
  } else {
    if (to.path !== "/login") {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  }
});
