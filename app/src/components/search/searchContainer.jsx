import React from 'react';
import Axios from 'axios';
import Search from './search.jsx';

const SearchContainer = React.createClass({

	getInitialState() {
    return {
      repos: [],
      query: ''
    }
  },

  handleChange(event) {
  	let query = event.target.value;
  	this.setState({ query });

  	if (!query.length) {
  		this.setState({repos: [] });
  	}
  },

  handleSubmit(event) {
  	event.preventDefault();
  	let query = this.state.query;

  	if (!query) {
  		return this.setState({repos: [] });
  	} 
  	
  	Axios.get('https://api.github.com/search/repositories', {
	  		params: {
	  			q: query
	  		}
  		})
  		.then((response) => {
      	this.setState({repos: response.data.items});
    	})
    	.catch((error) => {
      	this.setState({repos: [] });
		  });
  },

  render() {
  	return (
  		<Search handleSubmit={this.handleSubmit} state={this.state.query}
      handleChange={this.handleChange} repos={this.state.repos} />
  	);
  }
});

export default SearchContainer;