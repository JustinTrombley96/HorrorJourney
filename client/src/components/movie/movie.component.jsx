import React, { useContext, useState, useEffect } from 'react';
import './movie.styles.scss';
import { MyMovieContext } from '../my-movie-context/my-movie-context';
import { MovieContext } from '../movie-context/movie-context.component';
import axios from 'axios'

const Movie = ({ title, image }) => {
	const [
		myMovies,
		setMyMovies,
	] = useContext(MyMovieContext);

	const [
		rating,
		setRating,
	] = useState(MovieContext);

	const updateRating = event => {
		setRating(event.target.value);
	};

	useEffect(() => {
		axios.get("http://localhost:4000/mymovies")
		.then(res => setMyMovies(res.data))
		.catch(err => console.log(err))
	}, [])

	return (
		<div className='movie'>
			<h1>{title}</h1>
			<img className='cover-photo' src={image} />
			<h2>
				Rating: <input type='number' name='rating' value={rating} onChange={updateRating} />
			</h2>
			<button
				className='add'
				onClick={() =>
					setMyMovies(myMovies => [
						...myMovies,
						{ title, image, rating},
					])}>
				Add
			</button>
		</div>
	);
};

export default Movie;
