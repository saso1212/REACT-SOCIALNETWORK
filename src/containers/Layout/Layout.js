import React, { Component } from 'react';

import './Layout.css';

import Header from '../Header/Header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Layout">{this.props.children}</main>
            </div>
        )
    }
}

export default Layout;