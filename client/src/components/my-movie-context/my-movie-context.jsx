import React, { useState, createContext } from 'react';

export const MyMovieContext = createContext();

export const MyMovieProvider = props => {
	const [
		myMovies,
		setMyMovies,
	] = useState([]);

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

