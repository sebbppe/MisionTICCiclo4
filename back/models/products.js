const mongoose=require("mongoose")

const productsSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre"],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres"]
    },
    precio:{
        type:Number,
        required:[true,"Por favor registra el precio del producto"],
        maxLength:[8,"El precio del producto no debe exceder los 99999999 pesos"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor registre una descripción para el producto"]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor, seleccione la categoría"],
        enum:{
            values:[
                "Alimento seco",
                "Alimento húmedo",
                "Accesorios",
                "Cuidado e higiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true, "Por favor, registre el vendedor"]
    },
    inventario:{
        type:Number,
        required:[true,"Por favor, registre el stock del producto"],
        maxLength:[5, "Cantidad máxima del producto no puede exceder los 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("productos",productsSchema);