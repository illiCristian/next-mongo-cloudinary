import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,

      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, //al titulo de la descripcion le agrega la fecha de creacion y actualizacion
    versionKey: false, //no agrega la version
  }
);
//Si el modelo de products fue creado utilizalo, caso contrario crea un modelo nuevo de products
export default models.Product || model("Product", productSchema);
