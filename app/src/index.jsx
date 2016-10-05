import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/main/main.jsx';
import SearchContainer from './components/search/SearchContainer.jsx';
import History from './components/history/history.jsx';
import About from './components/about/about.jsx';
import NotFound from './components/error/404.jsx';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
    		<IndexRoute component={SearchContainer} />
    		<Route path='/history' component={History} />
    		<Route path='/about' component={About} />
    		<Route path='*' component={NotFound} />
    	</Route>
  	</Router>
), document.getElementById('root'));