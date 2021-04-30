import { LoadingStatus } from "../../../types";

export interface User {
  _id?: string;
  email: string;
  password: string;
  auth_key: string
}

export interface UserState {
  data: User | undefined;
  auth_key: null | string
  status: LoadingStatus;
}
