import Products from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.send(allProducts);
    // res.json({"newProducts":"sfdsfs"})
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};

export const getProduct = async (req, res) => {
  try {
    const oneProduct = await Products.findById(req.params.id);
    if (!oneProduct) {
      return res.send("product nof found by id");
    }
    res.json(oneProduct);
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};

export const createtProducts = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newProducts = new Products({ title, description });
    await newProducts.save();
    res.json(newProducts);
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const producDeleted = await Products.findByIdAndRemove(req.params.id);
    if (!producDeleted) {
      return res.send("product not found");
    }
    return res.send("Product Deleted");
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const { productId } = req.params.id;
    const productUpdate = await Products.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    return res.send("update Product");
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};
