import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
//不要忘了给useData传入接口类型<Genre>，否则在GenreList组件渲染数据时，因为不知道数据类型会报错；
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
