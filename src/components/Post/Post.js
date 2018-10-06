import React from 'react';
import './Post.css';

const post = props => props.posts.map(post =>
        <div className="Post" key={post._id}>
            <h4>{post.user.name} {post.user.lastname}</h4>
            <small>{`${new Date(post.date).toLocaleDateString()} ${new Date(post.date).toLocaleTimeString()}`}</small>
            <p>{post.text}</p>
        </div>

);

export default post;