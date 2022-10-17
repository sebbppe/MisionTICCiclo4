producto=require("../models/products")
//ver lista de productos
//Require, response, next
exports.getProducts=(req,res,next) =>{
    //es como un getMapping
    res.status(200).json({
        sucess:true,
        message:"En esta ruta usted podrá ver todos los productos"
    })
};

//crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    //algunos procesos no son sincrónicos por lo tanto con Async se 
    //especifica esto y ya con esto el proceso espera a que se cree el producto
    const product=await producto.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
} 