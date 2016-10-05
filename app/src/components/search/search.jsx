import React from 'react';
import RepositoryList from './repository/repositoryList.jsx';

const Search = (props) => {
	return (
		<div>
			<h1>Search</h1>
			<form onSubmit={props.handleSubmit}>
  			<input value={props.query} onChange={props.handleChange} />
  			<button type="submit"> Query </button>
  		</form>
			<RepositoryList repos={props.repos}/>
		</div>
	);
};

export default Search;