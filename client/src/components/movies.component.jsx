import React, { useContext } from 'react';
import Movie from './movie.component';
import { MovieContext } from './contexts/movie-context.component';
import {MyMovieContext} from './contexts/my-movie-context'
import './component-styles/movies.styles.scss';

const Movies = () => {
	const [
		movies
	] = useContext(MovieContext);

	const [myMovies, setMyMovies] = useContext(MyMovieContext)

	return (
		<div className='movies'>
			{movies.map((movie, i) => <Movie title={movie.title} image={movie.image} rating={movie.rating} key={i} setMyMovies={setMyMovies} myMovies={myMovies}/>)}
		</div>
	);
};

export default Movies;
