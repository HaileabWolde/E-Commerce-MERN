import products from "../../client/src/products.js"
import ProductSchema from "../model/ProductModel.js"
export const createproduct = async (req, res, next) => {
  const userId = req.userId;
  try {
    const productData = products.map((product) => ({
      ...product,
      user: userId,
      _id: undefined, // Exclude _id field
    }));

    const createdProducts = await ProductSchema.create(productData);
    res.status(200).json(createdProducts);
  } catch (error) {
    next(error);
  }
};