import React from 'react';
import { Link } from 'react-router-dom';
import HorrorClub from '../../images/HorrorClub.jpg'

import './welcome.styles.scss';

const Welcome = () => (
	<div className='welcome'>
		<h1 className='title'>Welcome to the Horror Dimension</h1>
		<h3 className='slogan'>Do you have what it takes?</h3>
		<Link className='join' to='/join'>
			JOIN
		</Link>
		<img className='logo' src={HorrorClub} alt={"HorrorClub"} />
	</div>
);

export default Welcome;
