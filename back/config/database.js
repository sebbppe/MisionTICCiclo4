const mongoose=require("mongoose");

const connectDatabase=()=>{
    //lo intento(promesa), si se logra(then) y si no se logra (catch)
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host} `)
    }).catch(con=>{
        console.log(`No se logró la conexión con la base de datos`)
    }
    )
}

module.exports=connectDatabase;