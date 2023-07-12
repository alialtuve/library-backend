require('dotenv').config();
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

const {
  MONGODB_URI, PORT
} = process.env;

// parse json request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS
app.use(cors());


// DB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('DB connected...'));

app.use('/api', routes);

app.use((req, res) => {
  res.status(202).send('Welcome to Book App');
});

app.listen(PORT, 
  () => 
    console.log(`Library App Running on ... ${PORT}`
));