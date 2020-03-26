<template>
  <transition name="el-fade-in-linear">
    <div class="box" v-if="show">
      {{ content }}
    </div>
  </transition>
</template>
<script>
import { moments } from "@/api/user";
export default {
  data() {
    return {
      show: false,
      content: ""
    };
  },
  created() {
    this.getId();
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    requestfullText() {
      console.log("请求全文");
    },
    getId() {
      let id = localStorage.getItem("readMore");
      moments({
        type: "readMore",
        id: id
      })
        .then(res => {
          this.content = res.data.data.content;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  background: rgb(180, 200, 202);
  padding: 20px 100px;
  left: 0px;
  top: 0px;
  margin: auto;
  border-radius: 5%;
}
</style>
