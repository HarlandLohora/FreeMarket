const { Schema, model } = require("mongoose")

const MetodoPagoSchema = new Schema({
    numero: {
        type: String,
        minLength: 16,
        maxLength: 16,
        required: true
    },
    mesVencimiento: {
        type: String,
        minLength: 2,
        maxLength: 2,
        required: true
    },
    yearVencimiento: {
        type: String,
        minLength: 2,
        maxLength: 2,
        required: true
    },
    cvv: {
        type: String,
        minLength: 3,
        maxLength: 3,
        required: true
    },
    emisor: {
        type: String,
        enum: ["visa", "mastercard", "amex"]
    }
}, {
    timestamps: true
})

const MetodoPago = model("MetodoPago", MetodoPagoSchema)

module.exports = MetodoPago