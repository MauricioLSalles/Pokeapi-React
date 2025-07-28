import type { Response } from "../Types/Response";
import ApiGet from "./ApiGet";

/**
 *
 * @param url Url to fetch data
 * @returns If data is cached, returns cached data, else makes the fetch
 */
export async function CacheApiGet<T>(url: string): Promise<Response<T>> {
  try {
    const cahceIndex = url;
    const cachedString = sessionStorage.getItem(cahceIndex);
    if (cachedString) {
      return JSON.parse(cachedString) as Response<T>;
    }

    const res = await ApiGet<T>(url);
    sessionStorage.setItem(cahceIndex, JSON.stringify(res));
    return res as Response<T>;
  } catch {
    sessionStorage.clear();
    return await ApiGet<T>(url);
  }
}

export default CacheApiGet;
