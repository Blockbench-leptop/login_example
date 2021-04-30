import {
  FetchSignInActionInterface,
  FetchUserDataActionInterface,
  LogOutActionInterface,
  SetUserAuthKeyActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStatusActionInterface,
  SignOutActionInterface,
  UserActionsType,
} from './contracts/actionTypes';
import {RegisterFormProps} from "../../../pages/LoginForm/LoginForm";
import { UserState } from './contracts/state';


export const fetchSignIn = (payload: RegisterFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const logOut = (): LogOutActionInterface => ({
  type: UserActionsType.LOG_OUT
})

export const signOut = (): SignOutActionInterface => ({
  type: UserActionsType.SIGN_OUT,
});

export const fetchUserData = (): FetchUserDataActionInterface => ({
  type: UserActionsType.FETCH_USER_DATA,
});

export const setUserData = (user: UserState["data"], auth_key: string): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  user,
  auth_key
});

export const setAuthUserKey = (payload: UserState['auth_key']): SetUserAuthKeyActionInterface => ({
  type: UserActionsType.SET_USER_AUTH_KEY,
  payload
})

export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStatusActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | FetchUserDataActionInterface
  | SetUserDataActionInterface
  | SetUserLoadingStatusActionInterface
  | SignOutActionInterface
  | LogOutActionInterface
  | SetUserAuthKeyActionInterface
