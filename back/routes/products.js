const express=require("express")
const router=express.Router();

const {getProducts, newProduct}=require("../controllers/productsController");//traemos la respuesta JSON desde el controlador

router.route('/productos').get(getProducts);//establecemos las rutas para ver el getProducts
router.route('/producto/nuevo').post(newProduct);
module.exports=router