const  Book = require ('../models/book.model');

// get Books
const getBooks = (req, res) => {
  Book
  .find()
  .then((allBooks) => {
    res.status(200).json({
      success: true,
      message: 'List of Books',
      Book: allBooks,
    });
  })
  .catch((err) =>{
    res.status(500).json({
      success: false,
      message: 'Error getting books list',
      error: err.message,
    });
  });
}

module.exports = {
  getBooks
};