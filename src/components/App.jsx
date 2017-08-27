import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Resources from './Resources';
import Home from './Home';
import Header from './Header';
import requireAuth from '../components/RequireAuth';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/resources" component={requireAuth(Resources)} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ authenticated }) {
    return { authenticated };
}

export default connect(mapStateToProps)(App);