const gzippo = require('gzippo');
const express = require('express');
const morgan = require('morgan');
const root = __dirname + '/dist/';

const app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.get('/', function(req, res) {
  res.sendFile(root + 'index.html');
})

app.get('*', function(req, res) {
  res.redirect('/');
})

app.listen(process.env.PORT || 5000);
console.log(`App is listening on port ${process.env.PORT || 5000}`);
