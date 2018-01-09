import { combineReducers } from 'redux';
import init from '../init/';
import auth from '../pages/auth/index';
import todo from '../apps/todoListApp/index';


const rootReducer = combineReducers({
  init,
  auth,
  todo
});

export default rootReducer;
