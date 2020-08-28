import React from 'react';
import MyMovies from '../components/my-movies.component.jsx';
import './pages-styles/my-movies.styles.scss';
import { Link } from 'react-router-dom';


const MyMoviesPage = () => (
	<div className='my-movies-library'>
		<h1 className='title'>List of My Movies</h1>
		<MyMovies />
		<Link to='/library' className='to-library'>The Library</Link>
	</div>
);

export default MyMoviesPage;
