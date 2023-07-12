const { Author } = require('../models/');

const createAuthor = (req, res) => {

    const author = new Author ({
      name: req.body.name,
      country: req.body.country,
    });
   
    author
    .save()
    .then((data) => {
      res.status(201).json({
        success: true,
        message: 'Author data saved',
        book: data,
      });
    })
    .catch((err) =>{
      res.json(err);
    });
  };

  // get  Authors
const getAuthors = (req, res) => {
  Author
  .find()
  .then((allAuthors) => {
    res.status(200).json({
      success: true,
      message: 'List of Authors',
      books: allAuthors,
    });
  })
  .catch((err) =>{
    res.json(err);
  });
};


  module.exports = {
    createAuthor,
    getAuthors,
  };