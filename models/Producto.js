const { Schema, model } = require("mongoose")

const ProductoSchema = new Schema({
    nombre: {
        type: String,
    },
    precio: {
        type: Number,
    },
    descripcion: {
        type: String,
    },
    peso: {
        type: String,
    },
    claveInterna: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    fotos: [String],
    categoria: {
        type: String,
        required: true,
        enum: ["calzado", "tecnologia", "hogar"]
    },
}, {
    timestamps: true
})

const Producto = model("Producto", ProductoSchema)

module.exports = Producto