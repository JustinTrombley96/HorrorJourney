import React from 'react';
import './my-movie.styles.scss'

const MyMovie = ({ title, rating, image }) => {

	

	return (
		<div className='my-movie'>
			<h1>{title}</h1>
			<img className='cover-photo' src={image} />
			<h2>Rating: {rating}</h2>
			<button className='delete'>Remove</button>
			<button className='edit'>Edit</button>
		</div>
	);
};

export default MyMovie;
