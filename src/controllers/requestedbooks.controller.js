const { RequestedBook, Book, User} = require('../models');

const createRequested = (req, res) => {

  const reqBook = new RequestedBook({
    borrowDate: req.body.borrowDate,
    book: req.body.book,
    user: req.body.user,
  });

  reqBook
  .save()
  .then((data) => {
    res.status(201).json({
      success: true,
      message: 'operation saved',
      book: data,
    });
  })
  .catch((err) => {
    res.json(err);
  });
}

// All borrewed books
const getRequestedBooks = (req, res) =>{

  RequestedBook
  .find()
  .populate({path:'book', model:Book})
  .populate({path:'user', model: User})
  .then((data) => {
    res.status(200).json({
      success: true,
      message: 'List of requested books',
      books: data,
    });
  })
  .catch((err) => {
    res.json(err);
  });
}

// to get all books boorrowed by a user
const getUSerBooks = (req, res) => {

  RequestedBook
  .find({user: req.params.id})
  .populate({path:'book', model:Book})
  .populate({path:'user', model: User})
  .then((data) => {
    res.status(200).json({
      success: true,
      message: 'List of requested books',
      books: data,
    });
  })
  .catch((err) => {
    res.json(err);
  });
}

module.exports = {
  createRequested,
  getRequestedBooks,
  getUSerBooks,
};