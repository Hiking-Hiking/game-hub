import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // 要给rawg.io后台接口传递的api-key
    key: "de48b65d21ed495596bfee8499b3bd0c",
  },
});
