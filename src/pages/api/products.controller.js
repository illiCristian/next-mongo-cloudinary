import productModel from "@/models/product.model";

export const getProcuts = async (req, res) => {
  const prducts = await productModel.find();
  res.json(prducts);
};
export const getProduct = async (req, res) => {
  const {
    query: { id },
  } = req;
  try {
    const product = await productModel.findById(id);
    product
      ? res.json(product)
      : res.status(404).json({ message: "product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  console.log(req.files);
  const product = new productModel({
    name,
    description,
    price,
  });
  try {
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const {
    body,
    query: { id },
  } = req;
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    updatedProduct
      ? res.json(updatedProduct)
      : res.status(404).json({ message: "product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const {
    query: { id },
  } = req;
  try {
    const product = await productModel.findByIdAndDelete(id);
    product
      ? res.json(product)
      : res.status(404).json({ message: "product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
