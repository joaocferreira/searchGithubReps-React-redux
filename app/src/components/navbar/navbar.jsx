import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const Navbar = React.createClass({
  render() {
    return (
    	<div className={styles.navbar}>
	    	<h1>React App</h1>
				<ul className={styles.ul}>
					<Link to='/' /*activeClassName={styles.a_active}*/ className={styles.a} ><li className={styles.li}>Search</li></Link>
					<Link to='/history' /*activeClassName={styles.a_active}*/ className={styles.a} ><li className={styles.li}>History</li></Link>
					<Link to='/about' /*activeClassName={styles.a_active}*/ className={styles.a}  ><li className={styles.li}>About</li></Link>
				</ul>
    	</div>
    );
  }
});

export default Navbar;