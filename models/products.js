const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    categorie: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    colors: Array
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Products', productSchema);
