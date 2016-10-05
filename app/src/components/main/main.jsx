import React from 'react';
import styles from './styles.css'
import Navbar from '../navbar/navbar.jsx';

const Main = React.createClass({
	
  render() {
  	return (
			<div className={styles.background}>
				<Navbar />
				<div className={styles.content}>
					{this.props.children}
				</div>	
  		</div>
  	);
  }
});

export default Main;