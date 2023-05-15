const  Book = require ('../models/book.model');

// get Books
const getBooks = (req, res) => {
  Book
  .find()
  .then((allBooks) => {
    res.status(200).json({
      success: true,
      message: 'List of Books',
      books: allBooks,
    });
  })
  .catch((err) =>{
    res.status(500).json({
      success: false,
      message: 'Error getting books list',
      error: err.message,
    });
  });
};

const createBook = (req, res) => {

  const book = new Book ({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    genre: req.body.genre,
    stock: req.body.stock,
  });
 
  book
  .save()
  .then((data) => {
    res.status(200).json({
      success: true,
      message: 'New book saved',
      book: data,
    });
  })
  .catch((err) =>{
    res.status(500).json({
      error: err.message,
    });
  });
};

const findOneBook = (req, res) => {
 
  Book
  .findById(req.params.id)
  .then((data) => {
    res.status(200).json({
      success: true,
      message: 'Book finded',
      book: data,
    });
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error getting book "
    });
  });

};

const updateBook = (req, res) => {
  Book
  .findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
      genre: req.body.genre,
      stock: req.body.stock,
    },
    { new: true})
  .then((data)=> {
    res.send(data);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error updating book"
    });
  });
}

module.exports = {
  getBooks,
  createBook,
  findOneBook,
  updateBook,
};