const express = require('express');
const app = express();
const db = require('../database');
const PORT = 3000 || process.env.PORT;



const loggingMiddleware = (req, res, next) => {
  const logStr = `${req.method} request coming in for ${req.url}`;
  console.log(logStr);
  next();
}

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.use(loggingMiddleware);
app.use(express.json());
app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
  console.log("Insert GET request handler");
  db.connection.query('SELECT * FROM movielist', function(err, results) {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.send(results);
    // console.log(results);
  });
});

app.post('/api/movies', (req, res) => {
  console.log(req.body.movie);
  var queryString = `INSERT INTO movielist (movie) VALUES (?)`;
  db.connection.query(queryString, [req.body.movie], function(err, results) {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.send(201);
  });
});

app.put('/api/movies', (req, res) => {
  var queryString = "UPDATE movielist SET `movie`=? WHERE `id`=?";
  db.connection.query(queryString, [req.body.movie, req.body.id], (err, results) => {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.send(results);
  });
});

app.delete('/api/movies', (req, res) => {
  db.connection.query("DELETE FROM movielist WHERE `id`=?", [req.body.id], (err, results) => {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.end('Movie has been removed!');
  });
})