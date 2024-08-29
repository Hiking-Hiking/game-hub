// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
//不要忘了给useData传入接口类型<Genre>，否则在GenreList组件渲染数据时，因为不知道数据类型会报错；
// const useGenres = () => useData<Genre>("/genres");

// 另一种方案：使用静态数据
const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
