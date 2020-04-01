<template>
  <div class="loginBox">
    <!-- 登录 -->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="loginForm"
      v-if="!isRegister"
    >
      <el-form-item :label="$t('login.userInfo.username')" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item :label="$t('login.userInfo.password')" prop="passWord">
        <el-input
          type="password"
          v-model="ruleForm.passWord"
          autocomplete="off"
          @keydown.native.enter="submitForm('ruleForm')"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-link type="info" @click="isRegister = true"
          >还没有账号？注册一个吧</el-link
        >
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
    <!-- 注册 -->
    <el-form
      :model="register"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="loginForm"
      v-else
    >
      <el-form-item :label="$t('login.userInfo.username')" prop="userName">
        <el-input v-model="register.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item :label="$t('login.userInfo.nickName')" prop="nickName">
        <el-input v-model="register.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <!-- 输入密码 -->
      <el-form-item :label="$t('login.userInfo.password')" prop="passWord">
        <el-input v-model="register.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="adduser('registerForm')">{{
          $t("login.controlTitle.register")
        }}</el-button>
        <el-button @click="cancel('registerForm')">{{
          $t("login.controlTitle.cancel")
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { userLogin, register } from "@/api/user";
// import "@/assets/js/line";
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validateNickName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
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
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        passWord: [{ validator: validatePass, trigger: "blur" }],
        nickName: [{ validator: validateNickName, trigger: "blur" }]
      },
      isRegister: false,
      ruleForm: {
        userName: "",
        passWord: ""
      },
      register: {
        userName: "",
        passWord: "",
        nickName: ""
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
              if (res.data.code === 200) {
                this.$store.commit("INCREMENT", res.data.data.nickName);
                localStorage.setItem("userName", res.data.data.nickName);
                localStorage.setItem("Token", "ASADS8D5S4S7S95EE4");
                loading.close();
                this.$notify({
                  title: "登录成功",
                  message: "欢迎(●ˇ∀ˇ●)",
                  type: "success"
                });
                this.$router.push("/home");
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "warning"
                });
                loading.close();
              }
            })
            .catch(() => {
              this.$message({
                message: "网络除了点问题=_=",
                type: "warning"
              });
              loading.close();
            });
        } else {
          return false;
        }
      });
    },
    adduser(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          register(this.register)
            .then(res => {
              if (res.data.code === 200) {
                this.$message({
                  message: res.data.msg,
                  type: "success"
                });
                this.isRegister = false;
                loading.close();
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "warning"
                });
                loading.close();
              }
            })
            .catch(err => {
              console.log(err);
              loading.close();
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    cancel(formName) {
      this.isRegister = false;
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
