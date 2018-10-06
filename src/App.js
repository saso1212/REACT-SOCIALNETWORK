import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import history from './utils/History/History';

import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';

class App extends Component {

    render() {

        return (
            <div>
                <Router history={history}>
                    <Layout>
                        <Switch>
                            <Route path='/login' render={() => <h1>Login or Sign Up!</h1>} />
                            <ProtectedRoute
                                exact={true}
                                isAllowed={this.props.isLogin.status}
                                path="/"
                                component={Home}/>
                            <ProtectedRoute
                                isAllowed={this.props.isLogin.status}
                                path="/profile"
                                component={Profile}/>
                            <ProtectedRoute
                                isAllowed={this.props.isLogin.status}
                                render={() => <h1>Not Found!</h1>}
                            />
                        </Switch>
                    </Layout>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.login
    }
};

export default connect(mapStateToProps)(App);
