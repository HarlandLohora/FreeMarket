const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    lastname: {
      type: String,
      trim: true,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    fechaNacimiento: Date,
    foto: {
      type: String,
    },
    genero: {
      type: String,
      enum: ["Hombre", "Mujer", "Otro"]
    },
    metodosPago: [{ type: Schema.Types.ObjectId, ref: "MetodoPago" }],
    pedidos: [{ type: Schema.Types.ObjectId, ref: "Pedidos" }],
    productos: [{ type: Schema.Types.ObjectId, ref: "Productos" }],
    role: {
      type: String,
      enum: ["cliente", "vendedor", "admin"],
      default: "cliente"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
