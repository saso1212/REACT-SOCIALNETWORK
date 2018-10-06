import React, { Component } from 'react';

import './Posts.css';

import Post from '../../components/Post/Post';

class Posts extends Component {

    render() {
        return(
            <div className="Posts">
                <Post posts={this.props.posts}/>
            </div>
        )
    }
}

export default Posts;
