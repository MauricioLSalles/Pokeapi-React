import type { Response } from "../Types/Response";
import ApiGet from "./ApiGet";

export async function CacheApiGet<T>(url: string): Promise<Response<T>> {
  const cahceIndex = url;
  const cachedString = sessionStorage.getItem(cahceIndex);
  if (cachedString) {
    return JSON.parse(cachedString) as Response<T>;
  }

  const res = await ApiGet<T>(url);
  sessionStorage.setItem(cahceIndex, JSON.stringify(res));
  return res as Response<T>;
}

export default CacheApiGet;
