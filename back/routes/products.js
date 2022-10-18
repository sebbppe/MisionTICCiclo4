const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductByID, updateProduct, deleteProduct}=require("../controllers/productsController");//traemos la respuesta JSON desde el controlador

router.route('/productos').get(getProducts);//establecemos las rutas para ver el getProducts
router.route('/producto/nuevo').post(newProduct);
router.route('/producto/:id').get(getProductByID);
router.route('/producto/:id').put(updateProduct);
router.route('/producto/:id').delete(deleteProduct);
module.exports=router