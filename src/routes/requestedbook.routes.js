const  express =  require('express');

const { requestedBooksController } = require('../controllers/');

const router = express.Router();

router
  .route('/')
  .post( requestedBooksController.createRequested )
  .get( requestedBooksController.getRequestedBooks );

  router
  .route('/:id')
  .get( requestedBooksController.getUSerBooks );

  module.exports = router;