import React, { useContext } from 'react';
import './movie.styles.scss';
import { MyMovieContext } from '../my-movie-context/my-movie-context';

const Movie = ({ title, image, rating }) => {
	const [
		myMovies,
		setMyMovies,
	] = useContext(MyMovieContext);
	console.log('My Movies inside of Movie Component', myMovies);
	return (
		<div className='movie'>
			<h1>{title}</h1>
			<img className='cover-photo' src={image} />
			<h2>Rating: {rating}</h2>
			<button
				className='add'
				onClick={() =>
					setMyMovies(myMovies => [
						...myMovies,
						{ title, image, rating },
					])}>
				Add
			</button>
		</div>
	);
};

export default Movie;
