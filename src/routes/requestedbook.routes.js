const  express =  require('express');

const { requestedBooksController } = require('../controllers/');

const router = express.Router();

router
  .route('/')
  .post( requestedBooksController.createRequest )
  .get( requestedBooksController.getRequestedBooks );
  
  router
  .route('/:id')
  .get( requestedBooksController.getUSerBooks )
  .put( requestedBooksController.returnBook);

  module.exports = router;