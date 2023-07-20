const { RequestedBook, Book, User} = require('../models');
const  { getBookAvailability, searchBorrowed } =  require('../middleware/validate');

 // Borrow a book
const createRequest = (req, res) => {

  let available;
  let conta;
  const idBook = req.body.book;
  const idUser = req.body.user;

  const reqBook = new RequestedBook({
    borrowDate: new Date(),
    book: idBook,
    user: idUser,
  });

  const info = getBookAvailability(idBook)
    .then((data) => {
      available = data.available;
      if(available >= 1){

            searchBorrowed(idBook, idUser)
            .then((result)=>{
               
               if(result == 0){
          
                    reqBook
                    .save()
                    .then((data) => {

                      Book.updateOne(
                        {_id:idBook},
                        {
                          $inc:{ available: -1 }
                        }).then(()=> {
                  
                          res.status(201).json({
                            success: true,
                            message: 'operation saved',
                            book: data,
                          })
                        });
                    })
                    .catch((err) => {
                      res.json(err);
                    });

              }
              else {
                res.json({
                  success: false,
                  message: 'user has borrowed',
                  book: data.title,
                });
              }    
            })
            .catch((err)=>{
              res.json(err);
            });
    }
    else {
      res.json({
        success: false,
        message: 'Book is not available',
        book: data.title,
      });
    }
  })
  .catch((err) => {
    res.json(err);
  });
}

const returnBook = (req, res) => {
    const returnedBook = req.body.book;
    const id = req.params.id;
   
    RequestedBook
    .findOneAndUpdate(
        { _id: id},
        {
          $set: {
            status: true,
            returnDate: new Date(),

          }
        } 
      )
    .then((data) => {
      return new Promise((resolve, reject) => {
        Book.updateOne(
          {_id:returnedBook},
          {
            $inc:{ available: 1 }
          }).then(()=> {
            res.status(201).json({
              success: true,
              message: 'book availability updated',
              book: data,
            })
          });
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
      message: 'All Borrowed books',
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
  .find({user: req.params.id, status: false})
  .populate({path:'book', model:Book})
  .populate({path:'user', model: User})
  .then((data) => {
    res.status(200).json({
      success: true,
      message: 'User borrowed books',
      books: data,
    });
  })
  .catch((err) => {
    res.json(err);
  });
}

module.exports = {
  createRequest,
  getRequestedBooks,
  getUSerBooks,
  returnBook,
};