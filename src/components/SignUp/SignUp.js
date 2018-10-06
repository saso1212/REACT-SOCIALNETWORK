import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import './SignUp.css';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        email: "",
        age: 0,
        name: "",
        lastname:""
    };

    onChangeUsername = (event) => {
        this.setState({username: event.target.value})
    };

    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    };

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    };

    onChangeAge = (event) => {
        this.setState({age: event.target.value})
    };

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    };

    onChangeLastName = (event) => {
        this.setState({lastname: event.target.value})
    };

    onSubmitSignUpHandler = (event) => {
        event.preventDefault();
        const data = {...this.state};
        this.props.onSubmitSignUp(data)
    };

    render() {

        return (
            <form onSubmit={this.onSubmitSignUpHandler}>
                <Input
                    placeholder="username"
                    styles={{margin: '10px auto', display: 'block'}}
                    type="text"
                    value={this.state.username}
                    changed={this.onChangeUsername}/>
                <Input
                    placeholder="password"
                    styles={{margin: '10px auto', display: 'block'}}
                    type="password"
                    value={this.state.password}
                    changed={this.onChangePassword}/>
                <Input
                    placeholder="email"
                    styles={{margin: '10px auto', display: 'block'}}
                    type="email"
                    value={this.state.email}
                    changed={this.onChangeEmail}/>
                <Input
                    placeholder="age"
                    styles={{margin: '10px auto', display: 'block'}}
                    type="number"
                    value={this.state.age}
                    changed={this.onChangeAge}/>
                <Input
                    placeholder="name"
                    styles={{margin: '10px auto', display: 'block'}}
                    type="text"
                    value={this.state.name}
                    changed={this.onChangeName}/>
                <Input
                    placeholder="lastname"
                    styles={{margin: '10px auto', display: 'block'}}
                    type="text"
                    value={this.state.lastname}
                    changed={this.onChangeLastName}/>
                <Button

                    title="Submit"
                    type="submit"
                    classNameProps={["Login", "SignUpButton"].join(' ')}
                    clicked={this.onSubmitSignUpHandler}/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSignUp: (data) => dispatch(actionCreators.onSignUpData(data))
    }
};

export default connect(null, mapDispatchToProps)(SignUp);