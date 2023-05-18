const  {User} = require ('../models/');
const bcrypt = require('bcrypt');


const  logingUser = (req, res) => {
  User
  .findOne({email: req.body.email})
  .then((user) =>{
      bcrypt
      .compare(req.body.password, user.password)
      .then((checkpass) => {
        if(!checkpass){
          return res.status(400).send({
            message: 'Password does not match',
            error,
          })
        }
        const token = jwt.sign(
          { 
            userId: user._id,
            userEmail: user.email,
          },
          {
            expiresIn: '24h'
          }
        );

        res.status(200).send({
          message: 'You are logged',
          email: user.email,
          token,
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: 'Incorrect password',
          err,
        });
      });
  })
  .catch((error) => {
    res.status(404).send({
      message: 'Email not found',
      error,
    });
  });
};

module.exports = {
  logingUser,
};