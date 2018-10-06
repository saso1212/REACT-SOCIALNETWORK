import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: {},
    status: null
};

const loginReducer = (state =initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_LOGIN:
            return {
                ...state,
                userData: action.payload.userData,
                status: action.payload.status
            };
        case actionTypes.ON_LOGOUT:
            return {
                ...state,
                userData: {},
                status: null
            };
        default:
            return state
    }
};

export default loginReducer;