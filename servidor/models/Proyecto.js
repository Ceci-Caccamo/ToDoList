const mongoose = require('mongoose');

const ProyectoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    creador:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    creado:{
        type:Date,
        default:Date.now()//Fecha en que el usuario da de alta el proyecto
    }
})

module.exports=mongoose.model('Proyecto', ProyectoSchema)