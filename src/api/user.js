import axios from "axios";
let time = 5000;
//用户登录
export const userLogin = data =>
  axios({
    url: "http://localhost/code/vueElementTest/userLogin.php",
    method: "post",
    data,
    time
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
    data,
    time
  });

//注册用户
export const register = data =>
  axios({
    url: "http://localhost/code/vueElementTest/register.php",
    method: "post",
    data,
    time
  });
//朋友圈相关
export const moments = data =>
  axios({
    url: "http://localhost/code/vueElementTest/moments.php",
    method: "post",
    data,
    time
  });
