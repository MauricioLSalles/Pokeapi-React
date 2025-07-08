export type Response<T> = {
  data: T | null;
  loading: boolean;
  error: boolean;
  status: number;
};
