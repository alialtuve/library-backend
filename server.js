const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

// parse json request body
app.use(express.json());
//CORS
app.use(cors());

const PORT= process.env.PORT || 5000;

// DB Connection

mongoose
  .connect('mongodb://127.0.0.1:27017/booklender')
  .then(() => console.log('DB connected...'));

app.use('/api', routes);

app.use((req, res) => {
  res.send(404, 'Not found');
});

app.listen(PORT, 
  () => 
    console.log(`Library App Running on ... ${PORT}`
));