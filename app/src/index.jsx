import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/main/main.jsx';
import SearchContainer from './components/search/SearchContainer.jsx';
import History from './components/history/history.jsx';
import About from './components/about/about.jsx';
import NotFound from './components/error/404.jsx';
import { Provider } from 'react-redux';
import store from './store';

const historyArray = [];

const addHistory = (query) => {
	historyArray.push(query);
};

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={Main}>
    		<IndexRoute component={SearchContainer} addHistory={addHistory} />
    		<Route path='/history' component={History} historyArray={historyArray} />
    		<Route path='/about' component={About} />
    		<Route path='*' component={NotFound} />
    	</Route>
  	</Router>
  </Provider>
), document.getElementById('root'));