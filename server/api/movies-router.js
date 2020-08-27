const express = require('express');
const movies = require('./movies-model');
const router = express.Router();

router.get('/', (req, res) => {
	movies
		.getMovies()
		.then(movies => {
			res.status(200).json(movies);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});
router.post('/', (req, res) => {
	const movie = req.body;
	movies
		.addMovie(movie)
		.then(movie => {
			console.log(movie);
			res.status(200).json(movie);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

module.exports = router;