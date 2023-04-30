import { dbConnect } from "@/utils/mongoose";
import {
  createProduct,
  deleteProduct,
  getProcuts,
  updateProduct,
} from "../products.controller";
import fileUpload from "express-fileupload";

dbConnect();

export default async function handler(req, res) {
  // Configurar fileUpload
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/uploads",
  })(req, res, () => {
    const { method, body } = req;
    //req nos da informacion de la peticion
    switch (method) {
      case "GET":
        getProcuts(req, res);
        break;
      case "POST":
        createProduct(req, res);
        break;
      default:
        return res.status(400).json({ error: "Method not allowed" });
    }
  });
}
