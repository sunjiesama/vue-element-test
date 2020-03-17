<template>
  <transition name="el-fade-in-linear">
    <div v-show="show">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 3" :key="item.title">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </transition>
</template>

<script>
import { getUserList } from "@/api/user";
export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    /* if (!document.cookie) {
      this.$router.push("/login");
    } */
    setTimeout(() => {
      this.show = true;
    }, 300);
    getUserList()
      .then(res => {
        console.log(res, "第一次获取数据");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
