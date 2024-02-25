const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Rastaurant is Running');
});

app.listen(port, () => {
  console.log('rastaurant is running on port', port);
});
