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
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(3000, () => {
  console.log('Server is running on port 3000');
});