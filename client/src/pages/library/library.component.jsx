import React from 'react';
import Movies from '../../components/movies/movies.component';
import './library.styles.scss';

const Library = () => (
	<div className='library'>
		<h1 className='title'>List of Movies</h1>
		<Movies />
	</div>
);

export default Library;
