import { dbConnect } from "@/utils/mongoose";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../products.controller";
dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
      deleteProduct(req, res);
      break;
    case "GET":
      getProduct(req, res);
      break;
    case "PUT":
      updateProduct(req, res);
      break;
    default:
      return res.status(500).json({ error: "Method not allowed" });
  }
};
