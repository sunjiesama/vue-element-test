<template>
  <div>
    <div class="iconBox">
      <i v-for="(item, index) in iconList" :key="index" :class="item"> </i>
    </div>
  </div>
</template>

<script>
import { iconList } from "./iconList";
export default {
  data() {
    return {
      iconList
    };
  }
};
</script>

<style lang="less" scoped>
.iconBox {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  i {
    font-size: 60px;
    color: #90caf9;
  }
}
</style>
