import products from "../../client/src/products.js"
import ProductSchema from "../model/ProductModel.js"
export const createproduct = async (req,res, next)=>{
    const ArrayofProduct = await ProductSchema.create({
        ...products,
        user: req.userId
    })
    res.status(200).json(ArrayofProduct)
}