import axios from "axios";

// 下单结果查询
export const getInfo = data =>
  axios({
    url: "api/inner/tmpprime/getActivityInfo?activityNo=2&brandInfo=535,856",
    method: "post",
    data
  });
