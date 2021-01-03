import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Projects, Resume } from './pages/';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
        </Switch>
    </Router>),
    document.getElementById('root'));