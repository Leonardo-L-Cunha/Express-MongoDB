export interface BookDto {
  title: string;
  author: string;
  publisher: string;
  numberOfPages: number;
}

export interface BookDtoUpdate {
  title?: string;
  author?: string;
  publisher?: string;
  numberOfPages?: number;
}
