import React from 'react';
import MyMovies from '../../components/my-movies/my-movies.component.jsx';
import './my-movies.styles.scss';

const MyMoviesPage = () => (
	<div className='my-movies'>
		<h1>List of My Movies</h1>
		<MyMovies />
	</div>
);

export default MyMoviesPage;
