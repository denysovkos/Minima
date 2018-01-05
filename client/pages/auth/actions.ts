import { createAction } from 'redux-actions';
import { AuthState, AuthObj } from './model';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './constants/ActionTypes';

const initialState: AuthState = {
    isAuth: false,
    error: '',
  };

function Login(auth: AuthObj) {
  return (dispatch) => {
    dispatch({type: LOGIN})
    
    if(auth.userName === 'kd' && auth.password === 'kd') {
      return dispatch({type: LOGIN_SUCCESS, userName: auth.userName})
    }

    return dispatch(LoginFail());

  }
} 

const LoginFail = createAction<AuthState>(
  LOGIN_FAIL,
  () => Object.assign(initialState, {error: 'Wrong username or password'})
);

const LogOut = createAction<AuthState, AuthState>(
  LOGOUT,
  (init: AuthState) => initialState
);

export {
  Login,
  LogOut,
}
