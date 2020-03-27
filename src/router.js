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
      meta: {
        isHidden: true
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Home")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login"),
      meta: {
        isHidden: true
      }
    },
    {
      path: "/home",
      name: "home",
      component: Index,
      redirect: "/home/index",
      meta: {
        title: "首页",
        icon: "el-icon-menu",
        isHidden: false,
        serialNumber: 1
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Home")
        }
      ]
    },
    {
      path: "/time",
      name: "time",
      component: Index,
      redirect: "time/index",
      meta: {
        title: "时间",
        icon: "el-icon-date",
        isHidden: false,
        serialNumber: 2
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Time")
        }
      ]
    },
    {
      path: "/article",
      name: "article",
      component: Index,
      redirect: "article/index",
      meta: {
        title: "文章",
        icon: "el-icon-reading",
        isHidden: false,
        serialNumber: 3
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Article")
        }
      ]
    },
    {
      path: "/excel",
      name: "excel",
      component: Index,
      redirect: "excel/index",
      meta: {
        title: "excel",
        icon: "el-icon-s-data",
        isHidden: false,
        serialNumber: 4
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Excel")
        }
      ]
    },
    {
      path: "/canvas",
      name: "canvas",
      component: Index,
      redirect: "canvas/index",
      meta: {
        title: "canvas",
        icon: "el-icon-news",
        isHidden: false,
        serialNumber: 5
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Canvas")
        }
      ]
    },
    {
      path: "/icons",
      name: "icons",
      component: Index,
      redirect: "icons/index",
      meta: {
        title: "icons",
        icon: "el-icon-umbrella",
        isHidden: false,
        serialNumber: 6
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Icons")
        }
      ]
    },
    {
      path: "/table",
      name: "table",
      component: Index,
      redirect: "table/index",
      meta: {
        title: "table",
        icon: "el-icon-wind-power",
        serialNumber: 7,
        isHidden: false
      },
      children: [
        {
          path: "index",
          component: () => import("@/views/home/Table")
        }
      ]
    },
    {
      path: "*",
      meta: {
        isHidden: true
      },
      component: () => import("@/views/404")
    }
  ]
});
