import { handleActions, Action } from 'redux-actions';

import { AuthState, AuthObj } from './model';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  VERIFY_PROFILE,
  VERIFY_PROFILE_SUCCESS,
  VERIFY_PROFILE_FAIL
  } from './constants/ActionTypes';

  const initialState: AuthState = {
    isAuth: false,
    error: ''
  }; 

  export default handleActions<AuthState | AuthObj>({
    [LOGIN_SUCCESS]: (state: AuthState, action: any): AuthState => {
      return {isAuth: true, ...action.payload};
    },
  
    [LOGIN_FAIL]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return {isAuth: false, ...action.payload}
    },
    
    [LOGOUT]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return {isAuth: false};
    },

    [VERIFY_PROFILE]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return state;
    },

    [VERIFY_PROFILE_SUCCESS]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return {isAuth: true, ...action.payload};
    },

    [VERIFY_PROFILE_FAIL]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return state;
    },
  }, initialState);