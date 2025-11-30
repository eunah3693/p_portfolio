
export interface CommonDto {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
