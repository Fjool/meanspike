// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

app.post('/quotes', (req, res) => {
  console.log(req.body);

  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

MongoClient.connect('mongodb://Fjool:aECRMBlLQ46WPpkS@test-shard-00-00-ay7io.mongodb.net:27017,test-shard-00-01-ay7io.mongodb.net:27017,test-shard-00-02-ay7io.mongodb.net:27017/test?ssl=true&replicaSet=Test-shard-0&authSource=admin', (err, database) => {
  if (err) return console.log(err);

  db = database;
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => console.log(`API running on localhost:${port}`));
});
