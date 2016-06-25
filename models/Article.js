var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  url: {
    type:String,
    required:true
  },
  text: {
    type:String,
    required: true
  },
  date: {
    type:String,
    require: true
  }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
