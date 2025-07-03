import { useEffect, useState } from "react";
import ApiGet from "./ApiGet";

type Response<T> = {
    data: T | null;
    loading: boolean;
    error: boolean;
}

export default function UseGet<T>(path:string): Response<T> {

    const [data, setData] = useState<Response<T>>({data:null, loading: true, error: false});
    async function loadData(url: string){
    setData(await ApiGet(url));
  }

  useEffect(() => {
    async function load() {
      await loadData(path);
    }
    load();
  }, [path]);

  return data;
}