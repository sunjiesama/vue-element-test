<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
    @select="toPath"
  >
    <el-menu-item v-for="(item, index) in nav" :key="index" :index="item.path">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
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
      isCollapse: true
    };
  },

  computed: {
    nav() {
      let routes = this.$router.options.routes;
      return routes.filter(function(item) {
        return item.isHidden !== true;
      });
    },
    defaultActive() {
      return localStorage.getItem("defaultPath");
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
