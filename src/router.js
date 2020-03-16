import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      redirect: "/home/index",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Home")
        }
      ],
      isHidden: true
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login"),
      isHidden: true
    },
    {
      path: "/home",
      name: "home",
      component: Index,
      redirect: "/home/index",
      title: "首页",
      icon: "el-icon-menu",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Home")
        }
      ],
      isHidden: false
    },
    {
      path: "/time",
      name: "time",
      component: Index,
      redirect: "time/index",
      title: "时间",
      icon: "el-icon-date",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Time")
        }
      ],
      isHidden: false
    },
    {
      path: "/article",
      name: "article",
      component: Index,
      redirect: "article/index",
      title: "文章",
      icon: "el-icon-document",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Article")
        }
      ],
      isHidden: false
    },
    {
      path: "/excel",
      name: "excel",
      component: Index,
      redirect: "excel/index",
      title: "excel",
      icon: "el-icon-s-data",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Excel")
        }
      ],
      isHidden: false
    }
  ]
});
