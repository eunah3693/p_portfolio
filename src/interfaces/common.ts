
export interface ObjectResponse<T> {
  row: T;
}

export interface ListResponse<T> {
  count: number;
  rows: Array<T>;
}

export interface PaginationRequestParams {
  page?: number;
  pageSize?: number;
}

export type DeviceType = 'pc' | 'mobile';