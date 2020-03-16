<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-purple">1</div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple">2</div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
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
      <el-dialog title :visible.sync="dialogFormVisible" width="500px">
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
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      username: "皎月",
      dialogFormVisible: false,
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
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
    personalCenter() {
      this.$router.push("/home");
    },
    handleCommand(command) {
      console.log(command);

      switch (command) {
        case "personalCenter":
          break;
        case "changePassword":
          this.dialogFormVisible = !this.dialogFormVisible;
          break;
        case "exit":
          this.exit();
          break;

        default:
          break;
      }
    }
  }
};
</script>
<style lang="less">
.usercontrol {
  float: right;
  .el-dropdown-link {
    cursor: pointer;
    color: #000000;
    line-height: 40px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .useravatar {
    background-image: url(../assets/img/Avatar.gif);
    background-size: cover;
  }
}
</style>
