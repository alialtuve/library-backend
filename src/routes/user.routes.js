const  express =  require('express');

const { userController } = require('../controllers/');

const router = express.Router();

router
  .route('/')
  .get(userController.getUsers)
  .post( userController.createUSer);

  module.exports = router;