import React from 'react';
import './movie.styles.scss'

const Movie = ({ title, image }) => {
	return (
		<div className='movie'>
			<h1>{title}</h1>
            <img className='cover-photo' src={image} />
            <button className='add'>Add</button>
		</div>
	);
};

export default Movie;
