export interface UserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export interface UserDTOUpdate {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}
