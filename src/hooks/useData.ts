import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // 浏览器终止请求
    const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
};

export default useData;
