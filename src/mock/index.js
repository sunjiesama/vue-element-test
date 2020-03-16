import Mock from "mockjs";
let Random = Mock.Random;
Mock.setup({
  timeout: "10-2500"
});
Mock.mock("/test/login", {
  code: 200,
  result: true,
  userInfo: {
    "userName|+1": [
      Random.first(),
      Random.first(),
      Random.first(),
      Random.first(),
      Random.first()
    ],
    "serialNumber|1-100": 100,
    password: /\d{5,10}/,
    "chineseName|+1": ["汤姆", "高斯特", "爱丽丝"],
    "userType|+1": ["本地用户", "管理员"],
    "menus|1": [/[0-4]{1,5}/]
  }
});
Mock.mock("/test/getUser", {
  code: 200,
  result: true,
  "userName|1-30": [
    //姓名
    Random.first()
    //性别 1-male 2-female
    /*   Mock.mock({
      "gender|1-2": true
    }) */
  ]
});
export default Mock;
