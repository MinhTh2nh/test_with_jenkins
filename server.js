const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3001;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/router-test-1', (req, res) => {
  res.send('Hello World 1');
});

app.get('/router-test-2', (req, res) => {
    res.send('Hello World 2');
  });

app.listen(port, hostname, () => {
  console.log(`Your app is running on http://${hostname}:${port}/`);
});
