import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionCreators from './store/actions/index';
import * as homeActionCreators from '../Home/actions/index';

import './Header.css';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import SignUp from '../../components/SignUp/SignUp';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Header extends Component {

    state = {
        username: '',
        password: '',
        signUp: false
    };

    onChangeUsername = (event) => {
        this.setState({username: event.target.value})
    };

    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    };

    onLoginHandler = (event) => {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.onLogin(userData);
        this.setState({username: '', password: ''})
    };

    onSignUpHandler = () => {
        this.setState({signUp: true})
    };

    onLogoutHandler = () => {
        this.props.onLogout();
        this.props.onResetHome()
    };

    render() {

        let user = this.props.isLogin.userData.username ?
            <Aux>
                <NavLink to={{
                    pathname: '/profile',
                    search: `?id=${this.props.isLogin.userData._id}`
                }} className="NavLinkClass">
                    <p style={{color: '#fff'}}>
                        <b>{this.props.isLogin.userData.name}</b>
                    </p>
                </NavLink>
                <NavLink to="/" className="NavLinkClass">
                    <p style={{color: '#fff'}}>
                        <b>Home</b>
                    </p>
                </NavLink>
            </Aux> : null;

        let signUp = this.state.signUp && !this.props.isLogin.status ? <SignUp/> : null;

        const buttons = !this.props.isLogin.status ?
            <form onSubmit={this.onLoginHandler}>
                <Input
                    placeholder="username"
                    styles={{marginRight: '5px'}}
                    type="text"
                    value={this.state.username}
                    changed={this.onChangeUsername}/>
                <Input
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    changed={this.onChangePassword}/>
                <Button
                    title="Login"
                    type="submit"
                    classNameProps="Login"
                    clicked={this.onLoginHandler}/>
                <Button
                    title="Sign Up"
                    type="button"
                    classNameProps="Login"
                    clicked={this.onSignUpHandler}/>
            </form> : <Button
                title="Log Out"
                type="button"
                classNameProps="Login"
                clicked={this.onLogoutHandler}/>;

        return (
            <div>
                <div className="Header">
                    {user}
                    <div className="Buttons">
                        {buttons}
                    </div>
                </div>
                {signUp}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userData) => dispatch(actionCreators.onFetchLoginData(userData)),
        onLogout: () => dispatch(actionCreators.onLogout()),
        onResetHome: () => dispatch(homeActionCreators.onResetState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);