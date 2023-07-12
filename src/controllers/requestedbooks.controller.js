const { RequestedBook, Book, User} = require('../models');
const  { getBookAvailability } =  require('../middleware/validate');

 
const createRequested = (req, res) => {

  let available;
  const id = req.body.book;

  const reqBook = new RequestedBook({
    borrowDate: new Date(),
    book: req.body.book,
    user: req.body.user,
  });

  const info = getBookAvailability(id)
    .then((data) => {
      available = data.available;
      if(available >= 1){
        reqBook
        .save()
        .then((data) => {
            res.status(201).json({
              success: true,
              message: 'operation saved',
              book: data,
            })
        })
        .catch((err) => {
          res.json(err);
        });
    }
    else {
      res.json({
        success: false,
        message: 'Book is not available',
        book: data,
      });
    }
  })
  .catch((err) => {
    res.json(err);
  });
}

const returnBook = (req, res) => {

    RequestedBook
    .findOneAndUpdate(
        {
          "user":req.params.user, 
          "book":req.params.book
        },
        {
          $set: {
            status: true,
            returnDate: Date,

          }
        } 
      )
    .then((data) => {
        res.status(200).json({
          success: true,
          message: 'Data updated',
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