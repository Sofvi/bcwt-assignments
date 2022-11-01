'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/index', (req, res) => {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!',
    name: '',
    image: '',
    text1: '',
    text2: ''})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});