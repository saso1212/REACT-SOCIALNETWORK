import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';

import './Home.css';

import Posts from '../../containers/Posts/Posts';
import People from '../../components/People/People';


class Home extends Component {

    state = {
        value: ""
    };

    componentDidMount() {
        this.props.onFetchHome()
    };

    onChangeValueHandler = (event) => {
        this.setState({value: event.target.value})
    };

    render() {

        const addNewPost =
            <form>
                <label>
                    Post:
                    <textarea
                        style={{width: '100%'}}
                        value={this.state.value}
                        onChange={this.onChangeValueHandler} />
                </label>
                <input type="button" onClick={() => this.props.onSubmitAddNewPost(this.state.value)} value="Submit" />
            </form>;

        const posts = this.props.home.posts.length > 0 ? <Posts posts={this.props.home.posts}/> : <h3>No posts!</h3>;
        return <div className="Home">
            {addNewPost}
            {posts}
            <div>
                <h4>People you may know</h4>
                <div style={{width: '400px', height: '150px', overflowY: 'scroll'}}>
                    <People friendClicked={(userId) => this.props.onAddNewFriend(userId)} users={this.props.home.users}/>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        home: state.home
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchHome: () => dispatch(actionCreators.onFetchHomeData()),
        onAddNewFriend: (userId) => dispatch(actionCreators.onAddNewFriend(userId)),
        onSubmitAddNewPost: (text) => dispatch(actionCreators.onAddNewPost(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);