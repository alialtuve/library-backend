const  express =  require('express');

const bookRoute = require('./book.routes');
const userRoute = require('./user.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/users',
    route: userRoute,
  }
];

defaultRoutes.forEach((route) =>{
  router.use(route.path, route.route);
});
module.exports = router;
