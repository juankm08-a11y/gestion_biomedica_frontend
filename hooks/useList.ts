import { useEffect, useState } from "react";

export function useList<T>(fetchFunction: () => Promise<any>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const response = await fetchFunction();
    setData(response.data ?? response);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    data,
    loading,
    reload: load,
  };
}
