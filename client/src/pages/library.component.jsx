import React from 'react';
import Movies from '../components/movies.component';
import './pages-styles/library.styles.scss';
import { Link } from 'react-router-dom';

const Library = () => (
	<div className='container'>
		<div className='library'>
			
			<h1 className='title'>List of Movies</h1>
			<Movies />
			<Link to='/mymovies' className='to-my-library'>My Personal Collection</Link>
		</div>
	</div>
);

export default Library;
