import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
/**
 *
 * @param endpoint 必传参数，请求的端点，比如'/games'；
 * @param requestConfig 可选参数，requestConfig（形参，名字自己取）是Axios访问请求配置对象，类型为AxiosRequestConfig，是可选参数（表示可能传可能不传），接收从useGames传递进来的selectedGenre，作为获取数据时的请求参数，功能：根据genre去获取不同的game数据；
 * @param deps 可选参数，useEffect更新的依赖数组，功能：根据genre去获取不同的game数据重新渲染游戏卡片；
 * @returns 对象，{ data, error, isLoading }；
 */
const useData = <T>(
  endpoint: string,
  // 可选参数，requestConfig（形参，名字自己取）是Axios访问请求配置对象，类型为AxiosRequestConfig，是可选参数（表示可能传可能不传），接收从useGames传递进来的selectedGenre，作为获取数据时的请求参数，根据genre去获取不同的game数据
  requestConfig?: AxiosRequestConfig,
  //可选参数，useEffect更新的依赖数组
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      // 浏览器终止请求
      const controller = new AbortController();
      setLoading(true);
      apiClients
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          // 把从useGames里传递进来的，访问请求配置对象参数展开，...展开符是一级展开，所以这里 ...requestConfig显示结果是：params: { genres: selectedGenre?.id}
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setLoading(false);
        });
      // .finally(() => setLoading(false)); //因为react严格模式下finally里设置这个不生效，所以写在了res和err里面

      // 清理函数，终止数据请求，在每次组件重新渲染时都会被调用（在下一次 effect 运行之前）。
      return () => controller.abort();
    },

    //如果有注入依赖数组，就使用依赖数组，如果没有，就空数组
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
