<template>
  <el-container>
    <el-aside width><Sidebar></Sidebar></el-aside>
    <el-container>
      <el-header height="40px"><Header></Header></el-header>
      <el-main>
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
