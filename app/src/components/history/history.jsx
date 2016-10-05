import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';

const History = React.createClass({
  
  render() {
    return (
			<div>
				<h1>History</h1>
				{this.props.history.map(this.createListItem)}
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

const mapStateToProps = (store) => {
  return {
    history: store.historyState
  };
};

export default connect(mapStateToProps)(History);
