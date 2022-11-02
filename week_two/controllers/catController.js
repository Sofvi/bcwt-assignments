'use strict';
const catModel = require('../models/catModel');
//const cats = catModel.cats;

const getCats = async (req,res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const getCat = (req,res) => {
  //choosing one object with matching id
  const cat = cats.filter(cat => req.params.catId == cat.id)[0];
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const createCat = (req,res) => {
  console.log(req.body);
  res.send('Adding a a cat');
};

const modifyCat = (req,res) => {};
const deleteCat = (req,res) => {};

module.exports = {
  getCats,
  getCat,
  modifyCat,
  createCat,
  deleteCat,
};