export interface AuthorDto {
  id?: string;
  name: string;
  nationality?: string;
}

export interface AuthorDtoUpdate {
  name: string;
  nationality?: string;
}
