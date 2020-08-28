import React, {  useState} from 'react';
import './movie.styles.scss';
import axios from 'axios'

const Movie = ({ title, image, setMyMovies }) => {
	

	const [
		rating,
		setRating,
	] = useState(0);

	const updateRating = event => {
		setRating(event.target.value);
	};

	const addMovie = () => {
		axios.post('http://localhost:4000/mymovies', 
		{ title: title, image: image, rating: rating})
		.then( () => axios.get("http://localhost:4000/mymovies")
		.then(res => setMyMovies(res.data)))
		
	}

	return (
		<div className='movie'>
			<h1>{title}</h1>
			<img className='cover-photo' src={image} alt="poster"/>
			<h2>
				Rating: <input type='number' name='rating' onChange={updateRating} initialvalue={0} />
			</h2>
			<button
				className='add'
				onClick={addMovie}>
				Add
			</button>
		</div>
	);
};

export default Movie;
