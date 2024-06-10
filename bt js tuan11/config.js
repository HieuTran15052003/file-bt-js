const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('mycollection');

  collection.findOne({ key: 'value' }, (err, result) => {
    if (err) throw err;

    console.log(result);
    client.close();
  });
});