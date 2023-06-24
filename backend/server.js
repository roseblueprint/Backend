const express = require('express');
const apiRouter = require('./routes/servicesapi');
const db = require('./models/db');

db.connect();

const app = express();

app.use('/api', apiRouter);
app.get('/services', (req, res) => {
  // const collection = db.getDb().collection('services');
  // console.log(collection);
  res.send('You can see my services here.');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});