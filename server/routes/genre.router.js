const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM genres JOIN "movies_genres" On "genres"."id" = "movies_genres"."genre_id" WHERE "movies_genres"."movie_id"=$1`;
  pool.query(query, [req.params.id])
    .then( result => {
      // returns the first item in the array (which is an Object)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

  
  // res.sendStatus(500)
});

module.exports = router;