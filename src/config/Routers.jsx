import React from 'react';
import { Route,Switch } from 'react-router';
import Home  from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
const Router = () => {
    return (
        <Switch>
            <Route 
                path="/:category/search/:keyword"
                component={Catalog}>
            </Route>
            <Route 
                path="/:category/:id"
                component={Detail}>
            </Route>
            <Route 
                path="/:category"
                component={Catalog}>
            </Route>
            <Route path="/"
                exact
                component={Home}>
            </Route>
        </Switch>

    );
}

export default Router;
