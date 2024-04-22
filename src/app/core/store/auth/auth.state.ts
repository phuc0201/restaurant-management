import { IToken } from "../../models/common/response-data.model";

export interface AuthState {
  token: IToken;
  error?: string;
}
