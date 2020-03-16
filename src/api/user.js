import Axios from "axios";

export const login = data =>
  Axios({
    url: "test/login",
    method: "post",
    data
  });
