const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/products');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(helmet());

app.use('/auth', authRouter);
app.use('/api', productRouter);

// ERROR HANDILLING
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    'mongodb+srv://abdullah:1997654@cluster0-uo3g6.mongodb.net/E-Commerce?'
  )
  .then(() => {
    app.listen(PORT, () => console.log('app rouning on post' + PORT));
  })
  .catch(err => {
    console.log(err);
  });
