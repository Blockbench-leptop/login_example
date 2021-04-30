import produce, {Draft} from 'immer';
import {LoadingStatus} from '../../types';
import {UserActions} from './actionCreators';
import {UserActionsType} from './contracts/actionTypes';
import {UserState} from './contracts/state';

const initialUserState: UserState = {
    data: undefined,
    auth_key: null,
    status: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.user;
            draft.auth_key = action.auth_key
            draft.status = LoadingStatus.SUCCESS;
            break;

        case UserActionsType.SET_USER_AUTH_KEY:
            draft.auth_key = action.payload;
            draft.status = LoadingStatus.SUCCESS;
            break;

        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload;
            break;

        case UserActionsType.LOG_OUT:
            draft.status = LoadingStatus.NEVER;
            draft.data = undefined;
            draft.auth_key = null
            break;

        default:
            break;
    }
}, initialUserState);
