export interface UserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  supervisor?: boolean;
}

export interface UserDTOUpdate {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}
