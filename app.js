const express=require("express");
var mongoose = require('mongoose');
const app=express();
app.listen(3000,()=>{
    console.log("server listening the localhost successfully");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect('mongodb://localhost:27017/practice1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db');
  });
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    });
  });
const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);
