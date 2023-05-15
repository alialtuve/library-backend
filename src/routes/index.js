const  express =  require('express');

const bookRoute = require('./book.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/books',
    route: bookRoute,
  }
];

defaultRoutes.forEach((route) =>{
  router.use(route.path, route.route);
});
module.exports = router;
