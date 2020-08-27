const db = require('../db-config')

module.exports = {
    getMyMovies,
    findMyMovieById,
    addMyMovie,
    updateMyMovie,
    deleteMyMovie
}

function getMyMovies() {
    return db('mymovies')
}

function findMyMovieById(id) {
    return db("mymovies")
        .select("*")
        .where("id", id)
}

function addMyMovie(myMovie) {
    return db('mymovies').insert(myMovie)
}


function updateMyMovie(id, myMovie){
    return db('mymovies')
    .where('id', Number(id))
    .update(mymovie)
}

function deleteMyMovie(id){
    return db('mymovies')
    .where('id', Number(id))
    .del()
}