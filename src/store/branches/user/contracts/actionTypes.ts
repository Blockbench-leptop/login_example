import {Action} from 'redux';
import {User} from './state';
import {LoadingStatus} from "../../../types";
import {RegisterFormProps} from "../../../../pages/LoginForm/LoginForm";

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  SET_USER_AUTH_KEY = 'user/SET_USER_AUTH_KEY',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
  SIGN_OUT = 'user/SIGN_OUT',
  LOG_OUT = 'user/LOG_OUT',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}


export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: RegisterFormProps;
}

export interface SignOutActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SIGN_OUT;
}

export interface LogOutActionInterface extends Action<UserActionsType> {
  type: UserActionsType.LOG_OUT;
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA;
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  user: User,
  auth_key: string
}

export interface SetUserAuthKeyActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_AUTH_KEY;
  payload: string | null;
}

export interface SetUserLoadingStatusActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

