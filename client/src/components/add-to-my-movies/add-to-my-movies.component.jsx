import React, { useState, useContext } from 'react';
import { MyMovieContext } from '../my-movie-context/my-movie-context';

const AddToMyMovies = () => {
	const [
		movies,
		setMovies,
	] = useContext(MyMovieContext);
	const [
		rating,
		setRating,
	] = useState();

	const updateRating = event => {
		setRating(event.target.value);
	};

	const addMovie = event => {
		event.preventDefault();
		setMovies(prevMovies => [
			...prevMovies,
			{ rating: rating },
		]);
	};

	return (
		<div>
			<form onSubmit={addMovie}>
				<input type='number' name='rating' value={rating} onChange={updateRating} />
				<button onClick={setMovies}>Add</button>
			</form>
		</div>
	);
};

export default AddToMyMovies;
