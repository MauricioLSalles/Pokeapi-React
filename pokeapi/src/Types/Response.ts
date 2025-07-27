export type Response<T> = {
  data: T;
  loading: boolean;
  error: boolean;
  status: number;
};
