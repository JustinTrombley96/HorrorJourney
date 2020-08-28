import React, { useContext } from 'react';
import MyMovie from '../my-movie/my-movie.component';
import { MyMovieContext } from '../my-movie-context/my-movie-context';
import './my-movies-styles.scss';

const MyMovies = () => {
	const [
		myMovies,
		setMyMovies,
	] = useContext(MyMovieContext);

	// 	return (
	// 		<div className='my-movies'>
	// 			{myMovies.map(( title, image, rating, i) => (
	// 				<MyMovie title={title} image={image} rating={rating} key={i} />
	// 			))}
	// 		</div>
	// 	);
	// };

	return (
		<div className='my-movies'>
			{myMovies.map(myMovie => (
				<MyMovie title={myMovie.title} image={myMovie.image} rating={myMovie.rating} key={myMovie.i} />
			))}
		</div>
	);
};

export default MyMovies;
