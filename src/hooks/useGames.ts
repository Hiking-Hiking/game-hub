import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    // 浏览器终止请求
    const controller = new AbortController();
    apiClients
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });
    // 清理函数，终止数据请求，在每次组件重新渲染时都会被调用（在下一次 effect 运行之前）。
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
