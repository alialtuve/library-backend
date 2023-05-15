const  express =  require('express');

const bookController = require('../controllers/book.controller');

const router = express.Router();

router
  .route('/')
  .get( bookController.getBooks);

module.exports = router;