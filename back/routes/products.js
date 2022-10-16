const express=require("express")
const router=express.Router();

const {getProducts}=require("../controllers/productsController")//traemos la respuesta JSON desde el controlador

router.route('/productos').get(getProducts)//establecemos las rutas para ver el getProducts

module.exports=router