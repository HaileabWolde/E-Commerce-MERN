import  express from 'express'
import Auth from '../middlewares/Auth.js'
import { createOrder, getSingleOrder, getAllOrder, getOrders, updatepaidOrder} from '../controllers/order.js'
const router = express.Router()

router.get('/SingleOrder/:id', getSingleOrder)
router.get('/getALLOrder', getOrders)
router.get('/getAllOrderByUser', Auth, getAllOrder)
router.post('/createOrder', Auth, createOrder)
router.post('/updatepaid/pay/:id', Auth, updatepaidOrder)

export default router