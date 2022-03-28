import Products from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.send(allProducts);
    // res.json({"newProducts":"sfdsfs"})
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res) => {

  // return res.json(newProducts);
  try {
    const { title, description } = req.body;
    const newProducts = new Products({ title, description });
    await newProducts.save();
    res.json(newProducts)
  } catch (error) {
    next(error);
  }
};

export const createtProducts = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newProducts = new Products({ title, description });
    await newProducts.save();
    // res.json({"newProducts":"sfdsfs"})
    res.json(newProducts)
    console.log(req.body);

  } catch (error) {
    next(error);
  }
};

export const deleteProducts = async (req, res) => {
  res.send("delete porducts");
};

export const updateProducts = async (req, res) => {
  res.send("delete porducts");
};
