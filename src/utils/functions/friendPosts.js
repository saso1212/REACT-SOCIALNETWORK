const friendPosts = (posts, friends, users) => {
    return posts.map(post => {
        return {...post}
    }).filter(post => friends.some(friend => friend.user2 === post.user || friend.user1 === post.user))
        .map(user => {
            return {...user, user: users.find(id => user.user === id._id)}
        });
};

export default friendPosts;