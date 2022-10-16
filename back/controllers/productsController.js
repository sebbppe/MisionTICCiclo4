//Require, response, next
exports.getProducts=(req,res,next) =>{
    //es como un getMapping
    res.status(200).json({
        sucess:true,
        message:"En esta ruta usted podrá ver todos los productos"
    })


}