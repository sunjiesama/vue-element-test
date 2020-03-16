import Mock from "mock";
export default {
  login: () => {
    return Mock.mock({
      "string|1-10": "★"
    });
  }
};
