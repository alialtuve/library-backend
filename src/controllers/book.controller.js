const {Book, Author, Genre} = require('../models/');

// get Books
const getBooks = (req, res) => {
  Book
  .find()
  .populate({path:'author', model:Author})
  .populate({path:'genre', model: Genre})
  .then((allBooks) => {
    res.status(200).json({
      success: true,
      message: 'List of Books',
      books: allBooks,
    });
  })
  .catch((err) =>{
    res.json(err);
  });
};


const createBook = (req, res) => {

  const book = new Book ({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    genre: req.body.genre,
    stock: req.body.stock,
    available: req.body.available,
  });
 
  book
  .save()
  .then((data) => {
    res.status(201).json({
      success: true,
      message: 'New book saved',
      book: data,
    });
  })
  .catch((err) =>{
    res.json(err);
  });
};

const findOneBook = (req, res) => {
 
  Book
  .findById(req.params.id)
  .populate({path:'author', model:Author})
  .populate({path:'genre', model: Genre})
  .then((data) => {
    res.status(200).json({
      success: true,
      message: 'Book finded',
      book: data,
    });
  })
  .catch((err) => {
    res.json(err);
  })
};

const updateBook = (req, res) => {
  Book
  .findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then((data)=> {
    res.status(200).json({
      success: true,
      message: "Book data updated",
      book: data,
    });
  })
  .catch((err) => {
    res.json(err);
    })
}

const deleteBook = (req, res) =>{
  Book
  .findByIdAndDelete(req.params.id)
  .then(data =>{
    res.status(200).json({
      success: true,
      message: "Book deleted",
      book: data,
    });
  })
  .catch((err)=> {
    res.json(err);
  })
}

module.exports = {
  getBooks,
  createBook,
  findOneBook,
  updateBook,
  deleteBook,
};