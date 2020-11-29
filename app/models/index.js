const mongoose = require('mongoose');
const CarSchema = require('./cars');


const PlayerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  });

  
  const FruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  });
  

  const playerModel = mongoose.model('player', PlayerSchema);
  const fruitModel = mongoose.model('fruit', FruitSchema);
  const carModel=mongoose.model('car', CarSchema)
  
  module.exports = {
      playerModel,
      fruitModel,
      carModel
  }