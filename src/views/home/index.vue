<template>
  <el-container>
    <el-aside width><Sidebar></Sidebar></el-aside>
    <el-container>
      <el-header height="40px"><Header></Header></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="40px"><Footer></Footer></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
/* import BackToTop from "@/components/BackToTop"; */
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>

<style lang="less">
.el-header {
  border-bottom: 1px solid #cccccc;
}
.el-footer {
  border-top: 1px solid #cccccc;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
}
.el-main {
  background-color: #e9eef3;
}
</style>
