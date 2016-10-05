import React from 'react';

const RepositoryList = React.createClass ({
	render() {
		return (
			<ul>
				{this.props.repos.map(this.createListItem)}
			</ul>
		);
	},

	createListItem(repo) {
		return (
			<li key={repo.id} >
				{repo.name}
			</li>
		);
	}
});

export default RepositoryList