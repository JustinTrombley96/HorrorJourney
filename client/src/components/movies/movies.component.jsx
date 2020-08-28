import React, { useContext } from 'react';
import Movie from '../movie/movie.component';
import { MovieContext } from '../movie-context/movie-context.component';
import {MyMovieContext} from '../my-movie-context/my-movie-context'
import './movies.styles.scss';

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
