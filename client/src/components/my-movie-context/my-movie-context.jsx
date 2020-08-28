import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios'

export const MyMovieContext = createContext();

export const MyMovieProvider = props => {
	const [
		myMovies,
		setMyMovies,
	] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:4000/mymovies")
		.then(res => setMyMovies(res.data))
		.catch(err => console.log(err))
	})

	return (
		<div>
			<MyMovieContext.Provider
				value={[
					myMovies,
					setMyMovies,
				]}>
				{props.children}
			</MyMovieContext.Provider>
		</div>
	);
};

