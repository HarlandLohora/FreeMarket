const { Schema, model } = require("mongoose")

const PedidoSchema = new Schema({
    productos: {
        type: [{ type: Schema.Types.ObjectId, ref: "Producto" }],
        required: true
    },
    metodoPago: {
        type: [{ type: Schema.Types.ObjectId, ref: "Pedidos" }],
        required: true
    },
    status: {
        type: String,
        enum: ["por enviar", "en camino", "entregado"],
        default: "por enviar"
    }

}, {
    timestamps: true
})

const Pedido = model("Pedido", PedidoSchema)

module.exports = Pedido