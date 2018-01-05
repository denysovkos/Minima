import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Login, LogOut, model as LoginModel} from './';

import styled from 'react-emotion';
import { Form, Icon, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

interface FormProps extends FormComponentProps {
  password: string;
  userName: string;
  authFunc: object;
};

message.config({
  top: 300,
  duration: 1,
});

class HorizontalLoginForm extends React.Component<any, FormProps> {
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { Login } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        return Login(values);
      }
      
      message.error('Something went wrong :(');
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const { auth } = this.props;

    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
        {auth.error && <div><Icon type="warning" /> {auth.error}</div> }
      </Form>
    );
  }
}

const LoginForm = Form.create()<any>(HorizontalLoginForm);

const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators({
  Login
}, dispatch);

const mapStateToProps = state => {
  return {location, auth: state.auth}
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(LoginForm);
