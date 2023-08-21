export interface QueryParams {
  publisher?: string;
  title?: string;
  minPage?: number;
  maxPage?: number;
  authorName?: string;
}

export interface QueryLimit {
  limit: number;
  page: number;
  ordernation: string;
}
