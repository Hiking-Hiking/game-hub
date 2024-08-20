import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//之后在别的页面也会用到这个Game接口，所以这里导出去
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
