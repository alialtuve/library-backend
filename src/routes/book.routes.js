const  express =  require('express');

const bookController = require('../controllers/book.controller');

const router = express.Router();

router
  .route('/')
  .get( bookController.getBooks)
  .post( bookController.createBook);


  router
  .route('/:id')
  .get( bookController.findOneBook)
  .put( bookController.updateBook)
  .delete( bookController.deleteBook);

module.exports = router;