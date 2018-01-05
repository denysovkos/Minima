import { combineReducers } from 'redux';
import init from '../init/';
import auth from '../pages/auth/index';


const rootReducer = combineReducers({
  init,
  auth
});

export default rootReducer;
