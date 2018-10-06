import * as actionTypes from '../actions/actionTypes';

const initialState = {
    status: null
};

const signUpReducer = (state =initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_SIGN_UP:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state
    }
};

export default signUpReducer;