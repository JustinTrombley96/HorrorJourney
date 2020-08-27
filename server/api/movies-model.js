const db = require('../db-config');

module.exports = {
	getMovies,
	addMovie,
};

function getMovies() {
	return db('movies');
}
function addMovie(movie) {
    return db('movies').insert(movie)
}