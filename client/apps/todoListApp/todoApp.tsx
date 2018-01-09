import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {loadTodoList, model as TodoListModel} from './';

import { Spin, Alert, Table, Icon, Divider, Input, Button, Popconfirm  } from 'antd';
import EditableTable from './table';


interface TodoAppInterface {
  todoList?: TodoListModel.TodoList;
  loadTodoList?: () => void;
  todo?: {
    todoList?: TodoListModel.TodoList;
    loading: boolean;
    error?: object;
  };
};

class TodoApp extends React.Component<TodoAppInterface> {
  
  componentWillMount() {
    const { loadTodoList } = this.props;

    loadTodoList();
  }
  
  render() {
    const { todo, loadTodoList } = this.props;
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }];

    console.log(todo);

    if (todo.loading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="Data is downloading from server"
            type="info"
          />
        </Spin>
      );
    } else if (todo.error && !todo.loading) {
      return <Alert message={todo.error} type="error" closeText="Reload data" onClose={() => loadTodoList()} />
    } else {
      return <EditableTable />;
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAppInterface>) => bindActionCreators({
  loadTodoList
}, dispatch);

const mapStateToProps = (state: TodoAppInterface) => {
  return {todo: state.todo}
};

export default connect<TodoAppInterface>(mapStateToProps, mapDispatchToProps)(TodoApp);