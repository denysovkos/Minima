import { createAction } from 'redux-actions';
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
import { resolve } from 'url';

const initialState: TodoList = [];

const mockData = [
    {
        "id": 1,
        "title": "Title # 1",
        "description": "Descriptions # 1",
        "status": true
    },
    {
        "id": 2,
        "title": "Title # 2",
        "description": "Descriptions # 2",
        "status": false
    },
    {
        "id": 3,
        "title": "Title # 3",
        "description": "Descriptions # 3",
        "status": false
    }
];

const imitateServer = () => {
    return new Promise ((resolve, reject) => {
            let pr = Math.ceil(Math.random() * 10);
    
            if (pr >= 5) {
                 reject("Data was not loaded");
            }
        setTimeout(resolve(mockData), 300)
    })
}



function loadTodoList(todoList: TodoList) {
    return (dispatch) => {
      dispatch({type: LOAD_TODO, payload: {loading: true}})
      
      imitateServer()
          .then(data => dispatch({type: LOAD_TODO_SUCCESS, payload: {
                  loading: false, todoList: data
                }
            }))
          .catch(err => dispatch({type: LOAD_TODO_FAIL, 
            payload: {
                todoList: [], loading: false, error: err
            }    
            }))
    }
  } 


export {
    loadTodoList
}
