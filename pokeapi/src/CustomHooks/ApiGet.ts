type Response<T> = {
    data: T | null;
    loading: boolean;
    error: boolean;
}

export default async function ApiGet<T>(path:string): Promise<Response<T>> {
    const res = await fetch(path);
    const json = await res.json();
    const newData = {data:json, loading: false, error: !res.ok}
    return newData;
}