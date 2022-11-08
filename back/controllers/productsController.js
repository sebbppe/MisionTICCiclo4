producto = require("../models/products");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));//importar un módulo, teniendo la configuración de importación por objeto
//ver lista de productos
//Require, response, next
exports.getProducts = async (req, res, next) => {
  const product = await producto.find();
  if (!product){
    return res.status(404).json({
      sucess: false,
      error: true
    })
  }
  res.status(201).json({
    sucess: true,
    count: product.length,
    product,
  });
};
exports.getProductByID = async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      sucess: false,
      message:"No encontramos ese producto", 
      error:true
    });
  }
  else{
    res.status(201).json({
        sucess: true,
        product
      });
  }
};

//crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
  //algunos procesos no son sincrónicos por lo tanto con Async se
  //especifica esto y ya con esto el proceso espera a que se cree el producto
  const product = await producto.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
};

//actualizar datos
exports.updateProduct = async (req, res, next) => {
    //algunos procesos no son sincrónicos por lo tanto con Async se
    //especifica esto y ya con esto el proceso espera a que se cree el producto
    //let se puede modificar, var casi no tiene restricciones(se puede volver a iniciar) y const es muy restrictiva
    let product = await producto.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
        sucess: false,
        message:"No encontramos ese producto"
        });
    }
    product=await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(201).json({
        sucess: true,
        message:"Producto actualizado correctamente",
        product
        });
  };
  exports.deleteProduct = async (req, res, next) => {
    //algunos procesos no son sincrónicos por lo tanto con Async se
    //especifica esto y ya con esto el proceso espera a que se cree el producto
    //let se puede modificar, var casi no tiene restricciones(se puede volver a iniciar) y const es muy restrictiva
    const product = await producto.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
        sucess: false,
        message:"No encontramos ese producto"
        });
    }
    product.remove();
    res.status(201).json({
        sucess: true,
        message:"Eliminado satisfactoriamente"
        });
};

function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .then(err=>console.error(err))
}
//verProductos();