import { useEffect, useState } from "react";

type Response<T> = {
    data: T | null;
    loading: boolean;
    error: boolean;
}

export default function UseGet<T>(path:string): Response<T> {

    const [data, setData] = useState<Response<T>>({data:null, loading: true, error: false});

    async function loadData(url: string){
    const res = await fetch(url);
    const json = await res.json();
    const newData = {data:json, loading: false, error: res.ok}
    console.log(newData);
    setData(newData);
  }

  useEffect(() => {
    async function load() {
      await loadData(path);
    }
    load();
  }, []);

  return data;
}