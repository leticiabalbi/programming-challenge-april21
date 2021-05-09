const mongoose = require('mongoose')

//Create a schema and add its properties
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genres: {
    type: String
  },
  year: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
})

//Create and export model
module.exports = mongoose.model('Movie', movieSchema)