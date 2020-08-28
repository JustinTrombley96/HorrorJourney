import React, { useContext } from 'react';
import Movie from '../movie/movie.component';
import { MovieContext } from '../movie-context/movie-context.component';
import './movies.styles.scss';

const Movies = () => {
	const [
		movies,
		setMovies,
	] = useContext(MovieContext);

	return (
		<div className='movies'>
			{movies.map(movie => <Movie title={movie.title} image={movie.image} rating={movie.rating} key={movie.i} />)}
		</div>
	);
};

export default Movies;
