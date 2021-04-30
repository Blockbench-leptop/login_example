import {call, put, takeLatest} from 'redux-saga/effects';
import {UserApi} from '../../../services/api/userApi';
import {WinStorage} from '../../../services/AuthSrorage';
import {LoadingStatus} from '../../types';
import {setAuthUserKey, setUserData, setUserLoadingStatus} from './actionCreators';
import {FetchSignInActionInterface, UserActionsType,} from './contracts/actionTypes';
import history from "../../../helpers/history";

export function* LoginRequest({payload}: FetchSignInActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING));
        const data = yield call(UserApi.signIn, payload);
        WinStorage.setToken(data.token)
        yield put(setAuthUserKey(data.token))
        yield call(fetchUserDataRequest);
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING));
        const user = yield call(UserApi.me);
        if (user) {
            const auth_key = WinStorage.getToken()
            yield put(setUserData(user, auth_key));
        } else {
            yield put(setUserLoadingStatus(LoadingStatus.ERROR));

        }
    } catch (error) {
        console.log(error)
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* LogOutRequest() {
    try {
        WinStorage.removeToken()
        history.push('/')
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, LoginRequest);
    yield takeLatest(UserActionsType.LOG_OUT, LogOutRequest);
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
