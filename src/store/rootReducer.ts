import {combineReducers} from 'redux';
import {userReducer} from './branches/user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});
