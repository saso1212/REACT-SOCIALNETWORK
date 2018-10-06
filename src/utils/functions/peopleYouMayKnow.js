const peopleYouMayKnow = (users, friends, myId) => {
    return users.filter(user => user._id !== myId && friends.every(friend => user._id !== friend.user2))
};

export default peopleYouMayKnow;