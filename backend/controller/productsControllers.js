import Products from "../models/productsModel.js";
import {uploadImageCloud, deleteImageCloud} from "../libs/cloudinary.js";
import fs from "fs-extra"

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
  let image= null;

  try {
    if (req.files?.image) {
      const resultLoadImage = await uploadImageCloud(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath)
      image={
        url: resultLoadImage.secure_url,
        public_id:resultLoadImage.public_id
      }
    }

    const { title, description } = req.body;
    const newProducts = new Products({ title, description,image});
    await newProducts.save();
    res.json(newProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.mesage });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const producDeleted = await Products.findByIdAndRemove(req.params.id);
    if (!producDeleted) {
      return res.send("product not found");
    }

    if(producDeleted.image.public_id ){
    await deleteImageCloud(producDeleted.image.public_id);
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
