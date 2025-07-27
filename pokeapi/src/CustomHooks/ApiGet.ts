import type { Response } from "../Types/Response";

export default async function ApiGet<T>(path: string): Promise<Response<T>> {
  try {
    const res = await fetch(path);
    const json = await res.json();
    const newData = {
      data: json,
      loading: false,
      error: !res.ok,
      status: res.status,
    };
    return newData;
  } catch {
    throw new Error();
  }
}
