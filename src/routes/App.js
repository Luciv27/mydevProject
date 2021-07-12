import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Index from '../containers/Index';
import Layout from '../components/Layout';
import Profile from '../containers/Profile';
import Register from '../components/Register';
import Login from '../components/Login';
import Search from '../components/Search';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/index" component={Index} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/search" component={Search} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;