import { handleActions, Action } from 'redux-actions';

import { Todo, TodoList } from './model';

import {
    LOAD_TODO,
    LOAD_TODO_SUCCESS,
    LOAD_TODO_FAIL,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    EDIT_TODO_SUCCESS,
    EDIT_TODO_FAIL,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAIL
  } from './constants/actionTypes';

  const initialState: TodoList = []; 

  export default handleActions<TodoList | Todo>({
    [LOAD_TODO]: (state: TodoList, action: any): TodoList => { 
      return action.payload;
    },
  
    [LOAD_TODO_SUCCESS]: (state: TodoList, action: Action<TodoList>): TodoList => {
      return action.payload;
    },
    
    [LOAD_TODO_FAIL]: (state: TodoList, action: Action<TodoList>): TodoList => {
      return action.payload;
    },
  }, initialState);
