import React from 'react';

const History = React.createClass({
  
  render() {
    return (
			<div>
				<h1>History</h1>
				{this.props.route.historyArray.map(this.createListItem)}
			</div>
		);
	},

	createListItem(item) {
		return (
			<li>
				{item}
			</li>
		);
	}

});

export default History;