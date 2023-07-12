const  express =  require('express');

const bookRoute = require('./book.routes');
const userRoute = require('./user.routes');
const loginRoute = require('./login.route');
const requestedRoute = require('./requestedbook.routes');
const authorRoute = require('./author.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/login',
    route: loginRoute,
  },
  {
    path:'/request',
    route: requestedRoute,
  },
  {
    path:'/authors',
    route: authorRoute,
  }
];

defaultRoutes.forEach((route) =>{
  router.use(route.path, route.route);
});
module.exports = router;
