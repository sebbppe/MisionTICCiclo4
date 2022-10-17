const app=require("./app");
const connectDatabase=require("./config/database");

const dotenv=require("dotenv");

dotenv.config({path: 'back/config/config.env'});

connectDatabase();

//cambiando algo
const server=app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo ${process.env.NODE_ENV}`)

});