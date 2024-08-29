// import useData from "./useData";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
//记得对获取到的数据限定为Platform数据类型
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// 另一种方案，使用静态数据
const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });
export default usePlatforms;
