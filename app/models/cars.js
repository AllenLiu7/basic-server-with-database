const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true,
      unique: true
    }
  });

  

  module.exports = CarSchema;