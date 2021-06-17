import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Index from '../containers/Index';
import Layout from '../components/Layout';
import Profile from '../containers/Profile';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/index" component={Index} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;