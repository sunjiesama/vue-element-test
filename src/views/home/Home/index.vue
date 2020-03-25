<template>
  <div>
    <!--    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item.title">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <div class="moodBox">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="mootForm.content"
        class="textarea"
      >
      </el-input>
      <div class="publish">
        <el-button size="mini" @click="addmood">发表</el-button>
      </div>
    </div>
    <div class="infinite-list-wrapper" style="overflow:true">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="(i, index) in list" :key="index" class="list-item">
          <div class="top">
            <!--  <img src="@/assets/img/Avatar.gif" alt="" class="headerIMG" /> -->
            <div class="articleTitle">{{ i.nickName }}</div>
            <div class="rise">
              <div>
                <i class="el-icon-date articleDate">&#8194; {{ i.date }}</i>
              </div>
              <div class="articleLabel">
                &#8194;
                <template>
                  <el-tag
                    v-for="(i, index) in labelToArray(i.label)"
                    :key="index"
                    size="mini"
                    >{{ i }}</el-tag
                  >
                </template>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="articleContent">{{ i.content }}</div>
          </div>
          <div class="foot">
            <span class="articleAuthor"> 作者：{{ i.author }} </span>
            <el-link
              :underline="false"
              @click="delMoments(i.id, index)"
              class="link_del"
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
      textarea: "",
      count: 0,
      loading: false,
      list: [],
      form: {
        type: "search",
        pageSize: 10,
        pageNum: 1
      },
      mootForm: {
        type: "insert",
        nickName: "alice",
        content: "",
        motto: ""
      }
    };
  },
  created() {
    this.getlist();
  },
  computed: {
    noMore() {
      return this.form.pageNum >= 2;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    //分割label为数组
    labelToArray(a) {
      let arr = a.split(",");
      return arr;
    },
    addmood() {
      moments(this.mootForm)
        .then(() => {
          this.list = [];
          this.form.pageNum = 1;
          this.getlist();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getlist() {
      moments(this.form)
        .then(res => {
          if (res.data.code === 200) {
            this.list = this.list.concat(res.data.data);
          }
        })
        .catch(() => {});
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
.moodBox {
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;

  .moodContent {
    width: 100%;
  }
  .publish {
    padding: 20px 5px;
  }
}
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
    padding: 30px 50px;
    height: 300px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      .articleTitle {
        color: #455a64;
        font: bold 20px "";
        margin-bottom: 20px;
      }
      .headerIMG {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .rise {
        display: flex;
        .articleLabel > span {
          margin: 0 5px;
        }
        .articleDate {
          color: #bdbdbd;
        }
      }
      span {
        /* margin-left: 20px; */
        color: rgb(127, 161, 255);
      }
    }
    .body {
      flex-grow: 2;

      .articleContent {
        padding: 5px 10px;
        height: 100%;
        text-indent: 2rem;
        color: #424242;
        font-size: 14px;
        line-height: 40px;
      }
    }
    .foot {
      flex-grow: 0;
      .link_del {
        float: right;
        margin-right: 20px;
      }
      .articleAuthor {
        color: #ff5722;
      }
    }
  }
  li:nth-of-type(odd) {
    background: rgba(181, 211, 211, 0.52);
  }
  li:nth-of-type(even) {
    background: rgba(166, 179, 179, 0.52);
  }
}
</style>
