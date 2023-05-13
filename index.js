const express = require ('express');

const app = express();
const PORT= process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('<h1> Library App!!</h1>');
});

app.listen(PORT, 
  () => 
    console.log(`Library App Running on ... ${PORT}`
));