/* 取出store种的数据三种方法 */
<template>
  <div>
    <div class="state">
      <h3>store测试</h3>
      <!-- 第一种 -->
      <span>
        通过
        <el-link :underline="false" type="primary">$store.state.count</el-link
        >取出的store的值:
      </span>
      <el-link :underline="false" type="success">
        {{ $store.state.count }}
      </el-link>
      <br />
      <!-- 第二种 -->
      <span>
        通过计算属性
        <el-link :underline="false" type="primary"
          >...mapState({ num: state => state.count })</el-link
        >取出的store的值:
      </span>
      <el-link :underline="false" type="success">{{ num }}</el-link>
      <br />
      <!-- 第三种 -->
      <span>
        通过计算属性
        <el-link :underline="false" type="primary"
          >...mapState(["count"])</el-link
        >取出的store的值:
      </span>
      <el-link :underline="false" type="success">{{ count }}</el-link>
    </div>
    <div class="getters">
      <h3>getters测试</h3>
      <span>
        通过
        <el-link :underline="false" type="primary"
          >$store.getters.increase</el-link
        >取出的store的值:
      </span>
      <el-link :underline="false" type="success">
        {{ $store.getters.increase }}
      </el-link>
      <br />
      <span>
        通过
        <el-link :underline="false" type="primary"
          >...mapGetters(["decrease"])</el-link
        >取出的store的值:
      </span>
      <el-link :underline="false" type="success">{{ decrease }}</el-link>
      <br />
    </div>
    <div class="mutation">
      <h3>mutation测试</h3>
      <el-button type="primary" size="mini" @click="increment"
        >提交mutation(+1)</el-button
      >
      <el-button type="primary" size="mini" @click="decrement"
        >提交带荷载的mutation(-20)</el-button
      >
    </div>
    <div class="action">
      <h3>actions测试</h3>
      <el-button type="primary" size="mini" @click="de10"
        >提交action(-10)</el-button
      >
      <el-button type="primary" size="mini" @click="add"
        >mapAction提交action(-5)</el-button
      >
    </div>
    <el-button type="primary" @click="getinfos">主要按钮</el-button>
  </div>
</template>

<script>
import { getInfo } from "@/api/index";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    getinfos() {
      let obj = {
        activityNo: 2,
        brandInfo: "535,856"
      };
      alert(11);
      getInfo(obj)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    increment() {
      this.$store.commit("INCREMENT");
    },
    decrement() {
      this.$store.commit("DECREMENT", 20);
    },
    de10() {
      this.$store.dispatch("DECREMENT", 10);
    },
    ...mapActions({
      add: "INCREMENT"
    })
  },
  computed: {
    ...mapState({ num: state => state.count }),
    /*  这里的num是个参数，这个参数的名字要严格与state里面对象名的相等*/
    ...mapState(["count"]),
    ...mapGetters(["increase", "decrease"])
  }
};
</script>

<style></style>
