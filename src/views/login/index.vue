<template>
  <div class="loginBox">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="loginForm"
    >
      <el-form-item :label="$t('login.userInfo.username')" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item :label="$t('login.userInfo.password')" prop="passWord">
        <el-input
          type="password"
          v-model="ruleForm.passWord"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{
          $t("login.controlTitle.loginBtn")
        }}</el-button>
        <el-button @click="resetForm('ruleForm')">{{
          $t("login.controlTitle.resetBtn")
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { userLogin } from "@/api/user";
import "@/assets/js/line";
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        passWord: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          userLogin(this.ruleForm)
            .then(res => {
              if (res.data.code === 200 && res.data.result) {
                this.$store.commit("INCREMENT", res.data.userInfo);
                localStorage.setItem("userName", this.ruleForm.userName);
                document.cookie = "Token=ASADS8D5S4S7S95EE4";
                loading.close();
                this.$notify({
                  title: "登录成功",
                  message: "欢迎(●ˇ∀ˇ●)",
                  type: "success"
                });
                this.$router.push("/home");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.loginBox {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginForm {
    width: 400px;
  }
}
</style>
