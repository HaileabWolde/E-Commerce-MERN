import Order from "../model/OrderModel.js"
import { ErrorHandler } from "../middlewares/ErrorHandler.js"
export const createOrder = async (req, res, next)=>{
    const userId = req.userId
    try{
        const NewOrder = await Order.create({
            ...req.body,
            user: userId
        })
       return  res.status(200).json(NewOrder)
    }
    catch(error){
        return (next(error))
    }
 
}