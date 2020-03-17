<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-purple">1</div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple">2</div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple user">
        <el-link type="info">{{ userName }}</el-link>
        <div class="usercontrol">
          <el-dropdown @command="handleCommand">
            <el-avatar src="" class="useravatar"></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user" command="personalCenter">{{
                $t("header.userControl.personalCenter")
              }}</el-dropdown-item>
              <el-dropdown-item icon="el-icon-edit" command="changePassword">{{
                $t("header.userControl.changePassword")
              }}</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button" command="exit">{{
                $t("header.userControl.exit")
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!-- 个人信息 -->
      <el-dialog
        title="个人中心"
        :visible.sync="myInfoVisible"
        class="userInfo"
      >
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="avatar-uploader-icon"></i>
          <span class="userName">{{ userName }}</span>
        </el-upload>

        <!-- 修改密码 -->
      </el-dialog>
      <el-dialog title="修改密码" :visible.sync="changePasswordVisible">
        <el-form :model="form" size="mini">
          <el-form-item label="旧密码">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="changePasswordVisible = false">取 消</el-button>
          <el-button type="primary" @click="changePasswordVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>
<script>
/* import { mapState } from "vuex"; */
export default {
  data() {
    return {
      imageUrl: "",
      src: require("../assets/img/Avatar.gif"),
      myInfoVisible: false,
      changePasswordVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  computed: {
    /* ...mapState({ userName: state => state.userName }) */
    userName() {
      return localStorage.getItem("userName");
    }
  },
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
    personalCenter() {
      /*  this.$router.push("/home"); */
      this.myInfoVisible = true;
    },
    handleCommand(command) {
      console.log(command);

      switch (command) {
        case "personalCenter":
          this.personalCenter();
          break;
        case "changePassword":
          this.changePasswordVisible = !this.changePasswordVisible;
          break;
        case "exit":
          this.exit();
          break;

        default:
          break;
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="less">
.el-row,
.el-col {
  height: 100%;
}
.user {
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.usercontrol {
  margin-left: 25px;
  .el-dropdown-link {
    cursor: pointer;
    color: #000000;
    line-height: 40px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
.useravatar {
  background-image: url(../assets/img/Avatar.gif) !important;
  background-size: cover !important;
}
.userInfo {
  .avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload {
    display: flex;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    background: url(../assets/img/Avatar.gif);
    background-size: cover;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
  .userName {
    line-height: 50px;
    margin-left: 50px;
    font-size: 20px;
    color: brown;
  }
}
</style>
