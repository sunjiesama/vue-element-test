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
      isHidden: false,
      serialNumber: 1
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
      isHidden: false,
      serialNumber: 2
    },
    {
      path: "/article",
      name: "article",
      component: Index,
      redirect: "article/index",
      title: "文章",
      icon: "el-icon-reading",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Article")
        }
      ],
      isHidden: false,
      serialNumber: 3
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
      isHidden: false,
      serialNumber: 4
    },
    {
      path: "/canvas",
      name: "canvas",
      component: Index,
      redirect: "canvas/index",
      title: "canvas",
      icon: "el-icon-news",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Canvas")
        }
      ],
      isHidden: false,
      serialNumber: 5
    },
    {
      path: "/icons",
      name: "icons",
      component: Index,
      redirect: "icons/index",
      title: "icons",
      icon: "el-icon-umbrella",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Icons")
        }
      ],
      isHidden: false,
      serialNumber: 5
    },
    {
      path: "/table",
      name: "table",
      component: Index,
      redirect: "table/index",
      title: "table",
      icon: "el-icon-wind-power",
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Table")
        }
      ],
      isHidden: false,
      serialNumber: 5
    }
  ]
});
