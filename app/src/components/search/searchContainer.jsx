import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import Search from './search.jsx';
import store from '../../store';
import * as Actions from './search-actions';

const SearchContainer = React.createClass({

  handleChange(event) {
  	let query = event.target.value;
    store.dispatch(Actions.typeQuery(query));

  	if (!query.length) {
      store.dispatch(Actions.addRepos([]));
  	}
  },

  handleSubmit(event) {
  	event.preventDefault();
  	let query = this.props.query;

  	if (!query) {
      store.dispatch(Actions.addRepos([]));
  	} 
  	
  	Axios.get('https://api.github.com/search/repositories', {
	  		params: {
	  			q: query
	  		}
  		})
  		.then((response) => {
        store.dispatch(Actions.addRepos(response.data.items));
        store.dispatch(Actions.makeQuery(this.props.query));
    	})
    	.catch((error) => {
      	 store.dispatch(Actions.addRepos([]));
		  });
  },

  render() {
  	return (
  		<Search handleSubmit={this.handleSubmit} state={this.props.query}
      handleChange={this.handleChange} repos={this.props.repos} query={this.props.query} />
  	);
  }
});

const mapStateToProps = (store) => {
  return {
    repos: store.reposState,
    query: store.queryState
  };
};

export default connect(mapStateToProps)(SearchContainer);