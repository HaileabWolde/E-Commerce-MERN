import Order from "../model/OrderModel.js"
import { ErrorHandler } from "../middlewares/ErrorHandler.js"


export const getSingleOrder  = async(req,res, next)=>{
    const {id} = req.params

    try{
        const GetOrder = await Order.findById(id).populate('user', 'name email')
        if(!GetOrder){
            return next(ErrorHandler('Order is not found'))
        }

        res.status(200).json(GetOrder)
    }
    catch(error){
        return next(error)
    }
}
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