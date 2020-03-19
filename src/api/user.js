import axios from "axios";

export const userLogin = data =>
  axios({
    url: "/test/login",
    method: "post",
    data
  });
export const getUserList = () =>
  axios({
    url: "http://localhost/code/vueElementTest/getUser.php",
    method: "get"
  });
export const deleteUser = data =>
  axios({
    url: "http://localhost/code/vueElementTest/deleteUser.php",
    method: "post",
    data
  });
