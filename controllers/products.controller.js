const Product = require('../models/products');

// post add products
exports.postAddProduct = (req, res, next) => {
  const { name, price, categorie, description, colors, imageUrl } = req.body;
  const newProduct = new Product({
    name,
    price,
    description,
    categorie,
    colors,
    imageUrl
  });
  newProduct
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      next(err);
    });
};

// get all products
exports.getAllProducts = (req, res, next) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      err.statusCode = 500;
      next(err);
    });
};

// GET PRODUCS
exports.getProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .then(product => res.status(200).json(product))
    .catch(err => next(err));
};

// GET BY CATEGORIE

// CLOTHES
exports.getClothes = (req, res, next) => {
  Product.find({ categorie: 'apparel' })
    .sort({ createdAt: -1 })
    .then(clothes => {
      res.status(200).json(clothes);
    })
    .catch(err => {
      err.statusCode = 500;
      next(err);
    });
};

// ELECTRONIC DEVOCES
exports.getBeauty = (req, res, next) => {
  Product.find({ categorie: 'beauty' })
    .sort({ createdAt: -1 })
    .then(beauty => {
      res.status(200).json(beauty);
    })
    .catch(err => {
      err.statusCode = 500;
      next(err);
    });
};

// ELECTRONIC DEVOCES
exports.getElec = (req, res, next) => {
  Product.find({ categorie: 'electonic device' })
    .sort({ createdAt: -1 })
    .then(beautyproducts => {
      res.status(200).json(beautyproducts);
    })
    .catch(err => {
      err.statusCode = 500;
      next(err);
    });
};

// MOBO DEVOCES
exports.getMobo = (req, res, next) => {
  Product.find({ categorie: 'mobile device' })
    .sort({ createdAt: -1 })
    .then(mobo => {
      res.status(200).json(mobo);
    })
    .catch(err => {
      err.statusCode = 500;
      next(err);
    });
};

// GET SHOES
exports.getshoes = (req, res, next) => {
  Product.find({ categorie: 'shoes' })
    .sort({ createdAt: -1 })
    .then(shoes => {
      res.status(200).json(shoes);
    })
    .catch(err => {
      err.statusCode = 500;
      next(err);
    });
};

exports.searchProducts = (req, res, next) => {
  const term = req.params.term;
  Product.find({ $text: { $search: term } }, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      next(err);
    });
};
