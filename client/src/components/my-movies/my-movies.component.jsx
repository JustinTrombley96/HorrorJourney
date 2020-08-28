import React, { useContext, useEffect } from 'react';
import MyMovie from '../my-movie/my-movie.component';
import { MyMovieContext } from '../my-movie-context/my-movie-context';
import './my-movies-styles.scss';
import axios from 'axios'

const MyMovies = () => {
	const [
		myMovies,
		setMyMovies,
	] = useContext(MyMovieContext);

		useEffect(() => {
		axios.get("http://localhost:4000/mymovies")
		.then(res => setMyMovies(res.data))
		.catch(err => console.log(err))
	}, [])

	return (
		<div className='my-movies'>
			{myMovies.map((myMovie, i) => (
				<MyMovie title={myMovie.title} image={myMovie.image} rating={myMovie.rating} key={i} id={myMovie.id} setMyMovies={setMyMovies}/>
			))}
		</div>
	);
};

export default MyMovies;
