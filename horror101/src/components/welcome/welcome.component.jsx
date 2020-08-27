import React from 'react';
import { Link } from 'react-router-dom';

import './welcome.styles.scss';

const Welcome = () => (
	<div className='welcome'>
		<h1>Welcome to the Horror Dimension</h1>
		<h3>Do you have what it takes?</h3>
		<Link className='join' to='/join'>
			<button>JOIN</button>
		</Link>
	</div>
);

export default Welcome;
