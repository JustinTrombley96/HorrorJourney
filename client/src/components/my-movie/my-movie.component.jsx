import React, {useState} from 'react';
import './my-movie.styles.scss'
import axios from 'axios'


const MyMovie = ({ title, rating, image, id, setMyMovies }) => {

	const [editing, setEditing] = useState(false)
	const [rate, setRate] = useState(rating)

const removeMovie = () => {
		axios.delete(`http://localhost:4000/mymovies/${id}`)
		.then( () => axios.get("http://localhost:4000/mymovies").then(res => setMyMovies(res.data)))
		
	}

const updateRating = () => {
	console.log("update")
	axios.put(`http://localhost:4000/mymovies/${id}`, {rating: rate})
	.then( () => axios.get("http://localhost:4000/mymovies").then(res => setMyMovies(res.data)))
	.catch(err => console.log(err))
	setEditing(false)

}


	return (
		<div className='my-movie'>
			<h1>{title}</h1>
			<img className='cover-photo' src={image} alt={"poster"}/>
			{!editing ? <h2>Rating: {rating}</h2> : <input type='number' initialvalue={rating} name='rating' onChange={(e) => {setRate(e.target.value)}} />}
			<button className='delete' onClick={removeMovie} >Remove</button>
			<button className='edit' onClick={!editing ? () => setEditing(true) : updateRating}>{!editing ? "Edit" : "Confirm"}</button>
		</div>
	);
};

export default MyMovie;
