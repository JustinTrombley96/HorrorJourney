const express = require('express');
const mymovies = require('./my-movies-model');
const router = express.Router();

router.get('/', (req, res) => {
	mymovies
		.getMyMovies()
		.then(mymovies => {
			res.status(200).json(mymovies);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

router.post('/', (req, res) => {
	const mymovie = req.body;
	mymovies
		.addMyMovie(mymovie)
		.then(mymovie => {
			res.status(200).json(mymovie);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

router.put("/:id",(req, res) => {
  const { id } = req.params;
  const changes = req.body;

  mymovies.findMyMovieById(id)
    .then(mymovie => {
      if (mymovie) {
        mymovies.updateMyMovie(id, changes).then(updatedMyMovie => {
          res.status(200).json(updatedMyMovie);
        });
      } else {
        res.status(404).json({ message: "Unable to find Movie" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to update My Movie" });
    });
});


router.delete("/:id", (req, res) => {
    const {id} = req.params

    mymovies.deleteMyMovie(id).then(deleted => {
        res.status(204).json({message: `${deleted} Movie was deleted`})
    })
})

module.exports = router;