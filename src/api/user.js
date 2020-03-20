import axios from "axios";
//用户登录
export const userLogin = data =>
  axios({
    url: "http://localhost/code/vueElementTest/userLogin.php",
    method: "post",
    data
  });
//获取用户列表
export const getUserList = () =>
  axios({
    url: "http://localhost/code/vueElementTest/getUser.php",
    method: "get"
  });
//删除用户
export const deleteUser = data =>
  axios({
    url: "http://localhost/code/vueElementTest/deleteUser.php",
    method: "post",
    data
  });

//注册用户
export const register = data =>
  axios({
    url: "http://localhost/code/vueElementTest/register.php",
    method: "post",
    data
  });
