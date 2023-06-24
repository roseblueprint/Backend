const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://rosebblion:rose07@portfolio.958zgl0.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    db = client.db('Reactbackendproject');
  } catch (err) {
    console.error(err);
  }
}

function getDb() {
  return db;
}

module.exports = {
  connect,
  getDb,
};