const  express =  require('express');

const authorController = require('../controllers/author.controller');

const router = express.Router();

router
  .route('/')
  .post( authorController.createAuthor)
  .get( authorController.getAuthors);

  module.exports = router;