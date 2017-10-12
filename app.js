const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/form-get', (req, res) => {
  res.render('index-get');
});

app.get('/form-post', (req, res) => {
  res.render('index-post');
});

app.all('/submit-form', (req, res) => {
  res.json({
    "body-params": req.body,
    "query-params": req.query
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});