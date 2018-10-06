import * as actionTypes from './actionTypes';
import axios from '../../../axios';

const getHomeData = (data) => {
    return {
        type: actionTypes.ON_FETCH_HOME_DATA,
        payload: data
    };
};

const getPostsHandler = () => {
    return axios.get('/posts')
};

const getFriendsHandler = () => {
    return axios.get('/friends')
};

const getUsersHandler = () => {
    return axios.get('/users')
};

export const onFetchHomeData = () => {
    return (dispatch, getState) => {
        Promise.all([getPostsHandler(), getFriendsHandler(), getUsersHandler()])
            .then(response => {
                console.log('response home data:', response)
                const data = {
                    data: response,
                    id: getState().login.userData._id
                };
                dispatch(getHomeData(data));
            })
            .catch(error => console.log(error))
    }
};

const addNewFriend = (userId) => {
    return {
        type: actionTypes.ON_ADD_NEW_FRIEND,
        payload: userId
    }
};

export const onAddNewFriend = (userId) => {
    return dispatch => {
        axios.post(`/friends/${userId}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch(addNewFriend(userId))
                }
            })
            .catch(error => console.log(error))

    }
};

export const onResetState = () => {
    return {
        type: actionTypes.ON_RESET_STATE
    }
};

export const onAddNewPost = (text) => {
    console.log(text)
    return (dispatch, getState) => {
        const data = {
            text: text
        };
        axios.post('/posts', data)
            .then(response => {
                if (response.status === 200) {
                    dispatch(onFetchHomeData())
                }
            })
            .catch(error => console.log(error))
    }
};