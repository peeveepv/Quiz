const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  text: String,
  answers: [{
    answer: String,
    right: {
      type: Boolean,
      default: false
    }
  }]
})

module.exports = mongoose.model('Question', QuestionSchema)