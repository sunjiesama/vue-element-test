import axios from "axios";

export const userLogin = data =>
  axios({
    url: "/test/login",
    method: "post",
    data
  });
