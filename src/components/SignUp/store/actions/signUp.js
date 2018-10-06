import * as actionTypes from './actionTypes';
import axios from '../../../../axios';
import history from '../../../../utils/History/History';

const onSignUp = (data) => {
    return {
        type: actionTypes.ON_SIGN_UP,
        payload: data
    };
};

export const onSignUpData = (userData) => {
    return dispatch => {
        axios.post('/register', userData)
            .then(response => {
                console.log(response)
                dispatch(onSignUp(response.status))
                history.push('/')
            })
            .catch(error => console.log(error.response))
    }
};
