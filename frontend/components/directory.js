import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage, Aboutpage } from './App';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Homepage}/>
				<Route exact path="/about" component={Aboutpage }/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);
