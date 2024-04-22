import { IRole } from './role.model';
export interface IAccount {
  id: string;
  phone: string;
  email: string;
  password: string;
  full_name: string;
  role: IRole;
  refreshToken: string;
  verified: boolean;
}

export interface ILoginDTO {
  email: string;
  password: string;
}
