const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/', async (req, res) => {
  let query = Movie.find()

  // Find by genre
  if (req.query.genre != null && req.query.genre != "All") {
    query = query.regex('genres', new RegExp(req.query.genre))
  }
  else{
    req.query.genre = "All"                                   //Default: List all movies genres
  }

  //Find by year
  if (req.query.year != null && req.query.year != '') {      //Default: List all movies years 
    query = query.where('year', req.query.year)

  }

  //Sort in descending order the top K rated movies found
  if (req.query.topK != null && req.query.topK != '') {
    query = query.sort({ rating: 'desc'}).limit(parseInt(req.query.topK,10))
  }
  else{
    req.query.topK = "50"                                   //Default: List the 50 top rated movies 
    query = query.sort({ rating: 'desc'}).limit(50)   
  }
  
  const movies = await query.exec()
  res.render('movies/index', {
    movies: movies,
    searchOptions: req.query
  })
  
})

module.exports = router