<template>
  <transition name="el-fade-in-linear">
    <div class="box" v-if="show">
      233
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  }
};
</script>
<style lang="stylus" scoped>
.box {
 box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  padding-left: 100px;
  left: 0px;
  top: 0px;
  margin: auto;
}
</style>
