import type { Response } from "../Types/Response";

/**
 *
 * @param path Url to make the fetch
 * @returns An object that holds the data alredy converted to Json and the status
 */
export default async function ApiGet<T>(path: string): Promise<Response<T>> {
  const res = await fetch(path);
  const json = await res.json();
  const newData = {
    data: json,
    status: res.status,
  };
  return newData;
}
