<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item.title">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="infinite-list-wrapper" style="overflow:true">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="(i, index) in list" :key="index" class="list-item">
          <div class="top">
            <img src="@/assets/img/Avatar.gif" alt="" class="headerIMG" />
            <span>{{ i.nickName }}</span>
          </div>
          <div class="body">
            <span>{{ i.content }}</span>
          </div>
          <div class="foot">
            <span>{{ i.date }}</span>
            <span>{{ i.motto }}</span>
            <el-link :underline="false" @click="delMoments(i.id, index)"
              >删除</el-link
            >
          </div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import { moments } from "@/api/user";
export default {
  data() {
    return {
      count: 0,
      loading: false,
      list: [],
      form: {
        type: "search",
        id: 1,
        nickName: "白雪公主",
        content: "今晚吃不吃了呢",
        motto: "吃吧",
        pageSize: 10,
        pageNum: 1
      }
    };
  },
  created() {
    this.getlist();
  },
  computed: {
    noMore() {
      return this.form.pageNum >= 5;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    getlist() {
      moments(this.form)
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            this.list = this.list.concat(res.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.form.pageNum += 1;
        this.getlist();
        this.loading = false;
      }, 2000);
    },
    delMoments(id, index) {
      let obj = {
        type: "delete",
        id: id
      };

      moments(obj)
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.list.splice(index, 1);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
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
ul {
  padding: 0 30px;
  li {
    box-sizing: border-box;
    padding: 10px 20px;
    height: 200px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      align-items: center;
      flex-grow: 0;
      .headerIMG {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        margin-left: 20px;
        color: rgb(127, 161, 255);
      }
    }
    .body {
      flex-grow: 2;
    }
    .foot {
      flex-grow: 1;
    }
  }
  li:nth-of-type(odd) {
    background: rgba(79, 121, 219, 0.52);
  }
  li:nth-of-type(even) {
    background: rgba(91, 197, 197, 0.52);
  }
}
</style>
