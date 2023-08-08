import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Results from './components/Results';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/results" component={Results} />
        </Switch>
    );
};

export default Routes;
