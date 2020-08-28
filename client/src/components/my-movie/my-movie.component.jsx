import React from 'react';

const MyMovie = ({ title, rating, image }) => {

	

	return (
		<div className='my-movie'>
			{console.log(title)} <h1>{title}</h1>
			<img className='cover-photo' src={image} />
			<h2>Rating: {rating}</h2>
			<button className='delete'>Remove</button>
			<button className='edit'>Edit</button>
		</div>
	);
};

export default MyMovie;
