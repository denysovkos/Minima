import { message } from 'antd';
import { createAction } from 'redux-actions';
import { AuthState, AuthObj } from './model';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  VERIFY_PROFILE,
  VERIFY_PROFILE_SUCCESS,
  VERIFY_PROFILE_FAIL
} from './constants/ActionTypes';

const initialState: AuthState = {
    isAuth: false,
    error: '',
  };

function Login(auth: AuthObj) {
  return (dispatch) => {
    dispatch({type: LOGIN})

    fetch(`http://${window.location.hostname}:3500/v1/user/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: auth.userName, password: auth.password})
    })
      .then(user => user.json())
      .then(user => {
        if (!user.success) {
          return dispatch({type: LOGIN_FAIL, payload: Object.assign(initialState, {error: user.message})});
        } 
        sessionStorage.setItem('MinimaToken', user.token);
        return dispatch({type: LOGIN_SUCCESS, payload: user.user})
      })
      .catch(err => dispatch({type: LOGIN_FAIL, payload: Object.assign(initialState, {error: err})}));
  

  }
}

function VerifyProfile() {
  return (dispatch) => {
    dispatch({type: VERIFY_PROFILE})

    let token = sessionStorage.getItem('MinimaToken');

    fetch(`http://${window.location.hostname}:3500/v1/user/auth/profile`, {
      headers: new Headers({
        'Authorization': token
      })
    })
      .then(data => data.json())
      .then(data => {
        if (data.success) {
          dispatch({type: VERIFY_PROFILE_SUCCESS, payload: data.user});
        } else {
          dispatch({type: VERIFY_PROFILE_FAIL, payload: Object.assign(initialState, {error: data.message})});
        }
      })
      .catch(err => dispatch({type: VERIFY_PROFILE_FAIL, payload: Object.assign(initialState, {error: err})}));
  }
}

const LogOut = createAction<AuthState, AuthState>(
  LOGOUT,
  (init: AuthState) => {
    sessionStorage.removeItem('MinimaToken');
    return initialState;
  }
);

export {
  Login,
  LogOut,
  VerifyProfile
}
