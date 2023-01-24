const mongoose=require('mongoose');
const Product=require('../Models/Product.model');
module.exports={
    getAllProducts:async (req,res,next)=>{
        try{
            const results=await Product.find({},{_v:0});
            res.send(results);

        }catch(error){
            console.log(error.message);

        }
    },
    createNewProduct:async(req,res,next)=>{
        try{
            const product=new Product(req.body);
            const result=await product.save();
            res.send(result);

        }catch(error){
            console.log(error.message);

        }
    },
    findProductById:async(req,res,next)=>{
        try{
            const id=req.params.id;
            const product=await Product.findById(id);
            res.send(product);

        }catch(error){
            console.log(error.message);

        }
    },
    updateAProduct:async(req,res,next)=>{
        try{
            const id=req.params.id;
            const updates=req.body;
            const options={new:true};
            const result=await Product.findByIdAndUpdate(id,updates,options);
            res.send(result);

        }catch(error){
            console.log(error.message);

        }
    },
    deleteAProduct:async (req,res,next)=>{
        const id=req.params.id;
        try{
            const result=await Product.findByIdAndDelete(id);
            res.send(result);
        }catch(error){
            console.log(error.message);
        }
    }


    };
