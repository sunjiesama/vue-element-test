<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
  >
    <el-submenu v-for="(items, index) in nav" :key="index" :index="items.path">
      <template slot="title">
        <i :class="items.meta.icon"></i>
        <span>{{ items.name }}</span>
      </template>
      <el-menu-item-group v-if="items.children">
        <el-menu-item
          v-for="(item, index) in items.children"
          :key="index"
          :index="item.path"
        >
          <i :class="item.meta.icon"></i>
          <span>{{ item.path }}</span></el-menu-item
        >
      </el-menu-item-group>
      <el-menu-item-group v-else>
        <el-menu-item :index="items.path">
          <i :class="items.meta.icon"></i>
          <span>{{ items.path }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <li class="slidebaricon">
      <i
        v-if="isCollapse"
        class="el-icon-d-arrow-right"
        @click="isCollapse = !isCollapse"
      ></i>
      <i
        v-else
        class="el-icon-d-arrow-left"
        @click="isCollapse = !isCollapse"
      ></i>
    </li>
  </el-menu>
</template>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 130px;
}
.el-container {
  .el-aside {
    ul {
      height: 100%;
    }
  }
}
.slidebaricon {
  position: absolute;
  bottom: 20px;
  padding: 0 25px;
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "1",
          children: [
            {
              title: "1-1"
            },
            { title: "1-2" }
          ]
        },
        {
          title: "2",
          children: [
            {
              title: "2-1"
            },
            { title: "2-2" }
          ]
        }
      ],
      isCollapse: false
    };
  },
  computed: {
    defaultActive() {
      return this.$route.path.replace("/index", "");
    },
    nav() {
      let routes = this.$router.options.routes;
      /* 先取出要作为侧边栏渲染的路由 */
      let list = routes.filter(function(item) {
        return item.meta.isHidden === false;
      });
      let nav = list[0].children ? list[0].children : {};
      /* 过滤需要隐藏的路由 */
      console.log(nav);
      return nav.filter(function(item) {
        return item.meta.isHidden === false;
      });
    }
  },
  methods: {
    toPath(key) {
      localStorage.setItem("defaultPath", key);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
