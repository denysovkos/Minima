import * as React from 'react';
import { Route } from 'react-router';
import { isEmpty } from 'lodash';
import LoginForm from '../../pages/auth/login';


export function SecureRoute({ component: Component, ...rest }) {
    let auth = isAuthorized();
    return (
        <Route {...rest} render={props => (
            auth ? <Component {...props}/> : <LoginForm />
        )}/>
    )
};

function isAuthorized(): boolean {
    let token = sessionStorage.getItem('MinimaToken');
    return !isEmpty(token);
  }
