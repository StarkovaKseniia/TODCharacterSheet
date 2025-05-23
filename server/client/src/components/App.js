import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Sheet from './Sheet';
const Cabinet = () => <h2>Cabinet</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Sheet} /> 
                        <Route exact path="/cabinet" component={Cabinet} /> 
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);