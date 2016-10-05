import React from 'react';
import Axios from 'axios';
import Search from './search.jsx';
import { connect } from 'react-redux';
import store from '../../store';

const SearchContainer = React.createClass({

  handleChange(event) {
  	let query = event.target.value;
    store.dispatch({
      type: 'TYPE_QUERY',
      data: query
    });

  	if (!query.length) {
  		store.dispatch({
        type: 'ADD_REPOS',
        data: []
      });
  	}
  },

  handleSubmit(event) {
  	event.preventDefault();
  	let query = this.props.query;

  	if (!query) {
  		store.dispatch({
        type: 'ADD_REPOS',
        data: []
      });
  	} 
  	
  	Axios.get('https://api.github.com/search/repositories', {
	  		params: {
	  			q: query
	  		}
  		})
  		.then((response) => {
        store.dispatch({
          type: 'ADD_REPOS',
          data: response.data.items
        });
        store.dispatch({
          type: 'MAKE_QUERY',
          data: this.props.query
        });
    	})
    	.catch((error) => {
      	 store.dispatch({
          type: 'ADD_REPOS',
          data: []
        });
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