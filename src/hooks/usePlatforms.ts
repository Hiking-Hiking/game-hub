import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
//记得对获取到的数据限定为Platform数据类型
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
export default usePlatforms;
