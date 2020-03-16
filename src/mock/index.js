import Mock from "mock";
import user from "./user";
Mock.mock(/test\/login/, user.login);
export default Mock;
