import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { Content } from '../../layout';
import Layout from './Layout';
import HomePage from '../../pages/home/home';
import AboutPage from '../../pages/about/about';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NotFoundPage from '../../pages/not-found/notFound';
import { Switch } from 'react-router';
import LoginForm from '../../pages/auth/login';
import {Init, model as initModel} from '../../init';
import {Login, LogOut, model as LoginModel} from '../../pages/auth';
import {isEmpty} from 'lodash';

import 'antd/dist/antd.css';

import ProductListComponent from '../../pages/components/productsList/productList';
import ClientsListComponent from '../../pages/components/clientsList/clientsList';
import BillingComponent from '../../pages/components/billing/billingComponent';
import ToDoComponent from '../../pages/components/todo/todo';
import { SecureRoute } from './SecureRoute';

class App extends React.Component<any, any> {

  state = {
    profile: {
      name: undefined
    }
  }

  componentWillMount() {
    this.props.Init();
  }

  render() {
    const {auth, location, init} = this.props;
    const { profile } = this.state;

    return (
        <Router>
          <Layout location={location} logOut={this.props.LogOut} auth={auth} init={init} profile={profile}>
            <Switch>
              <Route exact path="/" render={() => <p>Minima CMS!</p>} />
              <Route exact path="/login" component={LoginForm} />

                <SecureRoute exact path="/dashboard" component={HomePage} />
                <SecureRoute path="/dashboard/todo" component={ToDoComponent} />
                <SecureRoute exact path="/dashboard/clients" component={ClientsListComponent} />
                <SecureRoute exact path="/dashboard/products" component={ProductListComponent} />
                <SecureRoute exact path="/dashboard/billing" component={BillingComponent} />

              <Route exact path="/about" component={AboutPage} />
              <Route exact path="*" component={NotFoundPage} />
            </Switch>  
          </Layout>
        </Router>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators({
  Init, Login, LogOut
}, dispatch);

const mapStateToProps = state => {
  return {location, auth: state.auth, init: state.init}
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(App);
