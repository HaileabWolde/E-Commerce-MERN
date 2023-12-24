import Order from "../model/OrderModel.js"
import { ErrorHandler } from "../middlewares/ErrorHandler.js"

export const getOrders = async(req,res, next)=>{
    const AllOrder = await Order.find({})
    res.status(200).json(AllOrder)
}

export const getAllOrder = async(req,res, next)=>{
    const id = req.userId
    try{
        const AllOrder = await Order.find({user:id})

        if(!AllOrder){
            return next(ErrorHandler(200, 'There is No Order by this username'))
        }
        else{
            res.status(200).json(AllOrder)
        }
    }
    catch(error){
        return next(error)
    }}

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

export const updatepaidOrder = async(req,res, next)=>{

    const {id:orderId} = req.params
    const{id, status, update_time, email_address} = req.body

    try{
        const updatedOrder = await Order.findByIdAndUpdate(orderId, {
            ...req.body,
            paymentResult: {
                id: id,
                status: status,
                update_time: update_time,
                email_address: email_address
            },
            isPaid : true,
            paidAt : Date.now()
        }, {new : true})

        res.status(200).json({msg : 'Updated Successfully'})
    }
    catch(error){
        return next (error)
    }
}