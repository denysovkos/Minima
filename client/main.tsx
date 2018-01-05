import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './main/components/App';
import rootReducer from './main/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from './main/components/Layout';

const initialState = {};

const history = createHistory();

const store: Store<any> = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
