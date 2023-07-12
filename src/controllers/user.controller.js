const  {User} = require ('../models/');
const bcrypt = require('bcrypt');
const saltRounds = 10; 


const createUSer = (req, res) =>{
  
    bcrypt
    .hash(req.body.password, saltRounds)
    .then((hashedPassword) => {
        const user = new User({
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role,
        });

        user
        .save()
        .then((result) =>{
          res.status(201).send({
            success: true,
            message: 'User created',
            user: result,
          });
        })
        .catch((error)=>{
           res.status(500).send({
            success: false,
            message: 'Error creating user',
            error,
          });
        });
    })
    .catch((err) =>{
      res.status(500).send({
        success: false,
        message: 'Error creating hashed password',
        err,
      });
    });
};

const getUsers = (req, res) => {
  User
  .find()
  .then((allUsers) => {
    res.status(200).json({
      success: true,
      message: 'List of users',
      users: allUsers,
    });
  })
  .catch((err) =>{
    res.json(err);
  });
};

module.exports = {
  createUSer,
  getUsers,
};