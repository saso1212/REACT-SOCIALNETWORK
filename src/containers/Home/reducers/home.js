import * as actionTypes from '../actions/actionTypes';

import friendPosts from '../../../utils/functions/friendPosts';
import peopleYouMayKnow from '../../../utils/functions/peopleYouMayKnow';

const initialState = {
    posts: [],
    friends: [],
    users: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_FETCH_HOME_DATA:
            const posts = action.payload.data[0].data;
            const friends = action.payload.data[1].data;
            const users = action.payload.data[2].data;

            let updatedPosts = [];
            let updatedUsers = [];

            if (posts.length > 0 && friends.length > 0) {
                const filteredPosts = friendPosts(posts, friends, users);
                filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
                updatedPosts = filteredPosts
            }
            if (friends.length > 0) {
                updatedUsers = peopleYouMayKnow(users, friends, action.payload.id);
            } else {
                updatedUsers = users.filter(user => user._id !== action.payload.id);
            }
            return {
                ...state,
                posts: updatedPosts,
                friends: friends,
                users: updatedUsers
            };
        case actionTypes.ON_ADD_NEW_FRIEND:
            // const arrayUsers = [...state.users];
            // const index = arrayUsers.findIndex(id => id._id === userId);
            // arrayUsers.splice(index, 1);
            // const updateArrayUsers = [...arrayUsers];

            const copyOfUsers = [...state.users];
            return {
                ...state,
                users: copyOfUsers.filter(user => user._id !== action.payload)
            };
        case actionTypes.ON_RESET_STATE:
            return {
                ...state,
                posts: [],
                friends: [],
                users: []
            };
        case actionTypes.ON_ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts].concat(action.payload)
            };
        default:
            return state
    }
};

export default homeReducer;