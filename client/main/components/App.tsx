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


interface AppProps {
  location: object;
  auth: object;
}

class App extends React.Component<any, AppProps> {

  componentWillMount() {
    this.props.Init({time: new Date().toDateString(), completed: true, errors: false});
  }

  isAuthorized = (): object => {
    const { auth } = this.props;
    return auth.isAuth ? <HomePage /> : <LoginForm />;
  }

  render() {
    const {auth, location} = this.props;
    return (
        <Router>
          <Layout location={location} logOut={this.props.LogOut} auth={auth}>
            <Switch>
              <Route exact path="/" render={() => this.isAuthorized()} />
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
  return {location, auth: state.auth}
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(App);
