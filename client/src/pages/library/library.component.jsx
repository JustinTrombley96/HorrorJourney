import React from 'react';
import Movies from '../../components/movies/movies.component';
import './library.styles.scss';
import { Link } from 'react-router-dom';

const Library = () => (
	<div className='library'>
		<Link to='/mymovies'>Movies</Link>
		<h1 className='title'>List of Movies</h1>
		<Movies />
	</div>
);

export default Library;
