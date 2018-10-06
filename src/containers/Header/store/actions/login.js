import * as actionTypes from './actionTypes';
import axios from '../../../../axios';
import history from '../../../../utils/History/History';

const onLogin = (data) => {
    return {
        type: actionTypes.ON_LOGIN,
        payload: data
    };
};

export const onFetchLoginData = (userData) => {
    return dispatch => {
        axios.post('/login', userData)
            .then(response => {
                const data = {
                    userData: response.data[0],
                    status: response.status
                };
                dispatch(onLogin(data))
                history.push('/')
            })
            .catch(error => console.log(error.response))
    }
};

export const onLogout = () => {
    return {
        type: actionTypes.ON_LOGOUT
    }
};